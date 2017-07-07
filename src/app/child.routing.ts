import { NgModule } from "@angular/core";

import { Routes, RouterModule, CanDeactivate, CanActivate } from "@angular/router";

import { ReviewsComponent } from "./Reviews/reviews.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./Login/login.component";
import { ProfileReviewsComponent } from "./profile-reviews/Profile-reviews.component";
import { ProfileStressComponent } from "./profile-stress/Profile-stress.component";
import { ProfileUsersComponent } from "./Profile-users/profile-users.component";
import { ProfileComponent } from "./Profile/profile.component";
import { RegisterComponent } from "./Register/register.component";
import { ReviewComponent } from "./Review/review.component";
import { UpdateReviewComponent } from "./Update-review/update-review.component";
import { WriteReviewComponent } from "./WriteReview/write.review.component";
import { SearchComponent } from "./Search/search.component";
import { ProfileAdminReviewsComponent } from "./Profile-admin-reviews/profile-admin-reviews.component";

import { AuthGuardService } from "./Services/authGuard.service";
import { AdminGuardService } from "./Services/admin-guard.service";

const ChildRoutes: Routes = [
    {
        path: "home",
        children: [
            {
                path: "",
                component: ReviewsComponent,
            },
            {
                path: ":id",
                component: ReviewsComponent,
            }
        ]
    },
    {
        path: "games", children: [
            {
                path: "",
                component: ReviewsComponent,
            },
            {
                path: ":id",
                component: ReviewsComponent,
            }
        ]
    },
    {
        path: "movies", children: [
            {
                path: "",
                component: ReviewsComponent,
            }, {
                path: ":id",
                component: ReviewsComponent,
                pathMatch: "full"
            }
        ]
    },
    {
        path: "music", children: [
            {
                path: "",
                component: ReviewsComponent,
            }, {
                path: ":id",
                component: ReviewsComponent,
                pathMatch: "full"
            }
        ]
    },
    {
        path: "books", children: [
            {
                path: "",
                component: ReviewsComponent,
            }, {
                path: ":id",
                component: ReviewsComponent,
                pathMatch: "full"
            }
        ]
    },
    {
        path: "profile", children: [
            {
                path: "",
                component: ProfileComponent,
                canActivate: [AuthGuardService],
            }, {
                path: "info",
                component: ProfileComponent,
                canActivate: [AuthGuardService],
            }, {
                path: "reviews",
                component: ProfileReviewsComponent,
                canActivate: [AuthGuardService],
            }, {
                path: "stress",
                component: ProfileStressComponent,
                canActivate: [AuthGuardService],
            }, {
                path: "users",
                component: ProfileUsersComponent,
                canActivate: [AdminGuardService],
            }, {
                path: "adminReviews",
                component: ProfileAdminReviewsComponent,
                canActivate: [AdminGuardService],
            }
        ]
    }, {
        path: "write", children: [
            {
                path: "",
                component: WriteReviewComponent,
                canActivate: [AuthGuardService]
            },
            {
                path: ":id",
                component: UpdateReviewComponent,
                canActivate: [AuthGuardService]
            }
        ]
    }, {
        path: "search",
        children: [
            {
                path: "",
                component: SearchComponent,
            },
            {
                path: ":id",
                component: SearchComponent,
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(ChildRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ChildRoutesModule { }
