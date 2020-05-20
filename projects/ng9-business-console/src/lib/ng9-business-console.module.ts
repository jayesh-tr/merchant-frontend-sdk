import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    FooterComponent,
    TopNavComponent,
    ProductComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    FooterComponent,
    TopNavComponent,
    ProductComponent
  ]
})
export class Ng9BusinessConsoleModule { }
