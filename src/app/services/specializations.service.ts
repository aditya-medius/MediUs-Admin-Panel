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

  /* Single data - POST */
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
  addHospitalService = (name: string, serviceType: string) => {
    return this.http.post(
      `${this.apiUrl}/addHospitalService`,
      { name, serviceType },
      {}
    );
  };

  /* Mapping - POST */
  addSpecialityBody = (speciality: string, bodyParts: Array<string>) => {
    return this.http.post(
      `${this.apiUrl}/addSpecialityBody`,
      {
        speciality,
        bodyParts,
      },
      {}
    );
  };

  addSpecialityDisease = (speciality: string, disease: Array<string>) => {
    return this.http.post(
      `${this.apiUrl}/addSpecialityDisease`,
      {
        speciality,
        disease,
      },
      {}
    );
  };

  addSpecialityDoctorType = (speciality: string, doctorType: Array<string>) => {
    return this.http.post(
      `${this.apiUrl}/addSpecialityDoctorType`,
      {
        speciality,
        doctorType,
      },
      {}
    );
  };

  /* Fields - GET */
  getSpecialityBodyPartAndDisease = () => {
    return this.http.get(`${this.apiUrl}/getListOfSpecialityBodyPartAndDisease`, {});
  };
}
