import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UtilService } from "../shared/util.service";

@Injectable({
  providedIn: "root",
})
export class SpecializationsService {
  apiUrl: string | null = null;
  constructor(private http: HttpClient, private util: UtilService) {
    this.apiUrl = `${this.util.apiUrl()}/admin`;
  }

  addSpeciality = () => {
    return this.http.post(`${this.apiUrl}/addSpeciality`, {}, {});
  };
  addBodyPart = () => {
    return this.http.post(`${this.apiUrl}/addBodyPart`, {}, {});
  };
  addDisease = () => {
    return this.http.post(`${this.apiUrl}/addDisease`, {}, {});
  };
  addDoctorType = () => {
    return this.http.post(`${this.apiUrl}/addDoctorType`, {}, {});
  };
  addHospitalService = () => {
    return this.http.post(`${this.apiUrl}/addHospitalService`, {}, {});
  };
}
