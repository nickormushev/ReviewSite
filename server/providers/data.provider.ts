import { Db, Collection } from "mongodb";
import { IProvider } from "./base.provider";
import { IData } from "../data/base.data";
import { DynamicDbData } from "../data/dynamic.data";

export class DataProvider implements IProvider {
    constructor(public db: Db) {
        this.db = db;
    }
    public provide<T>(Datatype: string, ModelFuncType): IData<T> {
      const data: IData<T> = new DynamicDbData(this.db, Datatype, ModelFuncType);
      return data;
    };
}
