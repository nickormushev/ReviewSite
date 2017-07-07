import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { Review } from "../_Model/review.model";
import { User } from "../_Model/user.model";
import { ReviewService } from "../Services/review.service";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-update-review",
  templateUrl: "./update-review.component.html",
  styleUrls: ["./update-review.component.css"]
})
export class UpdateReviewComponent implements OnInit, OnDestroy {
  @ViewChild("f") f: NgForm;
  public review: Review = new Review();
  public PublishFlag = true;
  public ErrorFlag = true;
  public types: string[];
  public user: User;
  public defaultValue = "Game";
  private ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(private reviewService: ReviewService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.getById(this.router.url.substring(this.router.url.lastIndexOf("/") + 1));
    this.types = ["Game", "Movie", "Music", "Book"];
  }

  ngOnInit() {
  }
  getById(id: string) {
    this.reviewService.getById("/review/" + id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response) => {
        this.review.review = response.review;
        this.review.hook = response.hook;
        this.review.author = response.author;
        this.review.imgUrl = response.imgUrl;
        this.review.score = response.score;
        this.review.headline = response.headline;
        this.review._id = response._id;
        return;
      }, error => {
        const body = error._body;
        this.ErrorFlag = false;
        setTimeout(() => { this.ErrorFlag = true; }, 4000);
      });
  }
  onSubmit(f: NgForm) {
    if (!f.valid) { return; }
    f.value.userId = this.user._id;
    f.value.id = this.review._id;
    this.reviewService.update(f.value)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((response) => {
        this.PublishFlag = false;
        setTimeout(() => { this.PublishFlag = true; }, 4000);
      }, error => {
        const body = error._body;
        this.ErrorFlag = false;
        setTimeout(() => { this.ErrorFlag = true; }, 4000);
      });
  }
  ScoreChecker(score) {
    if (score > 100) {
      this.review.score = "100";
    } else if (score < 0) { this.review.score = "0"; };
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
