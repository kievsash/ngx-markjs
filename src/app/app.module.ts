import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxMarkjsModule} from 'ngx-markjs';

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
