import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductTableModule } from './components/product-table/product-table.module';
import { FooterModule } from './components/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TopNavComponent],
  imports: [MaterialModule, ProductTableModule, FooterModule, HttpClientModule],
  exports: [FooterComponent, TopNavComponent, ProductTableComponent],
})
export class Ng9BusinessConsoleModule {}
