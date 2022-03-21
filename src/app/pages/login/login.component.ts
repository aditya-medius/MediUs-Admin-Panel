import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  phoneNumberValidation(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let parent = control.parent;
      this.loginForm.addControl(
        "OTP",
        new FormControl("", Validators.required)
      );
      return null;
    };
  }

  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private loginService: LoginService,
    private router: Router
  ) {
    localStorage.removeItem("admin");
  }

  loginForm = this.fb.group({
    phoneNumber: ["", [Validators.required, Validators.minLength(10)]],
    password: ["", Validators.required],
  });

  ngOnInit() {}
  ngOnDestroy() {}

  otpRequired: boolean = true;

  submitForm = () => {
    if (!this.loginForm.valid) {
      this.toastrService.error("Enter proper values");
      return;
    }
    let { phoneNumber, password } = this.loginForm.value;
    this.loginService.login(phoneNumber, password).subscribe(
      (result: any) => {
        if (result.status == 200) {
          this.toastrService.success(`${result.message}`);
          localStorage.setItem("admin", result);
          this.router.navigate(["/tables"]);
        } else if (result.status == 400) {
          if (result.type == "JsonWebTokenError") {
            this.toastrService.error("Invalid OTP");
          }
          this.toastrService.error(result.message);
        }
      },
      (error: HttpErrorResponse) => this.toastrService.error(error.message)
    );
  };
}
