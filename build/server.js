"use strict";
var bodyParser = require("body-parser");
var expressJwt = require("express-jwt");
var cors = require("cors");
var db_config_1 = require("./db/db.config");
var review_model_1 = require("./models/review.model");
var user_model_1 = require("./models/user.model");
var dog_model_1 = require("./models/dog.model");
var expressApplication_1 = require("./app/expressApplication");
var config_1 = require("./Config/config");
var review_routes_1 = require("./routes/review.routes");
var user_routes_1 = require("./routes/user.routes");
var dog_routes_1 = require("./routes/dog.routes");
var reviews_controller_1 = require("./controllers/reviews.controller");
var dog_controller_1 = require("./controllers/dog.controller");
var users_controller_1 = require("./controllers/users.controller");
var userRoute;
var reviewRoute;
var dogRoute;
var reviewController;
var userController;
var dogsController;
var app;
var ReviewsData;
var UsersData;
var DogsData;
db_config_1.DbConfig.init()
    .then(function (dataProvider) {
    ReviewsData = dataProvider.provide("reviews", review_model_1.Review);
    UsersData = dataProvider.provide("users", user_model_1.User);
    DogsData = dataProvider.provide("dog", dog_model_1.Dog);
    app = new expressApplication_1.ExpressApplication();
})
    .then(function () {
    app.useMiddleware(bodyParser.json());
    app.useMiddleware(bodyParser.urlencoded({ extended: true }));
    app.useMiddleware(cors());
    app.useMiddleware(expressJwt({
        secret: config_1.secret,
        getToken: function (req) {
            if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
                return req.headers.authorization.split(" ")[1];
            }
            else if (req.query && req.query.token) {
                return req.query.token;
            }
            return null;
        }
    }).unless({ path: config_1.excludedRoutes }));
    app.useMiddleware(function (err, req, res, next) {
        if (401 === err.status) {
            res.redirect("/NotFound");
        }
    });
})
    .then(function () {
    dogsController = new dog_controller_1.DogController(DogsData);
    reviewController = new reviews_controller_1.ReviewsController(ReviewsData);
    userController = new users_controller_1.UsersController(UsersData);
})
    .then(function () {
    dogRoute = new dog_routes_1.DogRoute(dogsController);
    reviewRoute = new review_routes_1.ReviewRoute(reviewController);
    userRoute = new user_routes_1.UserRoute(userController);
    app.addRoute(reviewRoute);
    app.addRoute(dogRoute);
    app.addRoute(userRoute);
})
    .then(function () { return app.start(config_1.port); })
    .then(function () { console.log("API running on localhost:" + config_1.port); })["catch"](function (reason) { return console.log(reason); });
