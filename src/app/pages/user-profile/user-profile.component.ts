import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/services/location.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  title = "toaster-not";
  constructor(
    private locationService?: LocationService,
    protected toastr?: ToastrService
  ) {}
  showToasterSuccess() {
    this.toastr.success(
      "Data shown successfully !!",
      "Data shown successfully !!"
    );
  }

  formData: FormData | null = new FormData();

  sff_data: Array<any> | null = null;
  ngOnInit() {
    this.sff_data = [
      { title: "City", cb: this.locationService.addCity },
      { title: "State", cb: this.locationService.addState },
      { title: "Locality", cb: this.locationService.addLocality },
      { title: "Country", cb: this.locationService.addCountry },
    ];
  }

  postFile(fileToUpload: File) {
    fileToUpload = fileToUpload[0];
    const formData: FormData = new FormData();
    this.formData.set("file", fileToUpload, fileToUpload.name);
    // this.locationService.uploadCSV_state(formData).subscribe((result: any) => {
    //   if (result.status === 200) {
    //   }
    // });
  }

  postCity(fileToUpload: File) {
    fileToUpload = fileToUpload[0];
    const formData: FormData = new FormData();
    this.formData.set("file", fileToUpload, fileToUpload.name);
    // this.locationService.uploadCSV_city(formData).subscribe((result: any) => {
    //   if (result.status === 200) {
    //   }
    // });
  }

  postLocality(fileToUpload: File) {
    fileToUpload = fileToUpload[0];
    const formData: FormData = new FormData();
    this.formData.set("file", fileToUpload, fileToUpload.name);
    // this.locationService
    //   .uploadCSV_locality(formData)
    //   .subscribe((result: any) => {
    //     if (result.status === 200) {
    //     }
    //   });
  }

  upload(service: Number) {
    if (this.formData === null) {
      this.toastr.error("Select a valid file");
      return;
    }

    switch (service) {
      /* State */
      case 1: {
        this.locationService
          .uploadCSV_state(this.formData)
          .subscribe((result: any) => {
            if (result.status === 200) {
              this.toastr.success(result.message);
            } else {
              this.toastr.error(
                "Upload unsuccessful. Try selecting a different file"
              );
            }
          });
        break;
      }
      /* City */
      case 2: {
        this.locationService
          .uploadCSV_city(this.formData)
          .subscribe((result: any) => {
            if (result.status === 200) {
              this.toastr.success(result.message);
            } else {
              this.toastr.error(
                "Upload unsuccessful. Try selecting a different file"
              );
            }
          });
        break;
      }
      case 3: {
        this.locationService
          .uploadCSV_locality(this.formData)
          .subscribe((result: any) => {
            if (result.status === 200) {
              this.toastr.success(result.message);
            } else {
              this.toastr.error(
                "Upload unsuccessful. Try selecting a different file"
              );
            }
          });
        break;
      }

      default: {
        this.toastr.error("Enter Valid File");
        break;
      }
    }
  }
}
