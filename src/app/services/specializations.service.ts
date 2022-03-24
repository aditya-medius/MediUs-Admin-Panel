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

  addSpeciality = (name: string) => {
    return this.http.post(
      `${this.apiUrl}/addSpeciality`,
      { specialityName: name },
      {}
    );
  };
  addBodyPart = (name: string) => {
    return this.http.post(`${this.apiUrl}/addBodyPart`, { bodyPart: name }, {});
  };
  addDisease = (name: string) => {
    return this.http.post(`${this.apiUrl}/addDisease`, { disease: name }, {});
  };
  addDoctorType = (name: string) => {
    return this.http.post(
      `${this.apiUrl}/addDoctorType`,
      { doctorType: name },
      {}
    );
  };
  addHospitalService = (name: string) => {
    return this.http.post(`${this.apiUrl}/addHospitalService`, { name }, {});
  };
}
