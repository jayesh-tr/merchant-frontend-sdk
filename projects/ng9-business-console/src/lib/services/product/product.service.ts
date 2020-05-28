import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpResponse } from '../../models/authentication-model';
import { constant } from '../../utils/server-config';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private actionUrl: string;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.actionUrl = `${constant.socketUrl}${constant.apiPrefix}`;
  }

  public getProductList(businessID: string, token: string) {
    const apiUrl = `${this.actionUrl}products/all/${businessID}/1`;
    return this.http
      .get(apiUrl, {
        headers: this.authenticationService.getAuthHeaders(token),
      })
      .pipe(
        map((response: HttpResponse) => {
          return response;
        })
      );
  }
}
