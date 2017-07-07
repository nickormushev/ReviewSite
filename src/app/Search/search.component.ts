import { Component, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ReviewService } from "../Services/review.service";
import { DogService } from "../Services/dog.service";
import { SearchService } from "../Services/search.service";

import { Review } from "../_Model/review.model";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit, OnDestroy {

  public Header: string;
  public articles: Review[];
  public pages: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  public currentPage = "1";
  public sessionId;
  public id: string = null;
  public NothingFlag = false;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private searchService: SearchService, private reviewService: ReviewService,
    private router: Router, route: ActivatedRoute, private element: ElementRef) {
    route.queryParams.subscribe((params: Params) => {
      this.myInit(params.id, params.page);
    });
  }

  ngOnInit() {
  }

  myInit(id, page?) {
    this.id = id;
    this.searchService.getElementsByID(id + "/" + page).subscribe((result) => {
      if (!result[0]) {
        this.NothingFlag = true;
      } else {
        this.NothingFlag = false;
      };

      this.articles = result as Review[];
      this.element.nativeElement.scrollIntoView();
    }, err => {
      if (err._body === "Not Found") {
        this.router.navigate(["asds"]);
      }
    });
  }
  Routing(PageId: string) {
    this.router.navigate(["search"], { queryParams: { id: this.id, page: PageId } });
  }
  AddParagraph(reviewtext) {
    return reviewtext;
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
