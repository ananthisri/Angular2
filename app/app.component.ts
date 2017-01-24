import { Component } from '@angular/core';
import { ClickMe0Component } from './comp0.component'


import {Hero} from './hero';
@Component({
  selector: 'my-app',
  template: `
  
 
 <a routerLink="/personal" routerLinkActive="active">REGISTER</a>

  <router-outlet></router-outlet>


   `
})

export class AppComponent  { 
  id: number;
  name: string;
 }
 
 