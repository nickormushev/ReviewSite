import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAdminReviewsComponent } from './profile-admin-reviews.component';

describe('ProfileAdminReviewsComponent', () => {
  let component: ProfileAdminReviewsComponent;
  let fixture: ComponentFixture<ProfileAdminReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAdminReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAdminReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
