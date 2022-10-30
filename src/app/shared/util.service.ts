import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  private localUrl: string = localStorage.getItem("envUrl") as string;
  constructor() {}

  apiUrl = (): string => {
    return this.localUrl ?? environment.apiUrl;
    // return this.env;
  };

  getToken = (): string => {
    let token = JSON.parse(localStorage.getItem("admin")).data;
    return token;
  };

  getHeader = (): HttpHeaders => {
    let token = this.getToken();
    const headers = new HttpHeaders({
      "auth-header": token,
    });
    return headers;
  };
}
