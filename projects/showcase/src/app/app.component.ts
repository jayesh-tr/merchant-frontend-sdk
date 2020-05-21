import { Component } from '@angular/core';
//import { ProductService } from '@ng9/business-console/lib/product/product.service';

@Component({
  selector: 'showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: any;
  constructor(
    //public productService: ProductService
  ){
    //this.title = this.productService.getProductList()
  }  
}
