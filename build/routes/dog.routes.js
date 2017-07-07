"use strict";
var express = require("express");
var DogRoute = (function () {
    function DogRoute(controller) {
        this.Router = express.Router();
        this.controller = controller;
        this.InitRoutes();
    }
    DogRoute.prototype.InitRoutes = function () {
        var _this = this;
        this.Router.post("/api/dogs/add", function (req, res) { return _this.controller.Add(req, res); })
            .get("/api/dogs", function (req, res) {
            return _this.controller.getAll(req, res);
        });
    };
    DogRoute.prototype.getRouter = function () {
        return this.Router;
    };
    return DogRoute;
}());
exports.DogRoute = DogRoute;
