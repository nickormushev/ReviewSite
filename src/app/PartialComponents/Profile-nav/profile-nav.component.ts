import { User } from "../../_Model/user.model";
import { Token } from "../../_Model/token.model";
import { Component, Input, OnInit } from "@angular/core";
import * as jwtDecode from "jwt-decode";

@Component({
  selector: "app-profile-nav",
  templateUrl: "./profile-nav.component.html",
  styleUrls: ["./profile-nav.component.css"]
})
export class ProfileNavComponent implements OnInit {
  @Input() UsernameExists: boolean;
  public user: User = JSON.parse(localStorage.getItem("currentUser"));
  constructor() { }

  ngOnInit() {
  }
  Admin() {
    const token: Token = jwtDecode(this.user.token) as Token;
    if (token.admin) {
      return true;
    }
    return false;
  }

}
