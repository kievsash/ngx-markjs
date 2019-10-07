import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxMarkjsModule} from 'ngx-markjs';
// import {NgxMarkjsModule} from 'ngx-markjs/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMarkjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
