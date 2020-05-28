import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { ProductModule } from './components/product/product.module';
import { FooterModule } from './components/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TopNavComponent],
  imports: [MaterialModule, ProductModule, FooterModule, HttpClientModule],
  exports: [FooterComponent, TopNavComponent, ProductComponent],
})
export class Ng9BusinessConsoleModule {}
