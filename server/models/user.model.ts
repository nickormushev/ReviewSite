import { BaseModel } from "./base.model";

export class User extends BaseModel {
    static FromModel(obj: any): User {
        const id = obj.id || obj._id;
        const Username = obj.Username;
        const EMail = obj.EMail;
        const Birthdate = obj.Birthdate;
        const Gender = obj.Gender;
        const Hash = obj.hash;
        const Code = obj.code;
        const Admin = obj.Admin;
        return new User(id, Username, EMail, Birthdate, Gender, Admin, Hash, Code);
    }

    static ToModel(obj: User): any {
        return {
            Username: obj.Username,
            EMail: obj.EMail,
            Birthdate: obj.Birthdate,
            Gender: obj.Gender,
            hash: obj.hash,
            code: obj.code,
            Admin: obj.Admin,
        };
    }
    constructor(public id: string,
        public Username: string,
        public EMail: string,
        public Birthdate: Date,
        public Gender: string,
        public Admin: boolean,
        public hash?: string,
        public code?: string,
        public Password?: string,
        public ConfirmPassword?: string,
    ) { super(); }


};
