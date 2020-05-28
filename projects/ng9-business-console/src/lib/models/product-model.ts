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
