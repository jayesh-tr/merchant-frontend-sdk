import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';
import { FooterModule } from './footer/footer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TopNavComponent],
  imports: [MaterialModule, ProductModule, FooterModule, HttpClientModule],
  exports: [FooterComponent, TopNavComponent, ProductComponent],
})
export class Ng9BusinessConsoleModule {}
