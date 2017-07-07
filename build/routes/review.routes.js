"use strict";
var express = require("express");
var ReviewRoute = (function () {
    function ReviewRoute(controller) {
        this.Router = express.Router();
        this.controller = controller;
        this.InitRoutes();
    }
    ReviewRoute.prototype.InitRoutes = function () {
        var _this = this;
        this.Router.get("/api/home/:id", function (req, res) { _this.controller.getAll(req, res); })
            .get("/api/music/:id", function (req, res) { req.body.filter = "Music"; _this.controller.getAll(req, res); })
            .get("/api/games/:id", function (req, res) { req.body.filter = "Game"; _this.controller.getAll(req, res); })
            .get("/api/books/:id", function (req, res) { req.body.filter = "Book"; _this.controller.getAll(req, res); })
            .get("/api/movies/:id", function (req, res) { req.body.filter = "Movie"; _this.controller.getAll(req, res); })
            .get("/api/review/:id", function (req, res) { _this.controller.getById(req, res); })
            .get("/api/search/:id/:id2", function (req, res) { return _this.controller.Search(req, res); })
            .get("/api/profile/reviews/:id/:id2", function (req, res) { return _this.controller.getByUserId(req, res); })
            .get("/api/movies", function (req, res) { return res.redirect("/api/movies/1"); })
            .get("/api/home", function (req, res) { return res.redirect("/api/home/1"); })
            .get("/api/music", function (req, res) { return res.redirect("/api/music/1"); })
            .get("/api/games", function (req, res) { return res.redirect("/api/games/1"); })
            .get("/api/books", function (req, res) { return res.redirect("/api/books/1"); })
            .post("/api/review/add", function (req, res) { return _this.controller.Add(req, res); })["delete"]("/api/delete/review/:id", function (req, res) { return _this.controller.Delete(req, res); })
            .put("/api/review/:id", function (req, res) { return _this.controller.Update(req, res); });
    };
    ReviewRoute.prototype.getRouter = function () {
        return this.Router;
    };
    return ReviewRoute;
}());
exports.ReviewRoute = ReviewRoute;
