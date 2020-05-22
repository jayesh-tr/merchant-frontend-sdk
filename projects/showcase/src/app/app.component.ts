import { Component, OnInit } from '@angular/core';
import { ProductService, FooterService, Datum } from '@ng9/business-console';

@Component({
  selector: 'showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public data: Array<Datum>;
  public columns: Array<string>;

  constructor(
    public productService: ProductService,
    public footerService: FooterService
  ) { }

  ngOnInit(): void {
    this.columns = [
      'status',
      'productName',
      'totalEarnings',
      'activeCustomers',
      'numOfBilling',
      'ropstenNetworkOn',
      'creationTimestamp',
      'columnClicked'
    ];
    this.data = this.productService.getProductList();
  }
}
