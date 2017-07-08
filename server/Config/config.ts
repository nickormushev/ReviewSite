const ConnectionString = process.env.CONNECTION_STRING || "mongodb://localhost:27017/ReviewsDb";
const apiUrl = "http://localhost:3000";
const secret = "Pe6o";
const excludedRoutes: any[] = [ /^\/?(api)?\/login/ , /^\/?(api)?\/users\/register/, /^\/?(api)?\/games\/?(.*)?/,
    /^\/?(api)?\/movies\/?(.*)?/, /^\/?(api)?\/books\/?(.*)?/, /^\/?(api)?\/home\/?(.*)?/, /^\/?(api)?\/music\/?(.*)?/,
    /^\/?(api)?\/review\/?(.*)?/, /^\/?(api)?\/search\/?(.*)?/, , /^\/profile\/.*/, /^\/write\/?(.*)?/, "/api/mail", "/register",
    /^\/?(api)?\/code/, "/NotFound"];
const port: any = process.env.PORT || "3000";

export { ConnectionString, apiUrl, secret, port, excludedRoutes }
