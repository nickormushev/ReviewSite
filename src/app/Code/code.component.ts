import { User } from "../_Model/user.model";
import { UserService } from "../Services/user.service";
import { Router } from "@angular/router";

import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-code",
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.css"]
})
export class CodeComponent implements OnInit, OnDestroy {

  @ViewChild("f") f: NgForm;
  @ViewChild("fMail") fMail: NgForm;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public user: User;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(fMail: NgForm) {
    this.userService.mail(fMail.value.EMail).subscribe();
  }
  SubmitCode(f: NgForm) {
    this.userService.checkCode(f.value).takeUntil(this.ngUnsubscribe)
      .subscribe(result => {
        this.user = result as User;
        this.user.ChangePassword = true;
        localStorage.setItem("currentUser", JSON.stringify(this.user));
        this.router.navigate(["/password"]);
      });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
