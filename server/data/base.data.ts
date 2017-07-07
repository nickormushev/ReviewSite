export interface IData<T>{
    add(obj: T): Promise<T>;
    GetAll(): Promise<T[]>;
    GetById(id: string): Promise<T>;
    DeleteAll(): void;
    Search(id: string, PageNumber: number): Promise<T[]>;
    DeleteById(id): Promise<T>;
    findOne(query?: any): Promise<T>;
    find(query?: any, PageNumber?: number): Promise<T[]>;
    Update(obj: T, id: string): Promise<T>;
}
