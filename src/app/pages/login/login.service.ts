import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UtilService } from "src/app/shared/util.service";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private apiUrl: string | null = null;
  constructor(private http: HttpClient, private util: UtilService) {
    this.apiUrl = `${this.util.apiUrl()}/agent`;
  }

  login = (...args) => {
    let phoneNumber = args[0];
    console.log("phoensdS:", phoneNumber);
    let url: string = `${this.apiUrl}/login?phoneNumber=${phoneNumber}`;
    if (args[1]) {
      let otp = args[1];
      url = `${this.apiUrl}/login?phoneNumber=${phoneNumber}&OTP=${otp}`;
    }
    return this.http.put(url, {});
  };
}
