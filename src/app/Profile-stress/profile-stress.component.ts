import { DogService } from "../Services/dog.service";
import { Dog } from "../_Model/dog.model";

import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "app-profile-stress",
  templateUrl: "./profile-stress.component.html",
  styleUrls: ["./profile-stress.component.css"]
})
export class ProfileStressComponent implements OnInit, OnDestroy {

  @ViewChild("f") f: NgForm;

  public currentDog = 0;
  public interval;
  public flag = true;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public image: string;
  public images: string[] = ["https://images4.alphacoders.com/227/thumb-1920-22714.jpg"];
  constructor(private dogService: DogService) {
    this.image = this.images[this.currentDog];
  }

  ngOnInit() {
    this.GetAll();
    this.Interval();
  }

  Click(id: string) {
    if (id === "Left") {
      this.currentDog--;
    } else { this.currentDog++; }
    if (this.currentDog === -1) {
      this.currentDog = this.images.length - 1;
    } else if (this.currentDog > this.images.length - 1) {
      this.currentDog = 0;
    }
    clearInterval(this.interval);
    this.Interval();
    this.image = this.images[this.currentDog];
  }

  Interval() {
    this.interval = setInterval(() => {
      this.currentDog++;
      if (this.currentDog > this.images.length - 1) {
        this.currentDog = 0;
      }
      this.image = this.images[this.currentDog];
    }, 5000);
  }
  onSubmit(f: NgForm) {
    if (!f.valid) { return; }
    this.dogService.create(f.value)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((result) => {
        this.GetAll();

      });
  }
  GetAll() {
    this.dogService.getAll()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((results) => {
        clearInterval(this.interval);
        this.Interval();
        let i = 0;
        for (const result of results) {
          if (result.imgUrl === this.images[i]) { i++; continue; }
          this.images.push(result.imgUrl);
          i++;
        }
        if (this.flag) {
          this.flag = false;
          this.currentDog = 0;
          this.image = this.images[0];
        } else {
          this.currentDog = this.images.length - 1;
          this.image = this.images[this.images.length - 1];
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
