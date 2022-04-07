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
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor( 
      private tableService: TableService,
      private toastr: ToastrService,
      private router: Router
  ) { }
  
  doctorData: listData | null = null;

  ngOnInit(): void {
    Promise.all([
      this.tableService.getAllDoctorsList().toPromise(),
    ]).then((result: any) => {
      this.getAllDoctorList(result[0]);
    });
    // this.getAllDoctorsList();
  }

  getAllDoctorList = (data: any) => {
    this.doctorData = {
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



    
  }

