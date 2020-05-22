import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    MaterialModule,
    ProductModule,
    FooterModule
  ],
  exports: [
    FooterComponent,
    TopNavComponent,
    ProductComponent
  ]
})
export class Ng9BusinessConsoleModule { }
