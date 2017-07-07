import { Routes, CanDeactivate, CanActivate } from "@angular/router";

import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./Login/login.component";
import { RegisterComponent } from "./Register/register.component";
import { ReviewComponent } from "./Review/review.component";
import { PasswordComponent } from "./Password/password.component";
import { CodeComponent } from "./Code/code.component";

import { AuthGuardService } from "./Services/authGuard.service";
import { PassGuardService } from "./Services/PassGuard.service";

import { ConfirmDeactivateGuard } from "./Services/canDeactivate.service";

export const appRoute: Routes = [
  { path: "review/:id", component: ReviewComponent, pathMatch: "full" },
  { path: "password", component: PasswordComponent, canActivate: [PassGuardService], pathMatch: "full" },
  { path: "code", component: CodeComponent, pathMatch: "full" },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "register", component: RegisterComponent, canDeactivate: [ConfirmDeactivateGuard], pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];
