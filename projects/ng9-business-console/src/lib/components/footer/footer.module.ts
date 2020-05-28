import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { FooterService } from '../../services/footer/footer.service';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FooterComponent],
  providers: [FooterService],
})
export class FooterModule {}
