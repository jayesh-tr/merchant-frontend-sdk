import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public actionUrl: string;

  public constructor(private http: HttpClient) {
    this.actionUrl = `http://localhost:3000/api/v2/open-auth/login`;
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

export interface User {
  userID: string;
  username: string;
  fullName: string;
  mobileNumber: string;
  salt: string;
  hash: string;
  temporatySalt: string;
  temporaryHash: string;
  email: string;
  completedRegistration: string;
  registrationDate: number;
  groupID: string;
  lockoutCounter: number;
  louckoutYN: boolean;
  verified: boolean;
  acceptedTermsAndConditions: boolean;
  onBoardingCompleted: boolean;
  businessID: string;
}

export class HttpResponse {
  success: boolean;
  status: string;
  message: string;
  sessionID?: string;
  data?: any;
  token?: string;
  error?: string;
  user?: User;
  errcode?: string;
}
