import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ListComponent } from "./list/list.component";
import { SharedModule } from "../shared/shared.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { SingleFieldFormComponent } from "./single-field-form/single-field-form.component";
import { InputOneSelectOneComponent } from "./input-one-select-one/input-one-select-one.component";
import { SelectTwoComponent } from './select-two/select-two.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModule,
    MatPaginatorModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ListComponent,
    SingleFieldFormComponent,
    InputOneSelectOneComponent,
    SelectTwoComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ListComponent,
    SingleFieldFormComponent,
    InputOneSelectOneComponent,
  ],
})
export class ComponentsModule {}
