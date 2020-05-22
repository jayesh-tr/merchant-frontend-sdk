import { Component } from '@angular/core';
import { ProductService, FooterService } from '@ng9/business-console';

@Component({
  selector: 'showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: any;
  constructor(
    public productService: ProductService,
    public footerService: FooterService
  ) { }
}
