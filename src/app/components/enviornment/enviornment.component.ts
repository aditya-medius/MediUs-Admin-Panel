import { Component, OnInit } from "@angular/core";
import { UtilService } from "src/app/shared/util.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-enviornment",
  templateUrl: "./enviornment.component.html",
  styleUrls: ["./enviornment.component.scss"],
})
export class EnviornmentComponent implements OnInit {
  constructor(private util: UtilService) {}

  onEnvChange = (value: string) => {
    localStorage.setItem("envUrl", value);
    window.location.reload();
  };

  public localUrl: string = this.util.apiUrl();
  ngOnInit(): void {}
}
