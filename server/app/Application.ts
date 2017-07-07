import { BaseRoute } from "../routes/base.route";

export interface Application {
    start(port: string | number);
    addRoute(Routes: BaseRoute);
    useMiddleware(Middleware: any);
}
