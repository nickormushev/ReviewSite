import { Component, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ReviewService } from "../Services/review.service";
import { DogService } from "../Services/dog.service";
import { SearchService } from "../Services/search.service";

import { Review } from "../_Model/review.model";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.css"]
})
export class ReviewsComponent implements OnInit, OnDestroy {

  public Header: string;
  public articles: Review[];
  public pages: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  public currentPage = "1";
  public sessionId;
  public id: string = null;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private searchService: SearchService, private reviewService: ReviewService,
    private router: Router, route: ActivatedRoute, private element: ElementRef) {
    route.params.forEach(params => {
      this.myInit(params.id);
    });
  }

  ngOnInit() {
    if (+this.router.url.substring(this.router.url.lastIndexOf("/") + 1)) {
      this.currentPage = this.router.url.substring(this.router.url.lastIndexOf("/") + 1);
    }
  }

  myInit(id) {
      this.reviewService.getById(this.router.url)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(result => {
          this.element.nativeElement.scrollIntoView();
          this.articles = result as Review[];
        });
  }
  Routing(PageId: string) {

    let url = this.router.url;
    const substring = this.router.url.substring(0, this.router.url.lastIndexOf("/"));
    this.currentPage = PageId;

    if (substring) {
      url = substring;
    }
      this.router.navigate([url, PageId])
        .catch(error => console.log(error));
  }
  AddParagraph(reviewtext) {
    return reviewtext;
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
// [routerLink]="['./Books', 1]" This is a link to a page with an id
// [routerLink]="['Books']" [queryParams]="{ id: 1 }"
