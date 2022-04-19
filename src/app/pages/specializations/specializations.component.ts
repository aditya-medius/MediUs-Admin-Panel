import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { SpecializationsService } from "src/app/services/specializations.service";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { HttpService } from "src/app/services/http.service";
import { ToastrService } from "ngx-toastr";
import { FormControl, FormGroup } from "@angular/forms";
import { UtilService } from "src/app/shared/util.service";
import { ThrowStmt } from "@angular/compiler";

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
  signupForm: FormGroup;

  constructor(
    private specializationService: SpecializationsService,
    private httpService: HttpService,
    private utilService: UtilService,
    protected toastr?: ToastrService
  ) {
    super();
  }

  ELEMENT_DATA: PeriodicElement[] = [];

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
    this.getListOfSpecialityBodyPartAndDisease();
  }

  getListOfSpecialityBodyPartAndDisease = () => {
    this.httpService
      .getListOfSpecialityBodyPartAndDisease()
      .subscribe((result: any) => {
        this.ELEMENT_DATA = result.data.Speciality.map((e: any) => {
          return {
            name: e.specialityName,
            image: `${this.utilService.apiUrl()}/${
              e.img
            }?token=${this.utilService.getToken()}`,
          };
        });
        this.dataSource = this.ELEMENT_DATA;
      });
  };
  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.get("user_name").value);
  }

  formData: FormData | null = new FormData();
  uploadSpecialization(fileToUpload: File) {
    fileToUpload = fileToUpload[0];
    this.formData.append("profileImage", fileToUpload, fileToUpload.name);
    this.formData.append("user", "specializations");
  }
  displayedColumns: string[] = ["name", "image"];
  dataSource = this.ELEMENT_DATA;

  @ViewChild("fileInput") inputFile: ElementRef;

  onClick() {
    this.httpService.dataFun(this.textInput).subscribe((result: any) => {
      if (result.status === 200) {
        this.formData.append("userId", result.data._id);
        this.httpService.uploadImage(this.formData).subscribe((res: any) => {
          if (res.status === 200) {
            this.toastr.success(result.message);
            this.getListOfSpecialityBodyPartAndDisease();
            this.formData.delete("profileImage");
            this.formData.delete("user");
            this.formData.delete("userId");
            this.inputFile.nativeElement.value = "";
            this.textInput = "";
          } else {
            this.toastr.error("Upload unsuccessful.");
          }
        });
      } else {
        this.toastr.error(result.message);
      }
    });
  }
}
