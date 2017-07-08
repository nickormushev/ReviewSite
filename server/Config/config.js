"use strict";
var ConnectionString = process.env.CONNECTION_STRING || "mongodb://localhost:27017/ReviewsDb";
exports.ConnectionString = ConnectionString;
var apiUrl = "http://localhost:3000";
exports.apiUrl = apiUrl;
var secret = "Pe6o";
exports.secret = secret;
var excludedRoutes = [/^\/?(api)?\/login/, /^\/?(api)?\/users\/register/, /^\/?(api)?\/games\/?(.*)?/,
    /^\/?(api)?\/movies\/?(.*)?/, /^\/?(api)?\/books\/?(.*)?/, /^\/?(api)?\/home\/?(.*)?/, /^\/?(api)?\/music\/?(.*)?/,
    /^\/?(api)?\/review\/?(.*)?/, /^\/?(api)?\/search\/?(.*)?/, , /^\/profile\/.*/, "/write", "/api/mail", "/register",
    /^\/?(api)?\/code/, "/NotFound"];
exports.excludedRoutes = excludedRoutes;
var port = process.env.PORT || "3000";
exports.port = port;
