import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UtilService } from "../shared/util.service";

@Injectable({
  providedIn: "root",
})
export class FeeService {
  apiUrl: string | null = null;
  headers: HttpHeaders | null = null;
  constructor(private http: HttpClient, private utils: UtilService) {
    this.apiUrl = this.utils.apiUrl();
    this.headers = this.utils.getHeader();
  }

  getAllFee = () => {
    return this.http.get(`${this.apiUrl}/admin/getFees`, {
      headers: this.headers,
    });
  };

  addFee = (fee) => {
    return this.http.post(`${this.apiUrl}/admin/createFee`, fee, {
      headers: this.headers,
    });
  };
}
