import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Arm3Component } from './junctions/arm-3/arm-3.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Arm3Component,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
