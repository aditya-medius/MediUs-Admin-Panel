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
import { isNumber } from "@ng-bootstrap/ng-bootstrap/util/util";
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
  disableOTP: boolean = true;

  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private loginService: LoginService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    phoneNumber: [
      "",
      [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern("[- +()0-9]+"),
        // this.phoneNumberValidation,
      ],
    ],
    password: ["", Validators.required],
  });

  ngOnInit() {}
  ngOnDestroy() {}

  submitForm = () => {
    if (!this.loginForm.valid) {
      this.toastrService.error("Enter proper values");
      return;
    }
    let { phoneNumber, password } = this.loginForm.value;
    this.loginService.login(phoneNumber, password).subscribe(
      (result: any) => {
        // this.disableOTP = false;

        // this.loginForm.get("OTP").enable();

        if (result.status == 200) {
          this.toastrService.success(`${result.message}`);
          this.router.navigate(["/tables"]);
          // if (phoneNumber && OTP) {
          // }
          // this.setOptRequired();
        } else if (result.status == 401) {
          this.toastrService.error(result.message);
        }
      },
      (error: HttpErrorResponse) => this.toastrService.error(error.message)
    );
  };

  phoneNumberKeyPress = (event: any) => {
    // console.log("kdksdds:", event);
    console.log("dknsd", /[0-9]{11}/.test(event));
  };

  // setOptRequired = () => {
  //   this.otpRequired = true;
  //   this.loginForm.addControl("OTP", new FormControl("", Validators.required));
  // };
}
