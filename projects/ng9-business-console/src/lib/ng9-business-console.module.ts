import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent,
    TopNavComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    FooterComponent,
    TopNavComponent
  ]
})
export class Ng9BusinessConsoleModule { }
