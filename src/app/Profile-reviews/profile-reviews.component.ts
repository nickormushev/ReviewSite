import { Component, OnInit, OnDestroy } from "@angular/core";
import { Review } from "../_Model/review.model";
import { User } from "../_Model/user.model";
import { ReviewService } from "../Services/review.service";
import { Router } from "@angular/router";


import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-profile-reviews",
  templateUrl: "./profile-reviews.component.html",
  styleUrls: ["./profile-reviews.component.css"]
})
export class ProfileReviewsComponent implements OnInit, OnDestroy {
  public user: User;
  public page = "1";
  public articles: Review[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private reviewService: ReviewService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.MyInit();
  }
  More() {
    this.page = (+this.page + 1).toString();
    this.reviewService.getById(this.router.url + "/" + this.user._id + "/" + this.page)
    .takeUntil(this.ngUnsubscribe)
    .subscribe((result) => {
      const articles: Review[] = result as Review[];
      this.articles.push.apply(this.articles, articles);
    });
  }
  MyInit() {
    this.reviewService.getById(this.router.url + "/" + this.user._id + "/1")
      .takeUntil(this.ngUnsubscribe)
      .subscribe((result) => {
        this.articles = result as Review[];
      });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
