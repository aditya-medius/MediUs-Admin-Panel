import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UtilService } from "../shared/util.service";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  apiUrl: string | null = null;
  constructor(private http: HttpClient, private util: UtilService) {
    this.apiUrl = `${this.util.apiUrl()}/admin`;
  }
  addCity = (name: string) => {
    return this.http.post(
      `${this.apiUrl}/city`,
      {
        name,
      },
      {}
    );
  };
  addState = (name: string) => {
    return this.http.post(
      `${this.apiUrl}/state`,
      {
        name,
      },
      {}
    );
  };
  addLocality = (name: string) => {
    return this.http.post(
      `${this.apiUrl}/locality`,
      {
        name,
      },
      {}
    );
  };
  addCountry = (name: string) => {
    return this.http.post(
      `${this.apiUrl}/country`,
      {
        name,
      },
      {}
    );
  };

  uploadCSV_state = (formData: FormData) => {
    return this.http.post(`${this.apiUrl}/uploadCSV_state`, formData);
  };
}
