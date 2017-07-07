import { RequestOptions, Headers } from "@angular/http";


import { Injectable } from "@angular/core";

@Injectable()
export class JWTService {

    constructor() { }
    public jwt() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser && currentUser.token) {
            const headers = new Headers({ "Authorization": "Bearer " + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
