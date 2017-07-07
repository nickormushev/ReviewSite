import { User } from "../models/user.model";
import { BaseController } from "../controllers/base.controller";
import { BaseRoute } from "./base.route";

import * as express from "express";
import * as path from "path";

export class UserRoute implements BaseRoute {
    controller: BaseController<User>;
    public Router: express.Router;
    constructor(controller: BaseController<User>) {
        this.Router = express.Router();
        this.controller = controller;
        this.InitRoutes();
    }
    InitRoutes() {
        this.Router.get("/api/users/:id", (req, res) => this.controller.getById(req, res).catch((err) => res.status(400).send(err)))
            .get("/api/users", (req, res) => this.controller.getAll(req, res).catch((err) => res.status(400).send(err)))
            .get("/*", this.controller.getSite)
            .post("/api/users/register", (req, res) => this.controller.Register(req, res).catch(err => res.status(400).send(err)))
            .post("/api/login", (req, res) => {
                this.controller.Login(req.body.Username, req.body.Password)
                    .then((user) => {
                        if (user) {
                            res.send(user);
                        } else {
                            res.status(400).send("Username or password is incorrect");
                        }
                    }).catch((err) => res.status(400).send(err));
            })
            .post("/api/mail", (req, res) => {
                this.controller.VerificationMail(req, res);
            })
            .post("/api/code", (req, res) => {
                return this.controller.CheckCode(req, res);
            })
            .put("/api/users/:id", (req, res) => {
                return this.controller.Update(req, res).catch((err) => res.send(err));
            })
            .delete("/api/delete/users/:id", (req, res) => this.controller.Delete(req, res).catch((err) => res.status(400).send(err)));

    }

    getRouter() {
        return this.Router;
    }

}
