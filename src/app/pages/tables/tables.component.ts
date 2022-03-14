import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { ToastrService } from "ngx-toastr";
import { TableService } from "src/app/services/table.service";

export interface listData {
  header: string;
  list: Array<any>;
}

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.scss"],
})
export class TablesComponent implements OnInit {
  constructor(
    private tableService: TableService,
    private toastr: ToastrService
  ) {}

  doctorData: listData | null = null;
  hospitalData: listData | null = null;
  doctorList: Array<any> | null = null;
  ngOnInit() {
    Promise.all([
      this.tableService.getAllDoctorsList().toPromise(),
      this.tableService.getAllHospitalList().toPromise(),
    ]).then((result: any) => {
      this.getAllDoctorList(result[0]);
      this.getAllHospitalList(result[1]);
    });
    // this.getAllDoctorsList();
  }

  getAllDoctorList = (data: any) => {
    this.doctorData = {
      header: data.header,
      list: data.data.data,
    };
  };

  getAllHospitalList = (data: any) => {
    this.hospitalData = {
      header: data.header,
      list: data.data.data,
    };
  };

  toggleDoctorVerify = (event: MatSlideToggleChange, id: string) => {
    this.tableService.verifyDoctors(id).subscribe(
      (result: any) => {
        if (result.status == 200) {
          this.toastr.success(result.message);
          this.doctorData.list.forEach((e: any) => {
            if (e.id == id) {
              e["verified"] = true;
            }
          });
        } else if (result.status == 400) {
          this.toastr.error(result.message);
        }
      },
      (error: HttpErrorResponse) => this.toastr.error(error.message)
    );
  };

  toggleHospitalVerify = (event: MatSlideToggleChange, id: string) => {
    this.tableService.verifyHospital(id).subscribe(
      (result: any) => {
        if (result.status == 200) {
          this.toastr.success(result.message);
          this.hospitalData.list.forEach((e: any) => {
            if (e._id == id) {
              e["verified"] = true;
            }
          });
        } else if (result.status == 400) {
          this.toastr.error(result.message);
        }
      },
      (error: HttpErrorResponse) => this.toastr.error(error.message)
    );
  };
}
