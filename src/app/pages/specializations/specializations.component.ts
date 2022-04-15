import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { SpecializationsService } from "src/app/services/specializations.service";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from "ngx-toastr";

export interface PeriodicElement {
  image: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", name: 'Hydrogen' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", name: 'Helium', },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", name: 'Lithium', },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", name: 'Beryllium', },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", name: 'Boron', },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", name: 'Carbon', },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", name: 'Nitrogen' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", name: 'Oxygen', },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", name: 'Fluorine', },
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", name: 'Neon', },
];
@Component({
  selector: "app-specializations",
  templateUrl: "./specializations.component.html",
  styleUrls: ["./specializations.component.scss"],
})
export class SpecializationsComponent
  extends UserProfileComponent
  implements OnInit {
  arr = [];
   data =[];
   textInput = '';
   displayValue: string;
  posts: any;
  constructor(private specializationService: SpecializationsService,
    private httpService: HttpService, protected toastr?: ToastrService) {
    super();
  }

  showToasterSuccess() {
    this.toastr.success(
      "Data shown successfully !!",
      "Data shown successfully !!"
    );
  }

  ngOnInit(): void {

    this.sff_data = [
      { title: "Speciality", cb: this.specializationService.addSpeciality },
      { title: "Body Part", cb: this.specializationService.addBodyPart },
      { title: "Disease", cb: this.specializationService.addDisease },
      { title: "Doctor Type", cb: this.specializationService.addDoctorType },
      {
        title: "Hospital Service",
        options: ["Primary", "Secondary"],
        cb: this.specializationService.addHospitalService,
      },
    ];

      this.httpService.getcomments().subscribe(
        (result : any) => {
          this.posts =result;
          this.data=result
          console.log(result);

          this.httpService.getPosts().subscribe(
            (response:any) => {
              this.posts = response;
              this.arr=response
                console.log(response);
            },
            (error:any) => { console.log(error); });
        } )
  }
  onClick(event){
    console.log(this.textInput);

    this.httpService.dataFun(this.textInput).subscribe(
      (result:any) => {

        console.log(result);
        
          if (result.status === 200) {
            this.toastr.success(result.message);
          } 
          else {
            this.toastr.error(
              "Upload unsuccessful."
            );
          }
      }
    )
  }


  displayedColumns: string[] = ['name', 'image',];
  dataSource = ELEMENT_DATA;
}
