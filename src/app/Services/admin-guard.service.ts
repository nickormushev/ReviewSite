import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, RequestMethod, Headers, Request } from "@angular/http";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import * as jwtDecode from "jwt-decode";

import { User } from "../_Model/user.model";
import { Observable, Observer } from "rxjs/Rx";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { ServerIp } from "../Config/Ip.config";
import { Token } from "app/_Model/token.model";

@Injectable()
export class AdminGuardService implements CanActivate {
    public user: User;
    public token: Token;
    constructor(private http: Http, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        if (this.user) {
            this.token = jwtDecode(this.user.token) as Token;
            if (this.token.admin) {
                return true;
            }
        }
        this.router.navigate(["/home"]);
    }
}


