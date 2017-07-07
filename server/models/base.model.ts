export class BaseModel {
    _id: string;

    get id(): string{
        return this._id;
    }
    set id(id){
         this._id = id;
    }
}
