import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { UtilService } from "../shared/util.service";

@Injectable({
  providedIn: "root",
})
export class TableService {
  apiUrl: string | null = null;
  constructor(private http: HttpClient, private util: UtilService) {
    this.apiUrl = `${this.util.apiUrl()}/admin`;
  }

  // getALlLists = async () => {
  //   Promise.all([
  //     this.getAllDoctorsList().toPromise(),
  //     this.getAllAgentList().toPromise(),
  //   ]);
  // };

  addHeaderNameToList = (data: any, header: string) => {
    data = { header, data };
    return data;
  };

  getAllDoctorsList = () => {
    return this.http.get(`${this.apiUrl}/getAllDoctorsList`).pipe(
      map((data: any) => {
        return this.addHeaderNameToList(data, "Doctors");
      })
    );
  };

  getAllHospitalList = () => {
    return this.http.get(`${this.apiUrl}/getAllHospitalList`).pipe(
      map((data: any) => {
        return this.addHeaderNameToList(data, "Hospitals");
      })
    );
  };

  getAllPatientList = () => {
    return this.http
      .get(`${this.apiUrl}/getAllPatientList`)
      .pipe(map((data: any) => this.addHeaderNameToList(data, "Patients")));
  };

  getAllAppointmentList = () => {
    return this.http
      .get(`${this.apiUrl}/getAllAppointments`)
      .pipe(map((data: any) => this.addHeaderNameToList(data, "Appointments")));
  };

  verifyDoctors = (id: string) => {
    return this.http.put(`${this.apiUrl}/verifyDoctors/${id}`, {});
  };

  verifyHospital = (id: string) => {
    return this.http.put(`${this.apiUrl}/verifyHospital/${id}`, {});
  };
}
