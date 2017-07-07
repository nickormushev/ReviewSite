import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, RequestMethod, Headers, Request } from "@angular/http";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { User } from "../_Model/user.model";

import { ServerIp } from "../Config/Ip.config";

@Injectable()
export class AuthGuardService implements CanActivate {
    public apiLink: string;
    constructor(private http: Http, private router: Router) {
        this.apiLink = "";
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem("currentUser")) {
            return true;
        }
        this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    }
}
