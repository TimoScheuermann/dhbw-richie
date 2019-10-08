import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Globals } from "../globals";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  constructor(private globals: Globals, private router: Router) {
    if (this.globals.user["signed_in"]) {
      this.router.navigate(["/settings"]);
      return;
    }
  }
}