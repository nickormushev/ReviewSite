import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from "../Services/user.service";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit, OnDestroy {

  @ViewChild("f") f: NgForm;

  public passwordsEqual = true;
  public UsernameExists = true;
  public EmailExists = true;
  public submitted = false;
  public Genders: string[] = ["Male", "Female", "Other"];
  public BorderClass = "";
  public leaveFlag = true;
  public YearsFlag = true;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  onSubmit(f: NgForm) {
    if (!f.valid) { return; }
    if (f.value.Password !== f.value.RepeatPassword) {
      this.passwordsEqual = false;
      setTimeout(() => { this.passwordsEqual = true; }, 4000);
      return;
    }
    if (f.value.Day || f.value.Year || f.value.Month) {
      if (f.value.Day < 1 || f.value.Day > 31 || f.value.Year < 1950 || f.value.Year > 2017 || f.value.Month < 1 || f.value.Month > 12) {
        this.YearsFlag = false;
        setTimeout(() => { this.YearsFlag = true; }, 4000);
        return;
      }
    }
    this.userService.create(f.value)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(data => {
      this.leaveFlag = false;
      this.submitted = true;
      setTimeout(() => { this.submitted = false; }, 4000);
      return;
    },
      error => {
        const body = error._body;

        if (body === "There is an account with this username") {
          this.submitted = false;
          this.UsernameExists = false;
          setTimeout(() => { this.UsernameExists = true; }, 4000);
        } else   if (body === "There is an account with this email") {
          this.submitted = false;
          this.EmailExists = false;
          setTimeout(() => { this.EmailExists = true; }, 4000);
        }

      });

  }

  hasChanges() {
    if (this.f.dirty && this.leaveFlag) { return true; }
    this.leaveFlag = true;
    return false;
  }
   ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
