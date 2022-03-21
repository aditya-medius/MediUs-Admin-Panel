import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { AuthGuard } from "src/app/shared/auth.guard";

export const AdminLayoutRoutes: Routes = [
  {
    canActivate: [AuthGuard],
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "user-profile",
    component: UserProfileComponent,
  },
  { canActivate: [AuthGuard], path: "tables", component: TablesComponent },
  { canActivate: [AuthGuard], path: "icons", component: IconsComponent },
  { canActivate: [AuthGuard], path: "maps", component: MapsComponent },
];
