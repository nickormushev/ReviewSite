import { Component, HostListener, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from "../Services/user.service";
import { AuthenticationService } from "../Services/auth.service";

import { User } from "../_Model/user.model";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
    moduleId: module.id,
    selector: "app-nav",
    templateUrl: "./nav.component.html",
    styleUrls: [
        "./nav.component.css",
    ]
})
export class NavComponent implements OnInit, OnDestroy {

    @ViewChild("f") f: NgForm;

    public FrameDisplay: string;
    public CurrentClass: string;
    public LogedIn: boolean;
    public Username: string;
    public returnUrl: string;
    public DropDownUl = "DropDownUlDisabled";
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(private auth: AuthenticationService,
        private router: Router, private userService: UserService) {

        auth.getLoggedInName
            .takeUntil(this.ngUnsubscribe)
            .subscribe(name => this.onLogin(name));
        userService.getChangeName
            .takeUntil(this.ngUnsubscribe)
            .subscribe(name => this.onLogin(name));
        this.FrameDisplay = "none";
        this.CurrentClass = "fa fa-search fa-2x";
        this.returnUrl = "/";
    }

    ngOnInit() {
        const currentUser: User = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            this.LogedIn = true;
            this.Username = currentUser.Username;
        }
    }

    onLogin(name) {
        if (name) {
            this.Username = name;
            this.LogedIn = true;
        } else {
            this.LogedIn = false;
        }
    }

    onResize(event) {
       if (event.target.innerWidth > 1344) {
           this.DropDownUl = "DropDownUlDisabled";
       }
    }
    onSearch(f) {
        this.router.navigate(["search"], { queryParams: { id: f.value.Search, page: 1 } });
    }
    ShowSearch() {
        if (this.FrameDisplay === "none") {
            this.FrameDisplay = ""; this.CurrentClass = "fa fa-times fa-2x";
        } else { this.FrameDisplay = "none"; this.CurrentClass = "fa fa-search fa-2x"; }
    }
    DropDown() {
        if (this.DropDownUl === "DropDownUlDisabled") {
            this.DropDownUl = "DropDownUlEnabled";
        } else {
            this.DropDownUl = "DropDownUlDisabled";
        }
    }
    onLogout() {
        this.DropDownUl = "DropDownUlDisabled";
        this.auth.Logout();
        this.router.navigate([this.returnUrl]);
    }
    NavClick() {
        this.DropDownUl = "DropDownUlDisabled";
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}

