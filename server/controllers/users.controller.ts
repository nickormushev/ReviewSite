import { IData } from "../data/base.data";
import { User } from "../models/user.model";
import { BaseController } from "./base.controller";
import { secret } from "../Config/config";

import { Request, Response } from "express";
import * as path from "path";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import * as _ from "lodash";
import * as nodemailer from "nodemailer";


export class UsersController implements BaseController<User> {
    constructor(public UsersData: IData<User>) { };

    getAll(req: Request, res: Response) {
        return this.UsersData.GetAll()
            .then((result: User[]) => {
                return res.send(result);
            });
    };

    getById(req: Request, res: Response) {
        return res.send(this.UsersData.GetById(req.params.id));
    };
    Login(Username, Password) {

        return this.UsersData.findOne({ Username: Username })
            .then((user: User) => {

                if (user && bcrypt.compareSync(Password, user.hash)) {
                let Token;
                if (user.Admin === true) {
                    Token = jwt.sign(new Object({ sub: user.id, admin: true }), secret);
                } else {
                    Token = jwt.sign(new Object({ sub: user.id, admin: false }), secret);
                }
                    return new Promise((res, rej) => {
                       res({_id: user.id,
                        Username: user.Username,
                        Birthdate: user.Birthdate,
                        Gender: user.Gender,
                        EMail: user.EMail,
                        token: Token});
                    });
                } else {
                       return new Promise((res, rej) => {
                       res();
                    });
                }
            }).catch(err => {
                return new Promise((res, rej) => {
                       res(err.name + ": " + err.message);
            });
        });


    };
    Register(req: Request, res: Response) {
        const body = req.body;

        return this.UsersData.findOne({ Username: body.Username }).then(result => {
            if (result) {
                return res.status(400).send("There is an account with this username");
            };
            return this.UsersData.findOne({ EMail: body.EMail }).then(Email => {
                if (Email) {
                    return res.status(400).send("There is an account with this email");
                };
                body.Admin = false;
                body.hash = bcrypt.hashSync(req.body.Password, 10);
                if (body.Year) {
                    body.Birthdate = new Date(body.Year, (+body.Month - 1), body.Day);
                } else {
                    body.Birthdate = "";
                }

                return res.status(200).send(this.UsersData.add(body));
            });
        }).catch((error) => console.log(error));
    }
    Update(req: Request, res: Response) {
        const body = req.body;

        return this.UsersData.GetById(body._id).then((user: User) => {
            body.Admin = user.Admin;
            if (!body.Password) {
                body.hash = user.hash;
            } else { body.hash = bcrypt.hashSync(req.body.Password, 10); }
            if (body.Username !== user.Username) {
                return this.UsersData.findOne({ Username: body.Username }).then(
                    (result: any) => {
                        if (result) {
                            return res.status(400).send("There is an account with this username");
                        } else {
                            this.UsersData.Update(body, body._id);
                            return res.send(_.omit(body, "Password", "RepeatPassword"));
                        };
                    });
            }
            this.UsersData.Update(body, body._id);
            return res.send(_.omit(body, "Password", "RepeatPassword"));
        });

    }
    VerificationMail(req: Request, res: Response) {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "randoguy444@gmail.com",
                pass: "asdfgasdfg",
            }
        });
        const mailOptions = {
            from: "randoguy444@gmail.com",
            to: req.body.EMail,
            subject: "Verify that you want to change your password",
            text: "Use this code to confirm the password change: " + this.getCode(req.body.EMail)
        };

        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.json({ yo: "error" });
            } else {
                console.log("Message sent: " + info.response);
                return res.status(200).json({ yo: info.response });
            };
        });
    }
    getCode(EMail: string): string {
        const code = (Math.floor(1000 + Math.random() * 9000)).toString();
        this.UsersData.findOne({ EMail: EMail }).then((user: User) => {
            user.code = code;
            this.UsersData.Update(user, user._id);
        });
        return code;

    }
    CheckCode(req: Request, res: Response) {
        this.UsersData.findOne({ code: req.body.Code }).then((user) => {
            if (user) {
                let Token;
                if (user.Admin === true) {
                    Token = jwt.sign(new Object({ sub: user.id, admin: true }), secret);
                } else {
                    Token = jwt.sign(new Object({ sub: user.id, admin: false }), secret);
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
    }
    Delete(req: Request, res: Response) {
        return this.UsersData.DeleteById(req.params.id)
            .then(() => {
                return res.status(200).send("Deleted");
            }).catch(err => res.send(err));
    }
    getSite(req: Request, res: Response) {
        return res.sendFile(path.join(__dirname, "../../dist/index.html"));
    };
}
