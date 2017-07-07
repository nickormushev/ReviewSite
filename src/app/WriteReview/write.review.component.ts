import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { Review } from "../_Model/review.model";
import { User } from "../_Model/user.model";
import { ReviewService } from "../Services/review.service";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-write-review",
  templateUrl: "./write.review.component.html",
  styleUrls: ["./write.review.component.css"]
})
export class WriteReviewComponent implements OnInit, OnDestroy {

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
    this.review.review = "The Review";
    this.review.hook =
  "This is a short summary of the story that is intended to convince the reader to check your review out. It should be just one paragraph";
    this.review.author = "Write your name here please!";
    this.review.imgUrl = "../../../assets/images/ReviewImage.png";
    this.review.score = "10";
    this.review.headline = "This will be your title and the circle to the left is the score!";
    this.types = ["Game", "Movie", "Music", "Book"];

  }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    if (!f.valid) { return; }
    f.value.userId = this.user._id;
    this.reviewService.create(f.value)
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
