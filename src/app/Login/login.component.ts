import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { AuthenticationService } from "../Services/auth.service";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild("f") f: NgForm;
  public value: any;
  public loading = false;
  public returnUrl: string;
  public WrongLoginInfo = true;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.authenticationService.Logout();
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  onSubmit(f: NgForm) {
    this.loading = true;
    this.authenticationService.Login(f.value)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(data => { this.router.navigate([this.returnUrl]); },
      error => {
        const body = error._body;
        if (body === "Username or password is incorrect") {
          this.WrongLoginInfo = false;
          setTimeout(() => { this.WrongLoginInfo = true; }, 4000);
          return;
        }
        console.log(error);
      });
  }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
