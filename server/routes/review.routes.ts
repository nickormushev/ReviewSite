import { Review } from "../models/review.model";
import { BaseController } from "../controllers/base.controller";
import { BaseRoute } from "./base.route";

import * as express from "express";
import * as path from "path";

export class ReviewRoute implements BaseRoute {
    controller: BaseController<Review>;
    public Router: express.Router;
    constructor(controller: BaseController<Review>) {
        this.Router = express.Router();
        this.controller = controller;
        this.InitRoutes();
    }
    InitRoutes() {
        this.Router.get("/api/home/:id", (req, res) => { this.controller.getAll(req, res); })
            .get("/api/music/:id", (req, res) => { req.body.filter = "Music"; this.controller.getAll(req, res); })
            .get("/api/games/:id", (req, res) => { req.body.filter = "Game"; this.controller.getAll(req, res); })
            .get("/api/books/:id", (req, res) => { req.body.filter = "Book"; this.controller.getAll(req, res); })
            .get("/api/movies/:id", (req, res) => { req.body.filter = "Movie"; this.controller.getAll(req, res); })
            .get("/api/review/:id", (req, res) => { this.controller.getById(req, res); })
            .get("/api/search/:id/:id2", (req, res) => this.controller.Search(req, res))
            .get("/api/profile/reviews/:id/:id2", (req, res) => this.controller.getByUserId(req, res))
            .get("/api/movies", (req, res) => res.redirect("/api/movies/1"))
            .get("/api/home", (req, res) => res.redirect("/api/home/1"))
            .get("/api/music", (req, res) => res.redirect("/api/music/1"))
            .get("/api/games", (req, res) => res.redirect("/api/games/1"))
            .get("/api/books", (req, res) => res.redirect("/api/books/1"))
            .post("/api/review/add", (req, res) => this.controller.Add(req, res))
            .delete("/api/delete/review/:id", (req, res) => this.controller.Delete(req, res))
            .put("/api/review/:id", (req, res) => this.controller.Update(req, res));

    }

    getRouter() {
        return this.Router;
    }

}
