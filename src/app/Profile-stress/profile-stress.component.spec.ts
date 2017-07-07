import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileStressComponent } from "./profile-stress.component";

describe("ProfileStressComponent", () => {
  let component: ProfileStressComponent;
  let fixture: ComponentFixture<ProfileStressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileStressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
