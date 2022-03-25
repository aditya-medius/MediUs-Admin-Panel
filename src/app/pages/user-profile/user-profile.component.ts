import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/services/location.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  constructor(private locationService?: LocationService) {}

  sff_data: Array<any> | null = null;
  ngOnInit() {
    this.sff_data = [
      { title: "City", cb: this.locationService.addCity },
      { title: "State", cb: this.locationService.addState },
      { title: "Locality", cb: this.locationService.addLocality },
      { title: "Country", cb: this.locationService.addCountry },
    ];
  }
}
