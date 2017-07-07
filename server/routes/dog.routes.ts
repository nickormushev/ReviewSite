import { Dog } from "../models/dog.model";
import { BaseController } from "../controllers/base.controller";
import { BaseRoute } from "./base.route";

import * as express from "express";
import * as path from "path";

export class DogRoute implements BaseRoute {
    controller: BaseController<Dog>;
    public Router: express.Router;
    constructor(controller: BaseController<Dog>) {
        this.Router = express.Router();
        this.controller = controller;
        this.InitRoutes();
    }
    InitRoutes() {
        this.Router.post("/api/dogs/add", (req, res) => this.controller.Add(req, res))
            .get("/api/dogs", (req, res) => {
                return this.controller.getAll(req, res);
            });
    }

    getRouter() {
        return this.Router;
    }

}
