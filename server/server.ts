import * as bodyParser from "body-parser";
const expressJwt = require("express-jwt");
import * as cors from "cors";

import { DbConfig } from "./db/db.config";
import { DataProvider } from "./providers/data.provider";

import { IData } from "./data/base.data";
import { Review } from "./models/review.model";
import { User } from "./models/user.model";
import { Dog } from "./models/dog.model";

import { ExpressApplication } from "./app/expressApplication";
import { Application } from "./app/Application";
import { port, secret, excludedRoutes } from "./Config/config";

import { ReviewRoute } from "./routes/review.routes";
import { UserRoute } from "./routes/user.routes";
import { BaseRoute } from "./routes/base.route";
import { DogRoute } from "./routes/dog.routes";

import { BaseController } from "./controllers/base.controller";
import { ReviewsController } from "./controllers/reviews.controller";
import { DogController } from "./controllers/dog.controller";
import { UsersController } from "./controllers/users.controller";

let userRoute: BaseRoute;
let reviewRoute: BaseRoute;
let dogRoute: BaseRoute;
let reviewController: BaseController<Review>;
let userController: BaseController<User>;
let dogsController: BaseController<Dog>;
let app: Application;
let ReviewsData: IData<Review>;
let UsersData: IData<User>;
let DogsData: IData<Dog>;


DbConfig.init()
    .then((dataProvider: DataProvider) => {
        ReviewsData = dataProvider.provide<Review>("reviews", Review);
        UsersData = dataProvider.provide<User>("users", User);
        DogsData = dataProvider.provide<Dog>("dog", Dog);
        app = new ExpressApplication();
    })
    .then(() => {
        app.useMiddleware(bodyParser.json());
        app.useMiddleware(bodyParser.urlencoded({ extended: true }));
        app.useMiddleware(cors());
        app.useMiddleware(expressJwt({
            secret: secret,
            getToken: (req) => {
                if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
                    return req.headers.authorization.split(" ")[1];
                } else if (req.query && req.query.token) {
                    return req.query.token;
                }
                return null;
            }
        }).unless({ path: excludedRoutes }));
        app.useMiddleware(function (err, req, res, next) {
            if (401 === err.status) {
                res.redirect("/NotFound");
            }
        });

    })
    .then(() => {
        dogsController = new DogController(DogsData);
        reviewController = new ReviewsController(ReviewsData);
        userController = new UsersController(UsersData);
    })
    .then(() => {
        dogRoute = new DogRoute(dogsController);
        reviewRoute = new ReviewRoute(reviewController);
        userRoute = new UserRoute(userController);
        app.addRoute(reviewRoute);
        app.addRoute(dogRoute);
        app.addRoute(userRoute);
    })
    .then(() => app.start(port))
    .then(() => { console.log(`API running on localhost:${port}`); })
    .catch((reason) => console.log(reason));
