import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//library
import { Ng9BusinessConsoleModule } from '@ng9/business-console';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng9BusinessConsoleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
