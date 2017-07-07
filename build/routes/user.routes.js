"use strict";
var express = require("express");
var UserRoute = (function () {
    function UserRoute(controller) {
        this.Router = express.Router();
        this.controller = controller;
        this.InitRoutes();
    }
    UserRoute.prototype.InitRoutes = function () {
        var _this = this;
        this.Router.get("/api/users/:id", function (req, res) { return _this.controller.getById(req, res)["catch"](function (err) { return res.status(400).send(err); }); })
            .get("/api/users", function (req, res) { return _this.controller.getAll(req, res)["catch"](function (err) { return res.status(400).send(err); }); })
            .get("/*", this.controller.getSite)
            .post("/api/users/register", function (req, res) { return _this.controller.Register(req, res)["catch"](function (err) { return res.status(400).send(err); }); })
            .post("/api/login", function (req, res) {
            _this.controller.Login(req.body.Username, req.body.Password)
                .then(function (user) {
                if (user) {
                    res.send(user);
                }
                else {
                    res.status(400).send("Username or password is incorrect");
                }
            })["catch"](function (err) { return res.status(400).send(err); });
        })
            .post("/api/mail", function (req, res) {
            _this.controller.VerificationMail(req, res);
        })
            .post("/api/code", function (req, res) {
            return _this.controller.CheckCode(req, res);
        })
            .put("/api/users/:id", function (req, res) {
            return _this.controller.Update(req, res)["catch"](function (err) { return res.send(err); });
        })["delete"]("/api/delete/users/:id", function (req, res) { return _this.controller.Delete(req, res)["catch"](function (err) { return res.status(400).send(err); }); });
    };
    UserRoute.prototype.getRouter = function () {
        return this.Router;
    };
    return UserRoute;
}());
exports.UserRoute = UserRoute;
