"use strict";
var mongodb_1 = require("mongodb");
var _ = require("lodash");
var DynamicDbData = (function () {
    function DynamicDbData(db, collectionName, modelFuncs) {
        this.db = db;
        this.collectionName = collectionName;
        this.db = db;
        this.collectionName = collectionName;
        this.collection = this.db.collection(collectionName);
        this.modelFuncs = modelFuncs;
    }
    DynamicDbData.prototype.add = function (obj) {
        var _this = this;
        return this.collection.insertOne(_.omit(obj, "Password", "RepeatPassword", "Month", "Year", "Day"))
            .then(function (result) { return _this.findOne(obj); }, function (error) { Promise.resolve(null); });
    };
    ;
    DynamicDbData.prototype.GetAll = function () {
        var _this = this;
        return this.collection.find().toArray()
            .then(function (models) {
            models.map(function (model) { return _this.modelFuncs.FromModel(model); });
            return models;
        })["catch"](function (error) { return Promise.resolve(null); });
    };
    DynamicDbData.prototype.find = function (query, PageNumber) {
        var _this = this;
        PageNumber--;
        return this.collection.find(query).sort({ _id: -1 }).limit(10).skip(10 * PageNumber).toArray()
            .then(function (models) {
            models.map(function (model) { return _this.modelFuncs.FromModel(model); });
            return models;
        })["catch"](function (error) { return Promise.resolve(null); });
    };
    DynamicDbData.prototype.GetById = function (id) {
        var _this = this;
        var objectId = new mongodb_1.ObjectID(id);
        return this.collection.findOne({ _id: objectId })
            .then(function (model) { return _this.modelFuncs.FromModel(model); });
    };
    DynamicDbData.prototype.DeleteAll = function () {
        var _this = this;
        return this.collection.remove({})
            .then(function () { return _this.collection.find().toArray(); });
    };
    DynamicDbData.prototype.Update = function (obj, id) {
        var objectId = new mongodb_1.ObjectID(id);
        obj = this.modelFuncs.ToModel(obj);
        return this.collection.update({ _id: objectId }, _.omit(obj, "Password", "RepeatPassword"), { upsert: true });
    };
    DynamicDbData.prototype.findOne = function (query) {
        var _this = this;
        return this.collection.findOne(query)
            .then(function (obj) {
            if (obj) {
                return _this.modelFuncs.FromModel(obj);
            }
            ;
            return null;
        });
    };
    DynamicDbData.prototype.Search = function (id, PageNumber) {
        var _this = this;
        PageNumber--;
        return this.collection.find({ $text: { $search: id } }).limit(10).sort({ "id": -1 })
            .skip(10 * PageNumber).toArray().then(function (models) {
            models.map(function (model) { return _this.modelFuncs.FromModel(model); });
            return models;
        })["catch"](function (error) { return Promise.resolve(null); });
    };
    DynamicDbData.prototype.DeleteById = function (id) {
        var _this = this;
        var objectId = new mongodb_1.ObjectID(id);
        return this.collection.remove({ _id: objectId })
            .then(function (model) { return _this.modelFuncs.FromModel(model); });
    };
    return DynamicDbData;
}());
exports.DynamicDbData = DynamicDbData;
