import { Component, OnInit } from "@angular/core";
@Component({
  moduleId: module.id,
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],

})
export class FooterComponent implements OnInit {

  public FooterText = "FooterText";
  constructor() { }

  ngOnInit() {
  }
  toggleState() {
    if (this.FooterText === "FooterText") {
      this.FooterText = "";
    } else { this.FooterText = "FooterText"; };
    setTimeout( () => window.scrollBy(0, 100), 100);
  }
}
