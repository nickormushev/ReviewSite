import { IData } from "../data/base.data";
import { Review } from "../models/review.model";
import { BaseController } from "./base.controller";

import { Request, Response } from "express";
import * as path from "path";


export class ReviewsController implements BaseController<Review> {

    constructor(public ReviewsData: IData<Review>) {};

    getAll(req: Request, res: Response) {
        let query = {};
        if (req.body.filter) { query = { type: req.body.filter }; };
        return this.ReviewsData.find(query, req.params.id)
            .then((result: Review[]) => {
                return res.send(result);
            });
    };
    getById(req: Request, res: Response) {
        return this.ReviewsData.GetById(req.params.id)
            .then((result) => {
                res.send(result);
            });
    };
    getByUserId(req: Request, res: Response) {
        return this.ReviewsData.find({ userId: req.params.id }, req.params.id2).then((result: Review[]) => {
            return res.send(result);
        });
    };
    getSite(req: Request, res: Response) {
        return res.sendFile(path.join(__dirname, "../../dist/index.html"));
    };
    Update(req: Request, res: Response) {
        const body = req.body;
        body.date = new Date();
        return res.status(200).send(this.ReviewsData.Update(body, body.id));
    }
    Delete(req: Request, res: Response) {
        return this.ReviewsData.DeleteById(req.params.id)
            .then(() => {
                return res.status(200).send("Deleted");
            }).catch(err => res.send(err));
    }
    Search(req: Request, res: Response) {
        return this.ReviewsData.Search(req.params.id, req.params.id2)
            .then((result: Review[]) => {
                if (result) {
                    return res.send(result);

                }
            res.status(404).send("Not Found");
        });
    }
    Add(req: Request, res: Response) {
        const body = req.body;
        body.date = new Date();
        return res.status(200).send(this.ReviewsData.add(body));
    };
}
