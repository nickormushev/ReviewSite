import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable, Observer } from "rxjs/Rx";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { ServerIp } from "../Config/Ip.config";
import { JWTService } from "./jwt.service";

@Injectable()
export class SearchService {

  public apiUrl: string;
  constructor(private http: Http, private JWT: JWTService) {
    this.apiUrl = ServerIp;
  }
  getElementsByID(_id: string) {
    return this.http.get(this.apiUrl + "/api/search/" + _id, this.JWT.jwt()).map((response: Response) => {
      return response.json();
    });
  }
}
