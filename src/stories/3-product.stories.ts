import { storiesOf, moduleMetadata } from '@storybook/angular';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../projects/ng9-business-console/src/lib/product/product.component';
import { ProductService } from '../../projects/ng9-business-console/src/lib/product/product.service';

storiesOf("Product", module)
  .addDecorator(
    moduleMetadata({
      declarations: [],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ProductService],
      imports: [CdkTableModule, CommonModule, MatTableModule]
    })
  )
  .add("Empty Product", () => ({
    component: ProductComponent,
    props: {}
  }))
  .add("with product data", () => ({
    component: ProductComponent,
    props: {
      products: [{ "productID": "cBvn45paZ7s63nK89CerAKzRfTz5A5Po", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 5, "tags": null, "productName": "The laughing man", "productDescription": null, "creationTimestamp": "2020/05/01", "lastUpdateTimestamp": "1562227047", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/5722eeb527790c397846216f2ab605e1.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 15, "enabled": true, "totalEarnings": 0, "status": "active" }]
    },
    displayedColumns: [
      'status',
      'productName',
      'totalEarnings',
      'activeCustomers',
      'numOfBilling',
      'ropstenNetworkOn',
      'creationTimestamp',
      'columnClicked'
    ]
  }))
  ;