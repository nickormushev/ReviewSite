"use strict";
var path = require("path");
var ReviewsController = (function () {
    function ReviewsController(ReviewsData) {
        this.ReviewsData = ReviewsData;
    }
    ;
    ReviewsController.prototype.getAll = function (req, res) {
        var query = {};
        if (req.body.filter) {
            query = { type: req.body.filter };
        }
        ;
        return this.ReviewsData.find(query, req.params.id)
            .then(function (result) {
            return res.send(result);
        });
    };
    ;
    ReviewsController.prototype.getById = function (req, res) {
        return this.ReviewsData.GetById(req.params.id)
            .then(function (result) {
            res.send(result);
        });
    };
    ;
    ReviewsController.prototype.getByUserId = function (req, res) {
        return this.ReviewsData.find({ userId: req.params.id }, req.params.id2).then(function (result) {
            return res.send(result);
        });
    };
    ;
    ReviewsController.prototype.getSite = function (req, res) {
        return res.sendFile(path.join(__dirname, "../../dist/index.html"));
    };
    ;
    ReviewsController.prototype.Update = function (req, res) {
        var body = req.body;
        body.date = new Date();
        return res.status(200).send(this.ReviewsData.Update(body, body.id));
    };
    ReviewsController.prototype.Delete = function (req, res) {
        return this.ReviewsData.DeleteById(req.params.id)
            .then(function () {
            return res.status(200).send("Deleted");
        })["catch"](function (err) { return res.send(err); });
    };
    ReviewsController.prototype.Search = function (req, res) {
        return this.ReviewsData.Search(req.params.id, req.params.id2)
            .then(function (result) {
            if (result) {
                return res.send(result);
            }
            res.status(404).send("Not Found");
        });
    };
    ReviewsController.prototype.Add = function (req, res) {
        var body = req.body;
        body.date = new Date();
        return res.status(200).send(this.ReviewsData.add(body));
    };
    ;
    return ReviewsController;
}());
exports.ReviewsController = ReviewsController;
