"use strict";
var mongodb_1 = require("mongodb");
var data_provider_1 = require("../providers/data.provider");
var config_1 = require("../Config/config");
var DbConfig = (function () {
    function DbConfig() {
    }
    DbConfig.init = function () {
        return mongodb_1.MongoClient.connect(config_1.ConnectionString)
            .then(function (db) {
            var provider = new data_provider_1.DataProvider(db);
            return provider;
        });
    };
    ;
    return DbConfig;
}());
exports.DbConfig = DbConfig;
