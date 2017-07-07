import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ReviewService } from "../Services/review.service";

import { Review } from "../_Model/review.model";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"]
})
export class ReviewComponent implements OnInit, OnDestroy {

  public article: Review;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private reviewService: ReviewService, private router: Router) { }

  ngOnInit() {
    this.reviewService.getById(this.router.url)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(result => {
      this.article = result;
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
