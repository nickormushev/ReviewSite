"use strict";
var dynamic_data_1 = require("../data/dynamic.data");
var DataProvider = (function () {
    function DataProvider(db) {
        this.db = db;
        this.db = db;
    }
    DataProvider.prototype.provide = function (Datatype, ModelFuncType) {
        var data = new dynamic_data_1.DynamicDbData(this.db, Datatype, ModelFuncType);
        return data;
    };
    ;
    return DataProvider;
}());
exports.DataProvider = DataProvider;
