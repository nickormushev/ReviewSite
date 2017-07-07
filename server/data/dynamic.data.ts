import { Db, Collection, ObjectID } from "mongodb";
import { ModelFuncs } from "../models/model.funcs";
import { User } from "../models/user.model";
import { IData } from "./base.data";

import * as _ from "lodash";


export class DynamicDbData<T> implements IData<T> {

    modelFuncs: ModelFuncs<T>;
    private collection: any;

    constructor(private db: Db, public collectionName: string, modelFuncs: ModelFuncs<T>) {
        this.db = db;
        this.collectionName = collectionName;
        this.collection = this.db.collection(collectionName);
        this.modelFuncs = modelFuncs;
    }
    public add(obj: T): Promise<T> {
        return this.collection.insertOne(_.omit(obj, "Password", "RepeatPassword", "Month", "Year", "Day"))
            .then((result) => { return this.findOne(obj); },
            (error) => { Promise.resolve(null); });
    };

    public GetAll() {
        return this.collection.find().toArray()
            .then((models) => {
                models.map(model => this.modelFuncs.FromModel(model));
                return models;
            }).catch(error => Promise.resolve(null));
    }
    public find(query: any, PageNumber?: number): Promise<T[]> {
        PageNumber--;
        return this.collection.find(query).sort({ _id: -1 }).limit(10).skip(10 * PageNumber).toArray()
            .then((models) => {
                models.map(model => this.modelFuncs.FromModel(model));
                return models;
            }).catch(error => Promise.resolve(null));
    }
    public GetById(id: string): Promise<T> {

        const objectId = new ObjectID(id);

        return this.collection.findOne({ _id: objectId })
            .then((model) => this.modelFuncs.FromModel(model));
    }

    public DeleteAll(): Promise<T[]> {
        return this.collection.remove({})
            .then(() => this.collection.find().toArray());
    }

    public Update(obj: T, id: string): Promise<T> {
        const objectId = new ObjectID(id);
        obj = this.modelFuncs.ToModel(obj);
        return this.collection.update({ _id: objectId }, _.omit(obj, "Password", "RepeatPassword"), { upsert: true });
    }

    public findOne(query: any): Promise<T> {
        return this.collection.findOne(query)
            .then(obj => {
                if (obj) {
                    return this.modelFuncs.FromModel(obj);
                };
                return null;
            });
    }
    public Search(id: string, PageNumber: number) {
        PageNumber --;
        return this.collection.find({ $text: { $search: id } }).limit(10).sort({"id": -1})
        .skip(10 * PageNumber).toArray().then((models) => {
            models.map(model => this.modelFuncs.FromModel(model));
            return models;
        }).catch(error => Promise.resolve(null));
    }
    public DeleteById(id) {
        const objectId = new ObjectID(id);
        return this.collection.remove({ _id: objectId })
            .then((model) => this.modelFuncs.FromModel(model));
    }

}
