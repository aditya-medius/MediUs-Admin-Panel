import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}
  apiUrl: string = environment.apiUrl;
  dataFun(para) {
    return this.http.post(`${this.apiUrl}/admin/addSpeciality`, {
      specialityName: para,
    });
  }

  uploadImage(form: FormData) {
    let token = JSON.parse(localStorage.getItem("admin")).data;
    const headers = new HttpHeaders({
      "auth-header": token,
    });
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Accept", "application/json");
    return this.http.post(`${this.apiUrl}/common/uploadImage`, form, {
      headers: headers,
    });
  }

  getListOfSpecialityBodyPartAndDisease() {
    let token = JSON.parse(localStorage.getItem("admin")).data;
    const headers = new HttpHeaders({
      "auth-header": token,
    });
    return this.http.get(
      `${this.apiUrl}/admin/getListOfSpecialityBodyPartAndDisease`,
      {
        headers: headers,
      }
    );
  }
}
