import { Component, OnInit } from "@angular/core";
import { SpecializationsService } from "src/app/services/specializations.service";
import { UserProfileComponent } from "../user-profile/user-profile.component";

@Component({
  selector: "app-specializations-mapping",
  templateUrl: "./specializations-mapping.component.html",
  styleUrls: ["./specializations-mapping.component.scss"],
})
export class SpecializationsMappingComponent
  extends UserProfileComponent
  implements OnInit
{
  constructor(protected specializationService: SpecializationsService) {
    super();
  }

  ngOnInit(): void {
    this.specializationService
      .getSpecialityBodyPartAndDisease()
      .subscribe((result: any) => {
        let data = result.data;
        console.log("sdudsjdnds:", data);
        this.sff_data = [
          {
            title: "Speciality & Body Map",
            cb: this.specializationService.addSpecialityBody,
            options: { select1: data["Speciality"], select2: data["BodyPart"] },
          },
          {
            title: "Speciality & disease Map",
            cb: this.specializationService.addSpecialityDisease,
            options: { select1: data["Speciality"], select2: data["Disease"] },
          },
          // {
          //   title: "Speciality & Doctor Type Map",
          //   cb: this.specializationService.addSpecialityDoctorType,
          //   options: {
          //     select1: data["Speciality"],
          //     select2: data["DoctorType"],
          //   },
          // },
        ];
      });
  }
}
