import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent }  from './app.component';
import { ClickMe0Component }  from './comp0.component';
import { ClickMeComponent } from './comp1.component';
import { ClickMe2Component } from './comp2.component';
import { ClickMe3Component } from './final.component';
import { WifeComponent } from './wifekids.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'personal',  component: ClickMe0Component },
  { path: 'address', component: ClickMeComponent },
  { path: 'family', component: ClickMe2Component },
  { path: 'wife', component: WifeComponent },
  { path: 'final', component: ClickMe3Component }
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
   RouterModule.forRoot([

      {
    path: 'login',
    component: AppComponent
  },
    {
    path: 'personal',
    component: ClickMe0Component
  },
    
  {
    path: 'address',
    component: ClickMeComponent
  },
  {
    path: 'family',
    component: ClickMe2Component
  },
  {
    path: 'wife',
    component: WifeComponent
  },
   {
    path: 'final',
    component: ClickMe3Component
  }
])
],
  declarations: [ AppComponent, ClickMe0Component, ClickMeComponent, ClickMe2Component, ClickMe3Component, WifeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
