import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { UtilService } from "src/app/shared/util.service";

@Component({
  selector: "app-qualification",
  templateUrl: "./qualification.component.html",
  styleUrls: ["./qualification.component.scss"],
})
export class QualificationComponent implements OnInit {
  form = this.fb.group({
    name: ["", Validators.required],
    abbreviation: ["", Validators.required],
  });

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService,
    private toastr: ToastrService,
    protected fb?: FormBuilder
  ) {
    this.header = this.utilService.getHeader();
  }

  apiUrl: string = this.utilService.apiUrl();
  ELEMENT_DATA: [{ name: string; abbreviation: string }] = [
    { name: "", abbreviation: "" },
  ];
  displayedColumns: string[] = ["name", "image"];
  dataSource = this.ELEMENT_DATA;

  sff_data: any | null = null;

  header: HttpHeaders;
  ngOnInit(): void {
    this.sff_data = {
      title: "Qualification",
      cb: this.addQualificationName,
    };

    this.getQualificationList();
  }

  addQualificationName = (name: string, abbreviation: string) => {
    return this.httpClient.post(
      `${this.apiUrl}/admin/addQualificationName`,
      { name, abbreviation },
      {
        headers: this.header,
      }
    );
  };

  getQualificationList = () => {
    this.httpClient
      .get(`${this.apiUrl}/admin/getQualificationList`, {
        headers: this.header,
      })
      .subscribe((result: any) => {
        this.ELEMENT_DATA = result.data.map((e: any) => {
          return {
            name: e.name,
            abbreviation: e.abbreviation,
          };
        });
        this.dataSource = this.ELEMENT_DATA;
      });
  };

  submit = () => {
    if (this.form.invalid) {
      this.toastr.error("Enter proper values");
      return;
    }
    let { name, abbreviation } = this.form.value;
    this.addQualificationName(name, abbreviation).subscribe(
      (result: any) => {
        if (result.status == 200) {
          this.toastr.success(result.message);
          this.form.reset();
          this.getQualificationList();
        } else if (result.status == 400) {
          this.toastr.error(result.message);
        }
      },
      (error: any) => this.toastr.error(error.message)
    );
  };
}
