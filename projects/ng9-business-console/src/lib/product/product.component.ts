import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'ng9-business-console-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges {

  @Input()
  products: Array<Object> = [];

  @Input()
  displayedColumns: Array<string>;

  public dataSource: any;

  constructor() { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.products && changes.displayedColumns && changes['products'].currentValue) {
      this.dataSource = new MatTableDataSource(this.products);
    }
  }
}

