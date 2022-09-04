import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // {
  //   path: "/dashboard",
  //   title: "Dashboard",
  //   icon: "ni-tv-2 text-primary",
  //   class: "",
  // },
  // { path: "/icons", title: "Icons", icon: "ni-planet text-blue", class: "" },
  // { path: "/maps", title: "Maps", icon: "ni-pin-3 text-orange", class: "" },
  {
    path: "/location",
    title: "Location",
    icon: "ni ni-square-pin text-yellow",
    // ni ni-square-pin text-yellow
    class: "",
  },
  // {
  //   path: "/specializations",
  //   title: "Specializations",
  //   icon: "ni ni-tag text-blue",
  //   // ni ni-square-pin text-yellow
  //   class: "",
  // },
  {
    path: "/specializations",
    title: "Specializations",
    icon: "ni ni-tag text-blue",
    // ni ni-square-pin text-yellow
    class: "",
  },
  // {
  //   path: "/specializations-mapping",
  //   title: "Specializations-mapping",
  //   icon: "ni ni-tag text-green",
  //   // ni ni-square-pin text-yellow
  //   class: "",
  // },
  // {
  //   path: "/tables",
  //   title: "Tables",
  //   icon: "ni-bullet-list-67 text-red",
  //   class: "",
  // },
  { path: "/doctor", title: "Doctor", icon: "ni-key-25 text-info", class: "" },
  {
    path: "/hospital",
    title: "Hospital",
    icon: "ni-key-25 text-info",
    class: "",
  },
  {
    path: "/user",
    title: "Patients",
    icon: "ni-key-25 text-info",
    class: "",
  },
  {
    path: "/qualification",
    title: "Qualifications",
    icon: "ni-key-25 text-info",
    class: "",
  },
  {
    path: "/appointment",
    title: "Appointments",
    icon: "ni-key-25 text-info",
    class: "",
  },
  {
    path: "/anemities",
    title: "Anemities",
    icon: "ni-key-25 text-info",
    class: "",
  },
  {
    path: "/services",
    title: "Services",
    icon: "ni-key-25 text-info",
    class: "",
  },
  { path: "/ownership", title: "Ownership", icon: "ni-key-25 text-info", class: "" },
  { path: "/fee", title: "Fee", icon: "ni-key-25 text-info", class: "" },
  { path: "/login", title: "Logout", icon: "ni-key-25 text-info", class: "" },
  

  // {
  //   path: "/register",
  //   title: "Register",
  //   icon: "ni-circle-08 text-pink",
  //   class: "",
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
