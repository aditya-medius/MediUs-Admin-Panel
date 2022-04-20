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
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  constructor(
    private tableService: TableService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  patientData: listData | null = null;

  ngOnInit(): void {
    Promise.all([this.tableService.getAllPatientList().toPromise()]).then(
      (result: any) => {
        this.getAllPatientList(result[0]);
      }
    );
    // this.getAllDoctorsList();
  }

  getAllPatientList = (data: any) => {
    this.patientData = {
      header: data.header,
      list: data.data.data,
    };
  };
}
