import { Component, HostListener } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CanComponentDeactivate } from "src/app/services/can-deactivate-guard";

@Component({
  selector: "app-compose",
  templateUrl: "./compose.component.html"
})
export class ComposeComponent implements CanComponentDeactivate {
  constructor(private router: Router) {}

  composeForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required])
  });
  
  @HostListener("window:beforeunload")
  canDeactivate() {
    if (this.composeForm.dirty) {
      return confirm('You have unsaved changes. Discard and leave?');
    }

    return true;
  }
  submitted = false;
  isWorking = false;

  

  // helper method for easy access to form controls
  get f() {
    return this.composeForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.composeForm.invalid) {
      return;
    }

    this.isWorking = true;
    this.composeForm.disable();

    setTimeout(() => {
      this.composeForm.reset();
      this.composeForm.enable();
      this.submitted = false;
      this.isWorking = false;
      this.router.navigate(["/"]);
    }, 1000);
  }
}