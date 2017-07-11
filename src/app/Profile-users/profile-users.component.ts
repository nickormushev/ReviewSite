import { Component, OnInit } from "@angular/core";

import { User } from "../_Model/user.model";
import { UserService } from "../Services/user.service";

@Component({
  selector: "app-profile-users",
  templateUrl: "./profile-users.component.html",
  styleUrls: ["./profile-users.component.css"]
})
export class ProfileUsersComponent implements OnInit {

  public users: User[];
  public ExClass = "fa fa-times fa-2x";
  public UserIconClass: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.MyInit();
    this.InitialWidth();
  }
  Delete(id: string) {
    this.userService.delete(id).subscribe((result) => {
      this.MyInit();
      return;
    });
  }
  MyInit() {
    this.userService.getAll().subscribe((result) => {
      this.users = result;
    });
  }
  onResize(event) {
       if (event.target.innerWidth < 600 ) {
           this.ExClass = "fa fa-times fa-lg";
           this.UserIconClass = "fa fa-user fa-3x";
       } else {
         this.ExClass = "fa fa-times fa-2x";
        this.UserIconClass = "fa fa-user fa-5x";
       }
    }
    InitialWidth() {
      if (document.documentElement.clientWidth < 600 ) {
        this.ExClass = "fa fa-times fa-lg";
        this.UserIconClass = "fa fa-user fa-3x";
      } else {
        this.ExClass = "fa fa-times fa-2x";
        this.UserIconClass = "fa fa-user fa-5x";
      }
    }
}
// fa fa-user fa-5x
// fa fa-times fa-2x
