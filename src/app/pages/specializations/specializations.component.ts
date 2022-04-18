import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { SpecializationsService } from "src/app/services/specializations.service";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { HttpService } from "src/app/services/http.service";
import { ToastrService } from "ngx-toastr";

export interface PeriodicElement {
  image: string;
  name: string;
}

@Component({
  selector: "app-specializations",
  templateUrl: "./specializations.component.html",
  styleUrls: ["./specializations.component.scss"],
})
export class SpecializationsComponent
  extends UserProfileComponent
  implements OnInit
{
  arr = [];
  data = [];
  textInput = "";
  displayValue: string;
  posts: any;
  constructor(
    private specializationService: SpecializationsService,
    private httpService: HttpService,
    protected toastr?: ToastrService
  ) {
    super();
  }

  ELEMENT_DATA: PeriodicElement[] = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      name: "Hydrogen",
    },
  ];

  showToasterSuccess() {
    this.toastr.success(
      "Data shown successfully !!",
      "Data shown successfully !!"
    );
  }

  ngOnInit(): void {
    this.sff_data = [
      // { title: "Speciality", cb: this.specializationService.addSpeciality },
      { title: "Body Part", cb: this.specializationService.addBodyPart },
      { title: "Disease", cb: this.specializationService.addDisease },
      { title: "Doctor Type", cb: this.specializationService.addDoctorType },
      {
        title: "Hospital Service",
        options: ["Primary", "Secondary"],
        cb: this.specializationService.addHospitalService,
      },
    ];

    this.httpService
      .getListOfSpecialityBodyPartAndDisease()
      .subscribe((result: any) => {
        this.ELEMENT_DATA = result.data.Speciality.map((e: any) => {
          return {
            name: e.specialityName,
            image: e.img,
          };
        });
        this.dataSource = this.ELEMENT_DATA;
      });
  }
  onClick() {
    this.httpService.dataFun(this.textInput).subscribe((result: any) => {
      if (result.status === 200) {
        this.formData.append("userId", result.data._id);
        this.httpService.uploadImage(this.formData).subscribe((res: any) => {
          if (res.status === 200) {
            this.toastr.success(result.message);
          } else {
            this.toastr.error("Upload unsuccessful.");
          }
        });
      } else {
        this.toastr.error(result.message);
      }
    });
  }

  formData: FormData | null = new FormData();
  uploadSpecialization(fileToUpload: File) {
    fileToUpload = fileToUpload[0];
    this.formData.append("profileImage", fileToUpload, fileToUpload.name);
    this.formData.append("user", "specializations");
  }
  displayedColumns: string[] = ["name", "image"];
  dataSource = this.ELEMENT_DATA;
}
