import * as express from "express";
import * as path from "path";

import { IData } from "../data/base.data";
import { Review } from "../models/review.model";
import { User } from "../models/user.model";
import { BaseRoute } from "../routes/base.route";
import { Application } from "./Application";

export class ExpressApplication implements Application {

    app: express.Application;

    constructor() {
        this.app = express();
        this.onInit();
    }

    onInit() {
        this.app.use(express.static(__dirname + "/../../dist"));
        this.app.use(express.static(path.join(__dirname, "../../dist")));
    }
    start(port: string | number): Promise<{}> {
        port = +port;
        return new Promise((res, rej) => {
            this.app.listen(port, () => res());
        });
    }

    addRoute(Routes: BaseRoute) {
        const router = Routes.getRouter();
        this.app.use(router);
    };

    useMiddleware(Middleware: any) {
        this.app.use(Middleware);
    }

}
