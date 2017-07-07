"use strict";
var path = require("path");
var DogController = (function () {
    function DogController(DogsData) {
        this.DogsData = DogsData;
    }
    ;
    DogController.prototype.getAll = function (req, res) {
        return this.DogsData.GetAll()
            .then(function (result) {
            return res.send(result);
        });
    };
    ;
    DogController.prototype.Add = function (req, res) {
        var body = req.body;
        return res.status(200).send(this.DogsData.add(body));
    };
    ;
    DogController.prototype.getSite = function (req, res) {
        return res.sendFile(path.join(__dirname, "../../dist/index.html"));
    };
    ;
    return DogController;
}());
exports.DogController = DogController;
