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
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.MyInit();
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

}
