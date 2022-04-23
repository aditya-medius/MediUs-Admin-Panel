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
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.scss"],
})
export class AppointmentComponent implements OnInit {
  constructor(
    private tableService: TableService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  appointmentData: listData | null = null;

  ngOnInit(): void {
    this.tableService.getAllAppointmentList().subscribe((result: any) => {
      console.log("dfdffd", result);
      this.getAllAppointmentList(result);
      console.log("DFFDFFD", this.appointmentData);
    });
  }

  getAllAppointmentList = (data: any) => {
    this.appointmentData = {
      header: data.data.header,
      list: data.data.data,
    };
  };
}
