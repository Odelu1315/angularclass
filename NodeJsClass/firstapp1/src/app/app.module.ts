import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServiceBoxComponent } from './service-box/service-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceBoxComponent
  ],// specifies or includes all the components.pipes and directives which
  //are part of the module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],//services will be specified here
  bootstrap: [AppComponent] //root components
})
export class AppModule { }