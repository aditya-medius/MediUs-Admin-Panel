import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { SingleFieldFormComponent } from "../single-field-form/single-field-form.component";

@Component({
  selector: "app-input-one-select-one",
  templateUrl: "./input-one-select-one.component.html",
  styleUrls: ["./input-one-select-one.component.scss"],
})
export class InputOneSelectOneComponent
  extends SingleFieldFormComponent
  implements OnInit
{
  constructor(protected fb: FormBuilder, protected toastr: ToastrService) {
    super(fb, toastr);
    this.form = this.fb.group({
      name: ["", Validators.required],
      select: ["", Validators.required],
    });
  }

  @Input("I1S1-options") I1S1_Options: any | null = null;

  // form = this.fb.group({
  //   name: ["", Validators.required],
  //   select: ["", Validators.required],
  // });

  ngOnInit(): void {}

  options: Array<string> | null = null;
  ngOnChanges(changes: SimpleChanges) {
    if (changes.I1S1_Options.currentValue) {
      let I1S1 = changes.I1S1_Options.currentValue;
      this.title = I1S1["title"];
      this.options = I1S1["options"];
      this.submit = () => {
        if (this.form.invalid) {
          this.toastr.error("Enter proper values");
          return;
        }
        let { name, select } = this.form.value;
        I1S1["cb"](this.toTitleCase(name), select).subscribe(
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
    }
  }
}
