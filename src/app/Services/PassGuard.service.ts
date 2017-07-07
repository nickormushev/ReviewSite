import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, RequestMethod, Headers, Request } from "@angular/http";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { User } from "../_Model/user.model";
import { Observable, Observer } from "rxjs/Rx";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { ServerIp } from "../Config/Ip.config";

@Injectable()
export class PassGuardService implements CanActivate {
    public apiLink: string;
    constructor(private http: Http, private router: Router) {
        this.apiLink = "";
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const User: User = JSON.parse(localStorage.getItem("currentUser"));
        if (User.ChangePassword === true) {
            User.ChangePassword = false;
            return true;
        }
        this.router.navigate(["/profile"], { queryParams: { returnUrl: state.url } });
    }
}
