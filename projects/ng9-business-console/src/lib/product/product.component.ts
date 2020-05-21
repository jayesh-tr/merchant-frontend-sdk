import { Component, OnInit, Input, Output } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { ProductService, Datum } from "./product.service";

@Component({
  selector: 'ng9-business-console-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  // @Input()
  // products: Array<Datum>;

  // @Input()
  // displayedColumns: Array<string>;

  // @Input()
  // dataSource: Array<Datum>;

  public dataSource: any;
  public products: Array<Datum> = [];
  public displayedColumns: Array<string>;
  
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
    this.displayedColumns = [
      'status',
      'productName',
      'totalEarnings',
      'activeCustomers',
      'numOfBilling',
      'ropstenNetworkOn',
      'creationTimestamp',
      'columnClicked'
    ];

    this.products = this.productService.getProductList();

    if (this.products.length > 0)
       this.dataSource = new MatTableDataSource(this.products);
  }
}

