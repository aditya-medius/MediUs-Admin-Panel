import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/services/location.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  title='toaster-not';
  constructor(private locationService?: LocationService, private toastr?:ToastrService) {}
  showToasterSuccess(){
    this.toastr.success("Data shown successfully !!", "Data shown successfully !!")
  }
  
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
    formData.append("file", fileToUpload, fileToUpload.name);
    this.locationService.uploadCSV_state(formData).subscribe((result: any) => {
      if (result.status === 200) {
      }
    });
  }

  postCity(fileToUpload: File) {
    fileToUpload = fileToUpload[0];
    const formData: FormData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);
    this.locationService.uploadCSV_city(formData).subscribe((result: any) => {
      if (result.status === 200) {
      }
    });
  }

  postLocality(fileToUpload: File) 
  {
    fileToUpload = fileToUpload[0];
    const formData: FormData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);
    this.locationService.uploadCSV_locality(formData).subscribe((result: any) => {
      if (result.status === 200) {
      }
    });
  }
}
