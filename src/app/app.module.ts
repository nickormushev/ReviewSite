import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CanDeactivate, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./Navigation/nav.component";
import { ReviewsComponent } from "./Reviews/reviews.component";
import { NotFoundComponent } from "./not-found/not-found.component";

import { AuthenticationService } from "./Services/auth.service";
import { UserService } from "./Services/user.service";
import { SearchService } from "./Services/search.service";
import { ConfirmDeactivateGuard } from "./Services/canDeactivate.service";
import { AuthGuardService } from "./Services/authGuard.service";
import { JWTService } from "./Services/jwt.service";
import { ReviewService } from "./Services/review.service";
import { PassGuardService } from "./Services/PassGuard.service";
import { DogService } from "./Services/dog.service";
import { AdminGuardService } from "./Services/admin-guard.service";

import { appRoute } from "./app.routing";
import { LoginComponent } from "./Login/login.component";
import { RegisterComponent } from "./Register/register.component";
import { WriteReviewComponent } from "./WriteReview/write.review.component";
import { ProfileComponent } from "./Profile/profile.component";
import { ChildRoutesModule } from "./child.routing";
import { ReviewComponent } from "./Review/review.component";
import { PreviewTableComponent } from "./PartialComponents/preview-table/preview-table.component";
import { PasswordComponent } from "./Password/password.component";
import { ProfileNavComponent } from "./PartialComponents/Profile-nav/profile-nav.component";
import { ProfileReviewsComponent } from "./profile-reviews/Profile-reviews.component";
import { ProfileStressComponent } from "./profile-stress/Profile-stress.component";
import { UpdateReviewComponent } from "./Update-review/update-review.component";
import { ProfileUsersComponent } from "./Profile-users/profile-users.component";
import { CodeComponent } from "./Code/code.component";
import { SearchComponent } from "./Search/search.component";
import { ProfileAdminReviewsComponent } from "./Profile-admin-reviews/profile-admin-reviews.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ReviewsComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    WriteReviewComponent,
    ProfileComponent,
    ReviewComponent,
    PreviewTableComponent,
    PasswordComponent,
    ProfileNavComponent,
    ProfileReviewsComponent,
    ProfileStressComponent,
    UpdateReviewComponent,
    ProfileUsersComponent,
    CodeComponent,
    SearchComponent,
    ProfileAdminReviewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute),
    ChildRoutesModule,
  ],
  providers: [
    AuthenticationService,
    UserService,
    SearchService,
    ConfirmDeactivateGuard,
    AuthGuardService,
    JWTService,
    ReviewService,
    PassGuardService,
    DogService,
    AdminGuardService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
