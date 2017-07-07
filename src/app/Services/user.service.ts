import { EventEmitter, Injectable, Output } from "@angular/core";
import { Http, Response } from "@angular/http";

import { ServerIp } from "../Config/Ip.config";
import { User } from "../_Model/user.model";
import { JWTService } from "./jwt.service";

import "rxjs/add/operator/map";


@Injectable()
export class UserService {
    apiUrl = ServerIp;
    @Output() getChangeName: EventEmitter<any> = new EventEmitter();

    constructor(private http: Http, private JWT: JWTService) { }

    getAll() {
        return this.http.get(this.apiUrl + "/api/users", this.JWT.jwt()).map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get(this.apiUrl + "/api/users/" + _id, this.JWT.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.apiUrl + "/api/users/register", user);
    }

    update(user: User) {

        return this.http.put(this.apiUrl + "/api/users/" + user._id, user, this.JWT.jwt()).map((response: Response) => {

            localStorage.setItem("currentUser", JSON.stringify(response.json()));
            this.getChangeName.emit(user.Username);
            return user;
        });
    }
    updatePass(_id: string, Password) {

        return this.http.put(this.apiUrl + "/api/users/" + _id, Password, this.JWT.jwt()).map((response: Response) => {
            return response.json();
        });
    }
    checkCode(Code) {
        return this.http.post(this.apiUrl + "/api/code", Code, this.JWT.jwt()).map((response: Response) => {
            return response.json();
        });
    }
    mail(EMail) {
        return this.http.post(this.apiUrl + "/api/mail", { EMail: EMail }, this.JWT.jwt());
    }

    delete(_id: string) {
        return this.http.delete(this.apiUrl + "/api/delete/users/" + _id, this.JWT.jwt());
    }

}
