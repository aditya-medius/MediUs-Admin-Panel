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
  selector: "app-anemities",
  templateUrl: "./anemities.component.html",
  styleUrls: ["./anemities.component.scss"],
})
export class AnemitiesComponent implements OnInit {
  constructor(
    private tableService: TableService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  anemityData: listData | null = null;
  sff_data = {
    title: "Anemities",
    options: ["Primary", "Secondary"],
    cb: this.tableService.addAnemities,
  };
  ngOnInit(): void {
    Promise.all([this.tableService.getAllAnemities().toPromise()]).then(
      (result: any) => {
        this.getAllAnemities(result[0]);
      }
    );
    // this.getAllDoctorsList();
  }

  getAllAnemities = (data: any) => {
    this.anemityData = {
      header: data.header,
      list: data.data.data,
    };
  };

  deleteAnemities = (id: string) => {
    this.tableService.deleteAnemities(id).subscribe((result: any) => {
      if (result.status === 200) {
        this.toastr.success("Successfully deleted anemities");
        Promise.all([this.tableService.getAllAnemities().toPromise()]).then(
          (result: any) => {
            this.getAllAnemities(result[0]);
          }
        );
      }
    });
  };
}
