import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { AuthGuard } from "src/app/shared/auth.guard";
import { SpecializationsComponent } from "src/app/pages/specializations/specializations.component";
import { SpecializationsMappingComponent } from "src/app/pages/specializations-mapping/specializations-mapping.component";
import { DoctorComponent } from "src/app/pages/doctor/doctor.component";

export const AdminLayoutRoutes: Routes = [
  {
    canActivate: [AuthGuard],
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "location",
    component: UserProfileComponent,
  },
  { canActivate: [AuthGuard], path: "tables", component: TablesComponent },
  { canActivate: [AuthGuard], path: "icons", component: IconsComponent },
  { canActivate: [AuthGuard], path: "maps", component: MapsComponent },
  {
    canActivate: [AuthGuard],
    path: "specializations",
    component: SpecializationsComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "specializations-mapping",
    component: SpecializationsMappingComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "doctor",
    component: DoctorComponent,
  },
   
];
