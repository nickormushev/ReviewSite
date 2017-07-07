import { Db, MongoClient } from "mongodb";
import { DataProvider } from "../providers/data.provider";
import { IProvider } from "../providers/base.provider";
import { ConnectionString } from "../Config/config";

export class DbConfig {
    public static init(): Promise<IProvider> {
        return MongoClient.connect(ConnectionString)
            .then((db: Db) => {
                const provider: IProvider = new DataProvider(db);
                return provider;
            });
    };
}
