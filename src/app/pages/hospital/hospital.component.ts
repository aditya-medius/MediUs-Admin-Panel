import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { TableService } from "src/app/services/table.service";

export interface listData {
  header: string;
  list: Array<any>;
}

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {

  constructor(
    private tableService: TableService,
    private toastr: ToastrService,
    private router: Router
  ) { }
  
  hospitalData: listData | null = null;

  ngOnInit(): void {
    Promise.all([
      this.tableService.getAllHospitalList().toPromise(),
    ]).then((result: any) => {
      this.getAllHospitalList(result[1]);
    });
    // this.getAllDoctorsList();
  }

  getAllHospitalList = (data: any) => {
    this.hospitalData = {
      header: data.header,
      list: data.data.data,
    };
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


