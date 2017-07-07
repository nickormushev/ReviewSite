import { BaseModel } from "./base.model";
export class Dog extends BaseModel {


    static FromModel(obj: any): Dog {
        const id = obj.id || obj._id;
        const imgUrl = obj.imgUrl;
        return new Dog(id, imgUrl);
    }

    static ToModel(obj: Dog): any {
        return {
            id: obj.id,
            imgUrl: obj.imgUrl,
        };
    }

    constructor(public id: string,
                public imgUrl: string,
    ) { super(); }

}
