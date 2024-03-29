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
import { HospitalComponent } from "src/app/pages/hospital/hospital.component";
import { QualificationComponent } from "src/app/pages/qualification/qualification.component";
import { UserComponent } from "src/app/pages/user/user.component";
import { AppointmentComponent } from "src/app/pages/appointment/appointment.component";
import { AnemitiesComponent } from "src/app/pages/anemities/anemities.component";
import { ServiceComponent } from "src/app/pages/service/service.component";
import { OwnershipComponent } from "src/app/pages/ownership/ownership.component";
import { FeeComponent } from "src/app/pages/fee/fee.component";

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
  {
    canActivate: [AuthGuard],
    path: "hospital",
    component: HospitalComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "qualification",
    component: QualificationComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "user",
    component: UserComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "appointment",
    component: AppointmentComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "anemities",
    component: AnemitiesComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "services",
    component: ServiceComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "ownership",
    component: OwnershipComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "fee",
    component: FeeComponent,
  },
];
