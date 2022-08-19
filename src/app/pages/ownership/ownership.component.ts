import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { OwnershipService } from "src/app/services/ownership.service";

@Component({
  selector: "app-ownership",
  templateUrl: "./ownership.component.html",
  styleUrls: ["./ownership.component.scss"],
})
export class OwnershipComponent implements OnInit {
  constructor(
    private ownershipService: OwnershipService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllOwnership();
  }

  ownershipList: Array<any> | null = [];
  fieldData = {
    title: "Ownership",
    cb: this.ownershipService.addOwnership,
  };
  // ownershipList: Array<any> | null = null;

  getAllOwnership = () => {
    this.ownershipService.getAllOwnerships().subscribe((result: any) => {
      console.log("result", result);
      this.ownershipList = result.data;
    });
  };

  addOwnership = () => {
    // this.ownershipService.addOwnership().subscribe((result: any) => {});
  };

  deleteOwnership = (id: string) => {
    this.ownershipService.deleteOwnership(id).subscribe((result: any) => {
      if (result.status === 200) {
        this.toastrService.success("Successfully deleted");
        this.getAllOwnership();
      }
    });
  };
}
