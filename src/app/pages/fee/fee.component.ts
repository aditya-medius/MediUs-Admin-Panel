import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { FeeService } from "src/app/services/fee.service";

@Component({
  selector: "app-fee",
  templateUrl: "./fee.component.html",
  styleUrls: ["./fee.component.scss"],
})
export class FeeComponent implements OnInit {
  constructor(
    private feeService: FeeService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  fieldData = {
    title: "Fee",
    cd: this.feeService.addFee,
  };

  form = this.fb.group({
    name: ["", Validators.required],
    feeAmount: ["", Validators.required],
  });

  onSubmit = () => {
    console.log("sdsddshbdsbdsdsds", this.form.invalid);
    if (this.form.invalid) {
      this.toastr.error("Enter proper values");
      return;
    }
    let { name, feeAmount } = this.form.value;
    this.feeService.addFee({ name, feeAmount }).subscribe(
      (result: any) => {
        if (result) {
          this.toastr.success(result?.message);
        }
      },
      (error: any) => this.toastr.error(error.message)
    );
  };

  ngOnInit(): void {
    this.feeService.getAllFee().subscribe((result: any) => {
      console.log("kjsdkjsdndsds", result);
      this.feeList = result.data.map((e: any) => ({
        name: e.name,
        feeAmount: e.feeAmount,
      }));
    });
  }

  feeList: Array<any> = [];
}
