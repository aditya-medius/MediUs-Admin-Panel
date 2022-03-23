import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-single-field-form",
  templateUrl: "./single-field-form.component.html",
  styleUrls: ["./single-field-form.component.scss"],
})
export class SingleFieldFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  @Input("sff-options") sff_Options: any | null = null;

  form = this.fb.group({
    name: ["", Validators.required],
  });
  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges) {
    if (change.sff_Options.currentValue) {
      let options = change.sff_Options.currentValue;
      this.submit = () => {
        let { name } = this.form.value;
        options["cb"](this.toTitleCase(name)).subscribe(
          (result: any) => {
            if (result.status == 200) {
              this.toastr.success(result.message);
              this.form.reset();
            } else if (result.status == 400) {
              this.toastr.error(result.message);
            }
          },
          (error: any) => this.toastr.error(error.message)
        );
      };
      this.title = options["title"];
    }
  }

  title: string = "";
  submit = () => {};

  toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
