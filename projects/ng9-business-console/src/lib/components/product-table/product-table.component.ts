import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Datum } from '../../models/product-model';

@Component({
  selector: 'ng9-business-console-product',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnChanges {
  @Input()
  products: Datum[] = [];

  @Input()
  displayedColumns: string[];

  public dataSource: any;
  constructor() {}

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (changes.products && changes.products.currentValue) {
      this.dataSource = new MatTableDataSource(this.products);
    }
  }
}
