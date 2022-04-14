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
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, 
  SpecializationsComponent, SpecializationsMappingComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
