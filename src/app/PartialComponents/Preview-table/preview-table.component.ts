import { Review } from "../../_Model/review.model";
import { User } from "../../_Model/user.model";
import { ReviewService } from "../../Services/review.service";

import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from "@angular/core";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-preview-table",
  templateUrl: "./preview-table.component.html",
  styleUrls: ["./preview-table.component.css"]
})
export class PreviewTableComponent implements OnInit, OnDestroy {
  @Input() review: Review;
  @Input() user: User;
  @Output() ReviewsChange: EventEmitter<any> = new EventEmitter();
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private reviewService: ReviewService) {
  }
  ngOnInit() {
  }
  Delete(id: string) {
    this.reviewService.delete(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(() => {
        this.ReviewsChange.emit();
      });
  }
  AddParagraph(reviewtext) {
    return reviewtext;
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
