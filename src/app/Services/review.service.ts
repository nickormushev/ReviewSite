import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ServerIp } from "../Config/Ip.config";
import { JWTService } from "./jwt.service";
import { Review } from "../_Model/review.model";

@Injectable()
export class ReviewService {

  apiUrl: String;
  constructor(private http: Http, private JWT: JWTService) {
    this.apiUrl = ServerIp;
  }

    getAll() {
        return this.http.get(this.apiUrl + "/api/review", this.JWT.jwt()).map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get(this.apiUrl + "/api" +  _id, this.JWT.jwt()).map((response: Response) => response.json());
    }

    create(review: Review) {
        return this.http.post(this.apiUrl + "/api/review/add", review, this.JWT.jwt());
    }

    update(review: Review) {
        return this.http.put(this.apiUrl + "/api/review/" + review._id, review,  this.JWT.jwt());
    }

    delete(_id: string) {
        return this.http.delete(this.apiUrl + "/api/delete/review/" + _id, this.JWT.jwt());
    }
}
