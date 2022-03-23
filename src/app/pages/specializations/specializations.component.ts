import { Component, OnInit } from "@angular/core";
import { SpecializationsService } from "src/app/services/specializations.service";
import { UserProfileComponent } from "../user-profile/user-profile.component";

@Component({
  selector: "app-specializations",
  templateUrl: "../user-profile/user-profile.component.html",
  styleUrls: ["./specializations.component.scss"],
})
export class SpecializationsComponent
  extends UserProfileComponent
  implements OnInit
{
  constructor(private specializationService: SpecializationsService) {
    super();
  }

  ngOnInit(): void {
    this.sff_data = [
      { title: "Speciality", cb: this.specializationService.addSpeciality },
      { title: "BodyPart", cb: this.specializationService.addBodyPart },
      { title: "Disease", cb: this.specializationService.addDisease },
      { title: "DoctorType", cb: this.specializationService.addDoctorType },
      {
        title: "HospitalService",
        cb: this.specializationService.addHospitalService,
      },
    ];
  }
}
