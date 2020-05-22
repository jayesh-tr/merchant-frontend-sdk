import { storiesOf, moduleMetadata } from '@storybook/angular';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
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
    template: `<div class="no-product">
    <h2>No products are available!</h2>
  </div>`,
    styles: [`
    .no-product {
      text-align: center;
      margin-top: 55px;
    }
    `],
    props: {}
  }))
  .add("with product data", () => ({
    template: `<div class="container-fluid main-container">
    <div class="row row-padding bm-header">
      <div class="col-sm-12 bm-header-col">
        <h4>Products</h4>
      </div>
    </div>
    <div class="row row-padding row-table product-table" *ngIf="products?.length > 0; else emptyProduct">
      <table mat-table [dataSource]="dataSource" matSort>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
  
        <!-- status Column -->
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef mat-sort-header></th>
          <td mat-cell *matCellDef="let product">
          </td>
        </ng-container>
  
        <!-- totalEarnings Column -->
        <ng-container matColumnDef="productName">
          <th mat-header-cell *matHeaderCellDef mat-sort-header class="font-12">Product Name</th>
          <td mat-cell *matCellDef="let product">
            {{ product.productName }}
          </td>
        </ng-container>
  
        <!-- totalEarnings Column -->
        <ng-container matColumnDef="totalEarnings">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Total Earnings</th>
          <td mat-cell *matCellDef="let product" class="font-13">
            {{ product.totalEarnings / 100 | number: '1.2-5' }}
          </td>
        </ng-container>
  
        <!-- activeCustomers Column -->
        <ng-container matColumnDef="activeCustomers">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>
            Active Customers
            <i data-toggle="tooltip" class="fas fa-info-circle tooltip-icon" title="You can only delete (/remove) a Product as long as you
        don't have any customers subscribed to it." placement="top"></i>
          </th>
          <td mat-cell *matCellDef="let product" class="font-13">
            {{ product.activeCustomers }}
          </td>
        </ng-container>
  
        <!-- numOfBilling Column -->
        <ng-container matColumnDef="numOfBilling">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>No. of Billing Models</th>
          <td mat-cell *matCellDef="let product" class="font-13">
            {{ product.numOfBilling }}
          </td>
        </ng-container>
  
        <!-- ropstenNetworkOn Column -->
        <ng-container matColumnDef="ropstenNetworkOn">
          <th mat-header-cell *matHeaderCellDef mat-sort-header></th>
          <td mat-cell *matCellDef="let product" class="font-13">
            <label class="test-indicator">Test</label>
          </td>
        </ng-container>
  
        <!-- creationTimestamp Column -->
        <ng-container matColumnDef="creationTimestamp">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Creation Date</th>
          <td mat-cell *matCellDef="let product" class="font-13">
            {{ product.creationTimestamp }}
          </td>
        </ng-container>
  
        <!-- columnClicked button -->
        <ng-container matColumnDef="columnClicked" class="options-button">
          <th mat-header-cell *matHeaderCellDef class="columnClicked"></th>
          <td mat-cell *matCellDef="let product" class="columnClicked-cell">
          </td>
        </ng-container>
      </table>
    </div>
    <ng-template #emptyProduct>
      <div class="no-product">
        <h2>No products are available!</h2>
      </div>
    </ng-template>
  </div>
  `,
    styles: [`
  .main-container {
    background-color: #fff;
    border-radius: 10px;
    border-width: 1px;
    padding: 0px;
    padding-bottom: 50px;
    margin-bottom: 100px;
    min-height: 70%;
  
    h3,
    h4 {
      display: inline;
      font-size: 18px;
    }
  
    .bm-header {
      border-bottom: 1px solid #f2f2f2;
    }
  
    .bm-header-col {
      padding-right: 20px;
      padding-left: 13px;
    }
  
    .row-margin-top {
      margin-top: 50px;
    }
  
    .row-table {
      // overflow-x: scroll;
      padding: 0 !important;
    }
  
    .row-padding {
      padding-left: 3.2%;
      padding-right: 3%;
      padding-top: 15px;
      padding-bottom: 5px;
      margin-right: 0px;
      margin-left: 0px;
    }
  
    .col-centered {
      padding-left: 0px;
      padding-right: 0px;
      text-align: center;
    }
  }
  
  tr:hover {
    background-color: #dfe8fb;
    cursor: pointer;
    font-weight: 600;
  }
  
  td {
    font-weight: none !important;
  }
  
  @media only screen and (min-width: 1920px) {
    .productHeading span {
      padding-left: 70px;
    }
  
    .balance-container-white {
      left: 55% !important;
    }
  
    .info-message:hover .balance-container-white {
      line-height: 1.3;
      padding-top: 7px;
    }
  }
  
  .thead {
    background: #ffffff;
  }
  
  table {
    border-bottom: 1px solid #e3ebf3;
  }
  
  .table td {
    padding: 1rem;
  }
  
  .trHeader:hover {
    background: none !important;
  }
  
  @media only screen and (max-width: 768px) {
    .main-container {
      .row-table {
        margin-right: 10px;
        margin-left: 10px;
      }
    }
  }
  
  ////////////// table css //////////////
  table {
    width: 100%;
  }
  
  td,
  th {
    border: #e2e3e6;
  }
  
  .test-indicator {
    width: 90%;
    height: 60%;
    text-align: right;
    background-color: #ffefe9;
    color: #f97841;
    text-align: center;
    font-size: 13px;
    float: right;
    margin-top: 8px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 3px;
  }
  
  .active-product,
  .testing-product,
  .inactive-product,
  .expired-product {
    font-size: 8px;
  }
  
  .mat-sort-header-button,
  .mat-row.ng-star-inserted {
    margin: 0 auto;
    text-align: center;
  }
  
  .mat-column-productName>.mat-sort-header-container {
    text-align: center;
  }
  
  .no-product {
    text-align: center;
    margin-top: 55px;
  }
  
  .mat-column-productName {
    text-align: center;
    font-size: 13px;
  }
  
  table th td {
    text-align: center;
    vertical-align: middle;
  }
  
  ::ng-deep .product-table .mat-header-cell .mat-sort-header-container {
    justify-content: center;
    padding: 16px;
  }
  
  ::ng-deep .product-table .mat-cell {
    padding: 0 12px 0 0;
  }
  
  table thead th {
    border-bottom: 1px solid #e3ebf3;
  }
  `],
    props: {
      dataSource: [
        { "productID": "cBvn45paZ7s63nK89CerAKzRfTz5A5Po", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 5, "tags": null, "productName": "The laughing man", "productDescription": null, "creationTimestamp": "2020/05/01", "lastUpdateTimestamp": "1562227047", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/5722eeb527790c397846216f2ab605e1.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 15, "enabled": true, "totalEarnings": 0, "status": "active" },
        { "productID": "Ot6gksy3FRuwnDmJzFyxFWZbpl8OHlsh", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 1, "tags": null, "productName": "fSingle Payments", "productDescription": null, "creationTimestamp": "2020/05/02", "lastUpdateTimestamp": "1561560334", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/acdda1217729a6ad377bf9eb912163f0.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 6, "enabled": true, "totalEarnings": 0, "status": "active" },
        { "productID": "bW6b1ouyIxlIoiRC5DSB6l869AN4DHZY", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 2, "tags": null, "productName": "Test", "productDescription": null, "creationTimestamp": "2020/05/03", "lastUpdateTimestamp": "1563867777", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/56418aa6cc913e760ae20cc94e6d4ddc.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 1, "enabled": true, "totalEarnings": 0, "status": "active" },
        { "productID": "FD26GBeFsQEusFGu4wRIDzVu69H11ndA", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 12, "tags": null, "productName": "Kemix", "productDescription": null, "creationTimestamp": "2020/05/04", "lastUpdateTimestamp": "1564384127", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/68fbfa416c6a277121bb2d57fbe9734d.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 0, "enabled": true, "totalEarnings": 0, "status": "inactive" },
        { "productID": "of2NVN70OcAwJFX4VSBX1B5GhI2AEdKT", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 1, "tags": null, "productName": "NonKemix", "productDescription": null, "creationTimestamp": "2020/05/05", "lastUpdateTimestamp": "1564384127", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/78167f7a55843d47ba688eea95048258.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 0, "enabled": true, "totalEarnings": 0, "status": "inactive" },
        { "productID": "JxW5JPWUtmRonn1EHQ8NUvDoiTy0nnc4", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 14, "tags": null, "productName": "NewSeptember Test", "productDescription": null, "creationTimestamp": "2020/05/06", "lastUpdateTimestamp": "1568302016", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/b45495d201967f208177d4920a396629.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 1, "enabled": true, "totalEarnings": 0, "status": "active" },
        { "productID": "RkmxawQXiAHbsP44PNqxHCu6qeC18ibs", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 14, "tags": null, "productName": "NoKemix", "productDescription": null, "creationTimestamp": "2020/05/07", "lastUpdateTimestamp": "1568040314", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/f4c0171016876b585748b34ad7943921.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 0, "enabled": true, "totalEarnings": 0, "status": "inactive" },
        { "productID": "pF3tNtEdnR7oKB3L4tkbqSHyM3OSabfB", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 14, "tags": null, "productName": "ds", "productDescription": null, "creationTimestamp": "2020/05/08", "lastUpdateTimestamp": "1566486299", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/3baeee3598f0dd40aecea034d469799f.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 2, "enabled": true, "totalEarnings": 0, "status": "active" },
        { "productID": "9Wl5Z70EFHMeEhBIOTUlh13sE2BztYav", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 14, "tags": null, "productName": "Contract v2.1", "productDescription": null, "creationTimestamp": "2020/05/09", "lastUpdateTimestamp": "1565681180", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/52a29a4b736db94deaa2ad4523bfb02a.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 0, "enabled": true, "totalEarnings": 0, "status": "inactive" },
        { "productID": "IPDLyR3a6MW7Frtr0jDBZDWIPtFp716g", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 14, "tags": null, "productName": "Contract v2", "productDescription": null, "creationTimestamp": "2020/05/10", "lastUpdateTimestamp": "1565681180", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/48d3e043b150c985bf9d21489dc46db4.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 0, "enabled": true, "totalEarnings": 0, "status": "inactive" }],
      products: [
        { "productID": "cBvn45paZ7s63nK89CerAKzRfTz5A5Po", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 5, "tags": null, "productName": "The laughing man", "productDescription": null, "creationTimestamp": "2020/05/01", "lastUpdateTimestamp": "1562227047", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/5722eeb527790c397846216f2ab605e1.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 15, "enabled": true, "totalEarnings": 0, "status": "active" },
        { "productID": "Ot6gksy3FRuwnDmJzFyxFWZbpl8OHlsh", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 1, "tags": null, "productName": "fSingle Payments", "productDescription": null, "creationTimestamp": "2020/05/02", "lastUpdateTimestamp": "1561560334", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/acdda1217729a6ad377bf9eb912163f0.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 6, "enabled": true, "totalEarnings": 0, "status": "active" },
        { "productID": "bW6b1ouyIxlIoiRC5DSB6l869AN4DHZY", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 2, "tags": null, "productName": "Test", "productDescription": null, "creationTimestamp": "2020/05/03", "lastUpdateTimestamp": "1563867777", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/56418aa6cc913e760ae20cc94e6d4ddc.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 1, "enabled": true, "totalEarnings": 0, "status": "active" },
        { "productID": "FD26GBeFsQEusFGu4wRIDzVu69H11ndA", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 12, "tags": null, "productName": "Kemix", "productDescription": null, "creationTimestamp": "2020/05/04", "lastUpdateTimestamp": "1564384127", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/68fbfa416c6a277121bb2d57fbe9734d.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 0, "enabled": true, "totalEarnings": 0, "status": "inactive" },
        { "productID": "of2NVN70OcAwJFX4VSBX1B5GhI2AEdKT", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 1, "tags": null, "productName": "NonKemix", "productDescription": null, "creationTimestamp": "2020/05/05", "lastUpdateTimestamp": "1564384127", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/78167f7a55843d47ba688eea95048258.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 0, "enabled": true, "totalEarnings": 0, "status": "inactive" },
        { "productID": "JxW5JPWUtmRonn1EHQ8NUvDoiTy0nnc4", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 14, "tags": null, "productName": "NewSeptember Test", "productDescription": null, "creationTimestamp": "2020/05/06", "lastUpdateTimestamp": "1568302016", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/b45495d201967f208177d4920a396629.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 1, "enabled": true, "totalEarnings": 0, "status": "active" },
        { "productID": "RkmxawQXiAHbsP44PNqxHCu6qeC18ibs", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 14, "tags": null, "productName": "NoKemix", "productDescription": null, "creationTimestamp": "2020/05/07", "lastUpdateTimestamp": "1568040314", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/f4c0171016876b585748b34ad7943921.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 0, "enabled": true, "totalEarnings": 0, "status": "inactive" },
        { "productID": "pF3tNtEdnR7oKB3L4tkbqSHyM3OSabfB", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 14, "tags": null, "productName": "ds", "productDescription": null, "creationTimestamp": "2020/05/08", "lastUpdateTimestamp": "1566486299", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/3baeee3598f0dd40aecea034d469799f.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 2, "enabled": true, "totalEarnings": 0, "status": "active" },
        { "productID": "9Wl5Z70EFHMeEhBIOTUlh13sE2BztYav", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 14, "tags": null, "productName": "Contract v2.1", "productDescription": null, "creationTimestamp": "2020/05/09", "lastUpdateTimestamp": "1565681180", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/52a29a4b736db94deaa2ad4523bfb02a.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 0, "enabled": true, "totalEarnings": 0, "status": "inactive" },
        { "productID": "IPDLyR3a6MW7Frtr0jDBZDWIPtFp716g", "businessID": "y2beEPTM49El0wXfAwRlzSRYzKcnIBD0", "categoryID": 14, "tags": null, "productName": "Contract v2", "productDescription": null, "creationTimestamp": "2020/05/10", "lastUpdateTimestamp": "1565681180", "productUrl": "www.example.com", "imageUrl": "https://preassets.pumapay.io/product-img/48d3e043b150c985bf9d21489dc46db4.png", "verified": false, "usdTotalEarnings": "0", "eurTotalEarnings": "0", "jpyTotalEarnings": "0", "gbpTotalEarnings": "0", "activeCustomers": 0, "numOfBilling": 0, "enabled": true, "totalEarnings": 0, "status": "inactive" }],
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
    }
  }))
  ;