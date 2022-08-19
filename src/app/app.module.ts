import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { ToastrModule } from "ngx-toastr";
import { SpecializationsComponent } from './pages/specializations/specializations.component';
import { SpecializationsMappingComponent } from './pages/specializations-mapping/specializations-mapping.component';
import { SharedModule } from "./shared/shared.module";
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from "@angular/forms";
import { QualificationComponent } from './pages/qualification/qualification.component';
import { UserComponent } from './pages/user/user.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AnemitiesComponent } from './pages/anemities/anemities.component';
import { ServiceComponent } from './pages/service/service.component';
import { OwnershipComponent } from './pages/ownership/ownership.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    SharedModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, 
  SpecializationsComponent, SpecializationsMappingComponent, QualificationComponent, UserComponent, AppointmentComponent, AnemitiesComponent, ServiceComponent, OwnershipComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
