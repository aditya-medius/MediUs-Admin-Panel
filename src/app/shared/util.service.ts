import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor() {}

  apiUrl = (): string => {
    return environment.apiUrl;
  };
}
