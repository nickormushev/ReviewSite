export interface ModelFuncs<T> {
        ToModel(obj: T): any;
        FromModel(model: any): T;
}
