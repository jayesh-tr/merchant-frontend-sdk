import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { ProductService, Datum } from "./product.service";

@Component({
  selector: 'ng9-business-console-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  public displayedColumns: Array<string>;
  public dataSource: any;
  public network: number;
  public products: Array<Datum> = [];
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

