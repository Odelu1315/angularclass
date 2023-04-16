import { Component } from '@angular/core';
import { datafields } from './appdata/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'classassignment';
  services:string[] =datafields.titlelist;
  descriptions:string[]=
  [
    datafields.SEO,
    datafields.BRANDING,
    datafields.LOGO
  ];
  dataitems=datafields;
}
