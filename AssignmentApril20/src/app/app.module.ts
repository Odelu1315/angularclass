import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './pages/products/products.component';
import { PagesComponent } from './pages/pages.component';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { FormsModule } from '@angular/forms';
import { PricePipe } from './pipes/price.pipe';
import { SliderPipe } from './pipes/slider.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PagesComponent,
    TypefilterPipe,
    PricePipe,
    SliderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
