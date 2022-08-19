import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ServiceService } from "src/app/services/service.service";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.scss"],
})
export class ServiceComponent implements OnInit {
  constructor(
    private service: ServiceService,
    private toastrService: ToastrService
  ) {}

  speciality: Array<any> | null = null;
  ngOnInit(): void {
    this.getAllServices();
  }

  sff_data = {
    title: "Services",
    options: ["Primary", "Secondary"],
    cb: this.service.addService,
  };

  getAllServices = () => {
    this.service.getServices().subscribe((result: any) => {
      this.speciality = result.data;
    });
  };

  deleteService = (id: string) => {
    this.service.deleteService(id).subscribe((result: any) => {
      if (result.status === 200) {
        this.toastrService.success("Successfully deleted");
        this.getAllServices();
      }
    });
  };
}
