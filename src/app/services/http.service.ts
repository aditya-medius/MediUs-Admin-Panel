import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  dataFun(para) {
    return this.http.post("http://3.21.52.154:3000/admin/addSpeciality", {
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
    return this.http.post("http://3.21.52.154:3000/common/uploadImage", form, {
      headers: headers,
    });
  }

  getListOfSpecialityBodyPartAndDisease() {
    let token = JSON.parse(localStorage.getItem("admin")).data;
    const headers = new HttpHeaders({
      "auth-header": token,
    });
    return this.http.get(
      "http://3.21.52.154:3000/admin/getListOfSpecialityBodyPartAndDisease",
      {
        headers: headers,
      }
    );
  }
}
