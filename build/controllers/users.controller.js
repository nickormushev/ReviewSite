"use strict";
var config_1 = require("../Config/config");
var path = require("path");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var _ = require("lodash");
var Q = require("q");
var nodemailer = require("nodemailer");
var UsersController = (function () {
    function UsersController(UsersData) {
        this.UsersData = UsersData;
    }
    ;
    UsersController.prototype.getAll = function (req, res) {
        return this.UsersData.GetAll()
            .then(function (result) {
            return res.send(result);
        });
    };
    ;
    UsersController.prototype.getById = function (req, res) {
        return res.send(this.UsersData.GetById(req.params.id));
    };
    ;
    UsersController.prototype.Login = function (Username, Password) {
        var deferred = Q.defer();
        this.UsersData.findOne({ Username: Username })
            .then(function (user) {
            var Token;
            if (user.Admin === true) {
                Token = jwt.sign(new Object({ sub: user.id, admin: true }), config_1.secret);
            }
            else {
                Token = jwt.sign(new Object({ sub: user.id, admin: false }), config_1.secret);
            }
            if (user && bcrypt.compareSync(Password, user.hash)) {
                deferred.resolve({
                    _id: user.id,
                    Username: user.Username,
                    Birthdate: user.Birthdate,
                    Gender: user.Gender,
                    EMail: user.EMail,
                    token: Token
                });
            }
            else {
                deferred.resolve();
            }
        })["catch"](function (err) { return deferred.reject(err.name + ": " + err.message); });
        return deferred.promise;
    };
    ;
    UsersController.prototype.Register = function (req, res) {
        var _this = this;
        var body = req.body;
        return this.UsersData.findOne({ Username: body.Username }).then(function (result) {
            if (result) {
                return res.status(400).send("There is an account with this username");
            }
            ;
            return _this.UsersData.findOne({ EMail: body.EMail }).then(function (Email) {
                if (Email) {
                    return res.status(400).send("There is an account with this email");
                }
                ;
                body.Admin = false;
                body.hash = bcrypt.hashSync(req.body.Password, 10);
                if (body.Year) {
                    body.Birthdate = new Date(body.Year, (+body.Month - 1), body.Day);
                }
                else {
                    body.Birthdate = "";
                }
                return res.status(200).send(_this.UsersData.add(body));
            });
        })["catch"](function (error) { return console.log(error); });
    };
    UsersController.prototype.Update = function (req, res) {
        var _this = this;
        var body = req.body;
        return this.UsersData.GetById(body._id).then(function (user) {
            body.Admin = user.Admin;
            if (!body.Password) {
                body.hash = user.hash;
            }
            else {
                body.hash = bcrypt.hashSync(req.body.Password, 10);
            }
            if (body.Username !== user.Username) {
                return _this.UsersData.findOne({ Username: body.Username }).then(function (result) {
                    if (result) {
                        return res.status(400).send("There is an account with this username");
                    }
                    else {
                        _this.UsersData.Update(body, body._id);
                        return res.send(_.omit(body, "Password", "RepeatPassword"));
                    }
                    ;
                });
            }
            _this.UsersData.Update(body, body._id);
            return res.send(_.omit(body, "Password", "RepeatPassword"));
        });
    };
    UsersController.prototype.VerificationMail = function (req, res) {
        var transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "randoguy444@gmail.com",
                pass: "asdfgasdfg"
            }
        });
        var mailOptions = {
            from: "randoguy444@gmail.com",
            to: req.body.EMail,
            subject: "Verify that you want to change your password",
            text: "Use this code to confirm the password change: " + this.getCode(req.body.EMail)
        };
        return transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.json({ yo: "error" });
            }
            else {
                console.log("Message sent: " + info.response);
                return res.status(200).json({ yo: info.response });
            }
            ;
        });
    };
    UsersController.prototype.getCode = function (EMail) {
        var _this = this;
        var code = (Math.floor(1000 + Math.random() * 9000)).toString();
        this.UsersData.findOne({ EMail: EMail }).then(function (user) {
            user.code = code;
            _this.UsersData.Update(user, user._id);
        });
        return code;
    };
    UsersController.prototype.CheckCode = function (req, res) {
        this.UsersData.findOne({ code: req.body.Code }).then(function (user) {
            if (user) {
                var Token = void 0;
                if (user.Admin === true) {
                    Token = jwt.sign(new Object({ sub: user.id, admin: true }), config_1.secret);
                }
                else {
                    Token = jwt.sign(new Object({ sub: user.id, admin: false }), config_1.secret);
                }
                return res.status(200).send({
                    _id: user.id,
                    Username: user.Username,
                    Birthdate: user.Birthdate,
                    Gender: user.Gender,
                    EMail: user.EMail,
                    token: Token
                });
            }
            return res.status(400).send("U shall not pass");
        });
    };
    UsersController.prototype.Delete = function (req, res) {
        return this.UsersData.DeleteById(req.params.id)
            .then(function () {
            return res.status(200).send("Deleted");
        })["catch"](function (err) { return res.send(err); });
    };
    UsersController.prototype.getSite = function (req, res) {
        return res.sendFile(path.join(__dirname, "../../dist/index.html"));
    };
    ;
    return UsersController;
}());
exports.UsersController = UsersController;
