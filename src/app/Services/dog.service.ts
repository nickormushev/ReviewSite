import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { ServerIp } from "../Config/Ip.config";
import { Dog } from "../_Model/dog.model";
import { JWTService } from "./jwt.service";

import "rxjs/add/operator/map";


@Injectable()
export class DogService {
    apiUrl = ServerIp;

    constructor(private http: Http, private JWT: JWTService) { }

    getAll() {
        return this.http.get(this.apiUrl + "/api/dogs", this.JWT.jwt()).map((response: Response) => {
            return response.json();
        });
    }

    create(dog: Dog) {
        return this.http.post(this.apiUrl + "/api/dogs/add", dog, this.JWT.jwt()).map((response) => response.json());
    }



}
