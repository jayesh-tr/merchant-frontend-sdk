import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpResponse } from '../../models/authentication-model';
import { constant } from '../../utils/config';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public actionUrl: string;

  public constructor(private http: HttpClient) {
    this.actionUrl = `${constant.socketUrl}${constant.openApiPrefix}login`;
  }

  public userAuthentication(email: string, password: string): Promise<any> {
    return this.http
      .post<any>(this.actionUrl, { email, password })
      .pipe(
        map((response: HttpResponse) => {
          return response;
        })
      )
      .toPromise();
  }

  public getAuthHeaders(token: string): HttpHeaders {
    let headers = new HttpHeaders();

    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('api-request-source', 'pma-biz-console');
    headers = headers.append('x-access-token', token);
    headers = headers.append('Authorization', `Bearer ${token}`);

    return headers;
  }
}
