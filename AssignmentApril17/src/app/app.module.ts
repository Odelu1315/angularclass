import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './second/home/home.component';
import { FormComponent } from './second/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
