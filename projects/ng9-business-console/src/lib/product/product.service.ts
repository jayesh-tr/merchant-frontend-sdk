import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProductList() {
    // tslint:disable:max-line-length
    const data: Datum[] = [
      {
        productID: 'cBvn45paZ7s63nK89CerAKzRfTz5A5Po',
        businessID: 'y2beEPTM49El0wXfAwRlzSRYzKcnIBD0',
        categoryID: 5,
        tags: null,
        productName: 'The laughing man',
        productDescription: null,
        creationTimestamp: '2020/05/01',
        lastUpdateTimestamp: '1562227047',
        productUrl: 'www.example.com',
        imageUrl:
          'https://preassets.pumapay.io/product-img/5722eeb527790c397846216f2ab605e1.png',
        verified: false,
        usdTotalEarnings: '0',
        eurTotalEarnings: '0',
        jpyTotalEarnings: '0',
        gbpTotalEarnings: '0',
        activeCustomers: 0,
        numOfBilling: 15,
        enabled: true,
        totalEarnings: 0,
        status: 'active',
      },
      {
        productID: 'Ot6gksy3FRuwnDmJzFyxFWZbpl8OHlsh',
        businessID: 'y2beEPTM49El0wXfAwRlzSRYzKcnIBD0',
        categoryID: 1,
        tags: null,
        productName: 'fSingle Payments',
        productDescription: null,
        creationTimestamp: '2020/05/02',
        lastUpdateTimestamp: '1561560334',
        productUrl: 'www.example.com',
        imageUrl:
          'https://preassets.pumapay.io/product-img/acdda1217729a6ad377bf9eb912163f0.png',
        verified: false,
        usdTotalEarnings: '0',
        eurTotalEarnings: '0',
        jpyTotalEarnings: '0',
        gbpTotalEarnings: '0',
        activeCustomers: 0,
        numOfBilling: 6,
        enabled: true,
        totalEarnings: 0,
        status: 'active',
      },
      {
        productID: 'bW6b1ouyIxlIoiRC5DSB6l869AN4DHZY',
        businessID: 'y2beEPTM49El0wXfAwRlzSRYzKcnIBD0',
        categoryID: 2,
        tags: null,
        productName: 'Test',
        productDescription: null,
        creationTimestamp: '2020/05/03',
        lastUpdateTimestamp: '1563867777',
        productUrl: 'www.example.com',
        imageUrl:
          'https://preassets.pumapay.io/product-img/56418aa6cc913e760ae20cc94e6d4ddc.png',
        verified: false,
        usdTotalEarnings: '0',
        eurTotalEarnings: '0',
        jpyTotalEarnings: '0',
        gbpTotalEarnings: '0',
        activeCustomers: 0,
        numOfBilling: 1,
        enabled: true,
        totalEarnings: 0,
        status: 'active',
      },
      {
        productID: 'FD26GBeFsQEusFGu4wRIDzVu69H11ndA',
        businessID: 'y2beEPTM49El0wXfAwRlzSRYzKcnIBD0',
        categoryID: 12,
        tags: null,
        productName: 'Kemix',
        productDescription: null,
        creationTimestamp: '2020/05/04',
        lastUpdateTimestamp: '1564384127',
        productUrl: 'www.example.com',
        imageUrl:
          'https://preassets.pumapay.io/product-img/68fbfa416c6a277121bb2d57fbe9734d.png',
        verified: false,
        usdTotalEarnings: '0',
        eurTotalEarnings: '0',
        jpyTotalEarnings: '0',
        gbpTotalEarnings: '0',
        activeCustomers: 0,
        numOfBilling: 0,
        enabled: true,
        totalEarnings: 0,
        status: 'inactive',
      },
      {
        productID: 'of2NVN70OcAwJFX4VSBX1B5GhI2AEdKT',
        businessID: 'y2beEPTM49El0wXfAwRlzSRYzKcnIBD0',
        categoryID: 1,
        tags: null,
        productName: 'NonKemix',
        productDescription: null,
        creationTimestamp: '2020/05/05',
        lastUpdateTimestamp: '1564384127',
        productUrl: 'www.example.com',
        imageUrl:
          'https://preassets.pumapay.io/product-img/78167f7a55843d47ba688eea95048258.png',
        verified: false,
        usdTotalEarnings: '0',
        eurTotalEarnings: '0',
        jpyTotalEarnings: '0',
        gbpTotalEarnings: '0',
        activeCustomers: 0,
        numOfBilling: 0,
        enabled: true,
        totalEarnings: 0,
        status: 'inactive',
      },
      {
        productID: 'JxW5JPWUtmRonn1EHQ8NUvDoiTy0nnc4',
        businessID: 'y2beEPTM49El0wXfAwRlzSRYzKcnIBD0',
        categoryID: 14,
        tags: null,
        productName: 'NewSeptember Test',
        productDescription: null,
        creationTimestamp: '2020/05/06',
        lastUpdateTimestamp: '1568302016',
        productUrl: 'www.example.com',
        imageUrl:
          'https://preassets.pumapay.io/product-img/b45495d201967f208177d4920a396629.png',
        verified: false,
        usdTotalEarnings: '0',
        eurTotalEarnings: '0',
        jpyTotalEarnings: '0',
        gbpTotalEarnings: '0',
        activeCustomers: 0,
        numOfBilling: 1,
        enabled: true,
        totalEarnings: 0,
        status: 'active',
      },
      {
        productID: 'RkmxawQXiAHbsP44PNqxHCu6qeC18ibs',
        businessID: 'y2beEPTM49El0wXfAwRlzSRYzKcnIBD0',
        categoryID: 14,
        tags: null,
        productName: 'NoKemix',
        productDescription: null,
        creationTimestamp: '2020/05/07',
        lastUpdateTimestamp: '1568040314',
        productUrl: 'www.example.com',
        imageUrl:
          'https://preassets.pumapay.io/product-img/f4c0171016876b585748b34ad7943921.png',
        verified: false,
        usdTotalEarnings: '0',
        eurTotalEarnings: '0',
        jpyTotalEarnings: '0',
        gbpTotalEarnings: '0',
        activeCustomers: 0,
        numOfBilling: 0,
        enabled: true,
        totalEarnings: 0,
        status: 'inactive',
      },
      {
        productID: 'pF3tNtEdnR7oKB3L4tkbqSHyM3OSabfB',
        businessID: 'y2beEPTM49El0wXfAwRlzSRYzKcnIBD0',
        categoryID: 14,
        tags: null,
        productName: 'ds',
        productDescription: null,
        creationTimestamp: '2020/05/08',
        lastUpdateTimestamp: '1566486299',
        productUrl: 'www.example.com',
        imageUrl:
          'https://preassets.pumapay.io/product-img/3baeee3598f0dd40aecea034d469799f.png',
        verified: false,
        usdTotalEarnings: '0',
        eurTotalEarnings: '0',
        jpyTotalEarnings: '0',
        gbpTotalEarnings: '0',
        activeCustomers: 0,
        numOfBilling: 2,
        enabled: true,
        totalEarnings: 0,
        status: 'active',
      },
      {
        productID: '9Wl5Z70EFHMeEhBIOTUlh13sE2BztYav',
        businessID: 'y2beEPTM49El0wXfAwRlzSRYzKcnIBD0',
        categoryID: 14,
        tags: null,
        productName: 'Contract v2.1',
        productDescription: null,
        creationTimestamp: '2020/05/09',
        lastUpdateTimestamp: '1565681180',
        productUrl: 'www.example.com',
        imageUrl:
          'https://preassets.pumapay.io/product-img/52a29a4b736db94deaa2ad4523bfb02a.png',
        verified: false,
        usdTotalEarnings: '0',
        eurTotalEarnings: '0',
        jpyTotalEarnings: '0',
        gbpTotalEarnings: '0',
        activeCustomers: 0,
        numOfBilling: 0,
        enabled: true,
        totalEarnings: 0,
        status: 'inactive',
      },
      {
        productID: 'IPDLyR3a6MW7Frtr0jDBZDWIPtFp716g',
        businessID: 'y2beEPTM49El0wXfAwRlzSRYzKcnIBD0',
        categoryID: 14,
        tags: null,
        productName: 'Contract v2',
        productDescription: null,
        creationTimestamp: '2020/05/10',
        lastUpdateTimestamp: '1565681180',
        productUrl: 'www.example.com',
        imageUrl:
          'https://preassets.pumapay.io/product-img/48d3e043b150c985bf9d21489dc46db4.png',
        verified: false,
        usdTotalEarnings: '0',
        eurTotalEarnings: '0',
        jpyTotalEarnings: '0',
        gbpTotalEarnings: '0',
        activeCustomers: 0,
        numOfBilling: 0,
        enabled: true,
        totalEarnings: 0,
        status: 'inactive',
      },
    ];
    // tslint:enable:max-line-length
    return data;
  }
}

export interface Datum {
  productID: string;
  businessID: string;
  categoryID?: number;
  tags?: any;
  productName: string;
  productDescription?: any;
  creationTimestamp: string;
  lastUpdateTimestamp: string;
  productUrl: string;
  imageUrl: string;
  verified: boolean;
  usdTotalEarnings: string;
  eurTotalEarnings: string;
  jpyTotalEarnings: string;
  gbpTotalEarnings: string;
  activeCustomers: number;
  numOfBilling: number;
  enabled: boolean;
  totalEarnings: number;
  status: string;
}
