import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private actionUrl: string;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.actionUrl = `http://localhost:3000/api/v2/console-auth/products`;
  }

  public getProductList(businessID: string, token: string) {
    return this.http
      .get(`${this.actionUrl}/all/${businessID}/1`, {
        headers: this.authenticationService.getAuthHeaders(token),
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
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
