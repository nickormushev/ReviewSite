import { IData } from "../data/base.data";
import { Dog } from "../models/dog.model";
import { BaseController } from "./base.controller";

import { Request, Response } from "express";
import * as path from "path";


export class DogController implements BaseController<Dog> {

    constructor(public DogsData: IData<Dog>) { };

    getAll(req: Request, res: Response) {
        return this.DogsData.GetAll()
            .then((result: Dog[]) => {
                return res.send(result);
            });
    };
    Add(req: Request, res: Response) {
        const body = req.body;
        return res.status(200).send(this.DogsData.add(body));
    };
    getSite(req: Request, res: Response) {
        return res.sendFile(path.join(__dirname, "../../dist/index.html"));
    };
}
