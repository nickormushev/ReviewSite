import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileUsersComponent } from "./profile-users.component";

describe("ProfileUsersComponent", () => {
  let component: ProfileUsersComponent;
  let fixture: ComponentFixture<ProfileUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
