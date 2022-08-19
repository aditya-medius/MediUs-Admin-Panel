import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UtilService } from "../shared/util.service";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  apiUrl: string;
  constructor(private httpClient: HttpClient, private util: UtilService) {
    this.apiUrl = `${this.util.apiUrl()}`;
  }

  getAllServices = () => {
    return this.httpClient.get(
      `${this.apiUrl}/admin/getListOfSpecialityBodyPartAndDisease`
    );
  };

  addSpeciality = (specialityName: string) => {
    return this.httpClient.post(`${this.apiUrl}/admin/addSpeciality`, {
      specialityName,
    });
  };

  uploadServiceImage = (form: FormData) => {
    const headers = this.util.getHeader();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Accept", "application/json");
    return this.httpClient.post(`${this.apiUrl}/common/uploadImage`, form, {
      headers: headers,
    });
  };

  getServices = () => {
    return this.httpClient.get(`${this.apiUrl}/hospital/getServices`, {});
  };

  addService = (name: string, serviceType: string) => {
    return this.httpClient.post(`${this.apiUrl}/admin/addHospitalService`, {
      name,
      serviceType,
    });
  };

  deleteService = (id: string) => {
    return this.httpClient.post(
      `${this.apiUrl}/admin/deleteHospitalService/${id}`,
      {},
      { headers: this.util.getHeader() }
    );
  };
}
