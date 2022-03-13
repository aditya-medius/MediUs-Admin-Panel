import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { ToastrService } from "ngx-toastr";
import { TableService } from "src/app/services/table.service";

interface listData {
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
  agentData: listData | null = null;
  doctorList: Array<any> | null = null;
  ngOnInit() {
    Promise.all([
      this.tableService.getAllDoctorsList().toPromise(),
      this.tableService.getAllAgentList().toPromise(),
    ]).then((result: any) => {
      this.getAllDoctorList(result[0]);
      this.getAllAgentList(result[1]);
    });
    // this.getAllDoctorsList();
  }

  getAllDoctorList = (data: any) => {
    this.doctorData = {
      header: data.header,
      list: data.data.data,
    };
  };

  getAllAgentList = (data: any) => {
    this.agentData = {
      header: data.header,
      list: data.data.data,
    };
  };
  // getAllDoctorsList = () => {
  //   this.tableService.getAllDoctorsList().subscribe(
  //     (result: any) => {
  //       console.log("data:", result);
  //       this.doctorList = result.data.data;

  //       this.doctorData = {
  //         header: result.header,
  //         list: this.doctorList,
  //       };
  //     },
  //     (error: HttpErrorResponse) => console.log("Error:", error)
  //   );
  // };

  toggleVerify = (event: MatSlideToggleChange, id: string) => {
    this.tableService.verifyDoctors(id).subscribe(
      (result: any) => {
        if (result.status == 200) {
          this.toastr.success(result.message);
          this.toggleVerifyStatus(id);
        } else if (result.status == 400) {
          this.toastr.error(result.message);
        }
      },
      (error: HttpErrorResponse) => this.toastr.error(error.message)
    );
  };

  toggleVerifyStatus = (id: string) => {
    this.doctorList.forEach((e: any) => {
      if (e.id == id) {
        e["verified"] = true;
      }
    });
  };
}
