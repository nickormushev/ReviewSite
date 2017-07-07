"use strict";
var express = require("express");
var path = require("path");
var ExpressApplication = (function () {
    function ExpressApplication() {
        this.app = express();
        this.onInit();
    }
    ExpressApplication.prototype.onInit = function () {
        this.app.use(express.static(__dirname + "/../../dist"));
        this.app.use(express.static(path.join(__dirname, "../../dist")));
    };
    ExpressApplication.prototype.start = function (port) {
        var _this = this;
        port = +port;
        return new Promise(function (res, rej) {
            _this.app.listen(port, function () { return res(); });
        });
    };
    ExpressApplication.prototype.addRoute = function (Routes) {
        var router = Routes.getRouter();
        this.app.use(router);
    };
    ;
    ExpressApplication.prototype.useMiddleware = function (Middleware) {
        this.app.use(Middleware);
    };
    return ExpressApplication;
}());
exports.ExpressApplication = ExpressApplication;
