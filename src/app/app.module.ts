import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Body1Component } from './body1/body1.component';
import { Body2Component } from './body2/body2.component';
import { Body3Component } from './body3/body3.component';

@NgModule({
  declarations: [
    AppComponent,
    Body1Component,
    Body2Component,
    Body3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
