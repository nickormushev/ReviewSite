import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileReviewsComponent } from "./profile-reviews.component";

describe("ProfileReviewsComponent", () => {
  let component: ProfileReviewsComponent;
  let fixture: ComponentFixture<ProfileReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
