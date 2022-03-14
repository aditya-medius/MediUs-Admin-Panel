import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { listData } from "src/app/pages/tables/tables.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @Input("data") data: { data: listData; Fn: Function } | null = null;

  dataCp: Array<any> | null = null;
  constructor() {}

  ngOnInit(): void {}
  length = 100;
  pageSize = 1;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  ngOnChanges(change: SimpleChanges) {
    if (change.data.currentValue.data) {
      let listData = change.data.currentValue;
      this.length = this.data.data.list.length;
      this.paginate();
      this.toggleVerify = listData.Fn;
    }
  }

  paginate(event?: PageEvent): PageEvent {
    if (!event) {
      event = new PageEvent();
      (event.pageIndex = 0), (event.pageSize = this.pageSize);
    }
    this.dataCp = this.data.data.list;
    return event;
  }

  toggleVerify = (): void => {};
}
