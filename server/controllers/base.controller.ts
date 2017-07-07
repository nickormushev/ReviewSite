export interface BaseController<T> {
    getAll(req, res);
    getById?(req, res);
    getByUserId?(req, res);
    getSite?(req, res);
    Login?(req, res);
    Delete?(req, res);
    Update?(req, res);
    Search?(req, res);
    Register?(req, res);
    Add?(req, res);
    VerificationMail?(req, res);
    CheckCode?(req, res);
}
