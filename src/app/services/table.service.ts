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

  getAllAgentList = () => {
    return this.http.get(`${this.apiUrl}/getAllAgentList`).pipe(
      map((data: any) => {
        return this.addHeaderNameToList(data, "Agents");
      })
    );
  };

  verifyDoctors = (id: string) => {
    return this.http.put(`${this.apiUrl}/verifyDoctors/${id}`, {});
  };
}
