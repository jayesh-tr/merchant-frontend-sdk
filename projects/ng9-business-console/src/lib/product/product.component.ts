import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'ng9-business-console-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnChanges {
  @Input()
  /* tslint:disable-next-line */
  products: Array<Object> = [];

  @Input()
  displayedColumns: Array<string>;

  public dataSource: any;

  constructor() {}
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (
      changes.products &&
      changes.displayedColumns &&
      /* tslint:disable-next-line */
      changes['products'].currentValue
    ) {
      this.dataSource = new MatTableDataSource(this.products);
    }
  }
}
