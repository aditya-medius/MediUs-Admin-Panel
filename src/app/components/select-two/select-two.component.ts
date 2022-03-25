import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { SingleFieldFormComponent } from "../single-field-form/single-field-form.component";

@Component({
  selector: "app-select-two",
  templateUrl: "./select-two.component.html",
  styleUrls: ["./select-two.component.scss"],
})
export class SelectTwoComponent
  extends SingleFieldFormComponent
  implements OnInit, OnChanges
{
  constructor(protected fb?: FormBuilder, protected toastr?: ToastrService) {
    super(fb, toastr);
    this.form = this.fb.group({
      select1: ["", Validators.required],
      select2: ["", Validators.required],
    });
  }

  @Input("S2-options") S2_options: any | null = null;
  ngOnInit(): void {}

  select1: Array<string> | null = null;
  select2: Array<string> | null = null;
  ngOnChanges(change: SimpleChanges) {
    console.log("SDsddssd", change);
    if (change.S2_options.currentValue) {
      console.log("jnchcc:", change.S2_options.currentValue);
      let options = change.S2_options.currentValue;
      this.title = options["title"];
      this.select1 = options["options"]["select1"];
      this.select2 = options["options"]["select2"];
      this.submit = () => {
        if (this.form.invalid) {
          this.toastr.error("Enter proper values");
          return;
        }
        let { select1, select2 } = this.form.value;
        options["cb"](select1, select2).subscribe(
          this.handleSuccessResponse,
          (error: any) => this.toastr.error(error.message)
        );
      };
    }
  }
}
