import { Injectable, Output, EventEmitter } from "@angular/core";
import { Http, Response, RequestOptions, RequestMethod, Headers, Request } from "@angular/http";

import { Observable, Observer } from "rxjs/Rx";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { ServerIp } from "../Config/Ip.config";

@Injectable()
export class AuthenticationService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  public apiLink: string;
  constructor(private http: Http, ) {
    this.apiLink = "";
  }

  Login(Value): Observable<any> {
    this.apiLink = ServerIp + "/api/login";
    const headers = new Headers({ "Content-Type": "application/json" });

    const options = new RequestOptions({
      url: this.apiLink,
      headers: headers,
    });

    return this.http.post(this.apiLink, JSON.stringify(Value), options).map((response: Response) => {
      const user = response.json();
      if (user && user.token) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.getLoggedInName.emit(user.Username);
      } else {
        this.getLoggedInName.emit("");
      };
      return user;
    });
  }

  Logout(): void {
    this.getLoggedInName.emit(false);
    localStorage.removeItem("currentUser");
  }
}
