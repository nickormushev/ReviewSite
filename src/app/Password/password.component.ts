import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Router } from "@angular/router";

import { User } from "../_Model/user.model";
import { UserService } from "../Services/user.service";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-password",
  templateUrl: "./password.component.html",
  styleUrls: ["./password.component.css"]
})
export class PasswordComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public passwordsEqual = true;
  public user: User;

  constructor(private userService: UserService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (f.value.Password !== f.value.RepeatPassword) {
      this.passwordsEqual = false;
      setTimeout(() => { this.passwordsEqual = true; }, 4000);
      return;
    }
    this.user.Password = f.value.Password;
    this.userService.update(this.user)
    .takeUntil(this.ngUnsubscribe)
    .subscribe((result) => {
      localStorage.removeItem("CurrentUser");
      this.router.navigate(["/login"]);
    });
  }
   ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
