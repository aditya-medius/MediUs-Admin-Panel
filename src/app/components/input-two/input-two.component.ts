import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-input-two",
  templateUrl: "./input-two.component.html",
  styleUrls: ["./input-two.component.scss"],
})
export class InputTwoComponent implements OnInit {
  constructor(protected fb?: FormBuilder, protected toastr?: ToastrService) {}

  @Input("sff-options") sff_Options: any | null = null;

  form = this.fb.group({
    name: ["", Validators.required],
  });
  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges) {
    if (change.sff_Options.currentValue) {
      let options = change.sff_Options.currentValue;
      this.submit = () => {
        if (this.form.invalid) {
          this.toastr.error("Enter proper values");
          return;
        }
        let { name } = this.form.value;
        options["cb"](this.toTitleCase(name)).subscribe(
          this.handleSuccessResponse,
          (error: any) => this.toastr.error(error.message)
        );
      };
      console.log("DSsddssd:", options);
      this.title = options["title"];
    }
  }

  handleSuccessResponse = (result: any) => {
    if (result.status == 200) {
      this.toastr.success(result.message);
      this.form.reset();
    } else if (result.status == 400) {
      this.toastr.error(result.message);
    }
  };

  title: string = "";
  submit = () => {};

  toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
