import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ProductService } from '../../services/product/product.service';
import { ProductTableComponent } from './product-table.component';

@NgModule({
  declarations: [ProductTableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ProductTableComponent],
  providers: [ProductService],
})
export class ProductTableModule {}
