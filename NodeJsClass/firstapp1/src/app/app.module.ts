import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServiceBoxComponent } from './service-box/service-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceBoxComponent
  ],//apecifies includes all the  components ,pipes and directories are part of the module
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//services will specified here
  bootstrap: [AppComponent]//root components
})
export class AppModule { }
