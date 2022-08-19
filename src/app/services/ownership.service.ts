import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UtilService } from "../shared/util.service";

@Injectable({
  providedIn: "root",
})
export class OwnershipService {
  apiUrl: string | null = null;
  headers: HttpHeaders | null = null;
  constructor(private http: HttpClient, private utils: UtilService) {
    this.apiUrl = this.utils.apiUrl();
    this.headers = this.utils.getHeader();
  }

  getAllOwnerships = () => {
    return this.http.get(`${this.apiUrl}/admin/getOwnership`, {
      headers: this.headers,
    });
  };

  addOwnership = (owner: string) => {
    return this.http.post(
      `${this.apiUrl}/admin/addOwnership`,
      {
        owner,
      },
      {
        headers: this.headers,
      }
    );
  };

  deleteOwnership = (id: string) => {
    return this.http.post(
      `${this.apiUrl}/admin/deleteOwnership/${id}`,
      {},
      {
        headers: this.headers,
      }
    );
  };
}
