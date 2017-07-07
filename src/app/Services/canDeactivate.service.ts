import { CanDeactivate } from "@angular/router";
import { RegisterComponent } from "../Register/register.component";
import { Injectable } from "@angular/core";

@Injectable()

export class ConfirmDeactivateGuard implements CanDeactivate<RegisterComponent> {

  canDeactivate(target: RegisterComponent) {
    if (target.hasChanges()) {
        return window.confirm("If you leave this page all information will be lost!");
    }
    return true;
  }
}
