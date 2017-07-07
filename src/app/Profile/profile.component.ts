import { User } from "../_Model/user.model";
import { AuthenticationService } from "../Services/auth.service";
import { UserService } from "../Services/user.service";
import { NgForm } from "@angular/forms";

import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit, OnDestroy {

  @ViewChild("f") f: NgForm;

  public Genders: string[] = ["Male", "Female", "Other"];
  public HiddenFlag = false;
  public UpdateFlag = true;
  public user: User;
  public id: string;
  public UsernameExists = true;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private router: Router, private auth: AuthenticationService, private userService: UserService) {
      this.user = JSON.parse(localStorage.getItem("currentUser"));
      console.log(this.user);
  }

  Close() {
    this.HiddenFlag = false;
  }

  ChangePassword() {
    this.userService.mail(this.user.EMail)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(result => { }, err => console.log(err));
  }

  Change(id: string) {
    this.HiddenFlag = true;
    this.id = id;
  }

  Delete() {
    this.userService.delete(this.user._id).subscribe(result => {
      this.auth.Logout();
      this.router.navigate(["/"]);
    });
  }

  onSubmit(f: NgForm) {
    if (!f.valid) { return; }
    const updatedUser: User = JSON.parse(localStorage.getItem("currentUser"));
    if (this.id === "Username") {
      updatedUser.Username = f.value.Username;
    } else if (this.id === "EMail") {
      updatedUser.EMail = f.value.EMail;
    } else if (this.id === "Birthdate") {
      const date = new Date(f.value.Year, (+f.value.Month - 1), f.value.Day);
      updatedUser.Birthdate = date;
    } else {
      updatedUser.Gender = f.value.Gender;
    }

    return this.userService.update(updatedUser)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(result => {
        this.UpdateFlag = false;
        setTimeout(this.UpdateFlag = true, 4000);
        this.user = JSON.parse(localStorage.getItem("currentUser"));
        this.Close();
        return result;
      }, error => {
        const body = error._body;
        this.Close();
        if (body === "There is an account with this username") {
          this.UsernameExists = false;
          setTimeout(() => { this.UsernameExists = true; }, 4000);
        }
      });
  }

   onPasswordChange(f: NgForm) {
    this.userService.checkCode(f.value)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(result => {
      const user: User = this.user;
      user.ChangePassword = true;
      localStorage.setItem("currentUser", JSON.stringify(user));

      this.router.navigate(["/password"]);
    });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  ViewCheck(id: string) {
    if (id === this.id) {

      return true;
    } else { return false; }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
