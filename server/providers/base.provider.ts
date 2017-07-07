import { IData } from "../data/base.data";
export interface IProvider {
    provide(type: string, ModelFuncsType): IData<T>;
}
