import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSlideToggleModule,
    ToastrModule.forRoot(),
  ],
  exports: [HttpClientModule, MatSlideToggleModule, ToastrModule],
})
export class SharedModule {}
