import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ProductService } from './product.service';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProductComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
