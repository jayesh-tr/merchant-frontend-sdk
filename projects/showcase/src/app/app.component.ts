import { Component, OnInit } from '@angular/core';
import {
  ProductService,
  Datum,
  AuthenticationService,
  User,
} from '@ng9/business-console';
import { environment } from '../environments/environment';

@Component({
  selector: 'showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public data: Array<Datum>;
  public columns: [
    'status',
    'productName',
    'totalEarnings',
    'activeCustomers',
    'numOfBilling',
    'ropstenNetworkOn',
    'creationTimestamp',
    'columnClicked'
  ];

  constructor(
    public productService: ProductService,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authenticationService
      .login(environment.username, environment.password)
      .then((response) => {
        if (response.success) {
          this.storeTokenAndStartTimer(response.data.user, response.data.token);
          this.getAllProduct();
        } else {
          console.log('User not authenticate successfully');
        }
      })
      .catch((error) => {
        return error;
      });
  }

  public storeTokenAndStartTimer(user: User, token: string) {
    localStorage.setItem('jwt_token', JSON.stringify({ token }));
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  public getAllProduct() {
    this.productService
      .getProductList(this.getBusinessID(), this.getToken())
      .subscribe((result: any) => {
        const productData = result.data;
        this.data =
          result.success && productData && productData.length > 0
            ? result.data
            : [];
        console.log('this.data', this.data);
      });
  }

  public getToken(): string {
    const jwtToken = localStorage.getItem('jwt_token');
    return jwtToken ? JSON.parse(jwtToken).token : '';
  }

  public getBusinessID(): string {
    const userDetails = localStorage.getItem('currentUser');
    return userDetails ? JSON.parse(userDetails).token : '';
  }
}
