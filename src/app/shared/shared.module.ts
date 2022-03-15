import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSlideToggleModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    MatSlideToggleModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
