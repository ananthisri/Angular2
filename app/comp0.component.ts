import { Component } from '@angular/core';
import { ClickMeComponent } from './comp1.component'
import { array1 } from './array'
export class Array1 {
  name: string;
  email: string;
  phone: number;
  constructor(name:string, email:string, phone:number){
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

@Component({
  selector: 'click-me0',
  template: `
  <h1>Personal Details</h1>
 Name:<input type="text" placeholder="aanu" #name [(ngModel)]="tname"/><br /><br />
 Email:<input type="text" placeholder="aanu@gmail.com" #email [(ngModel)]="temail" /><br /><br />
 Phone.no:<input type="number" placeholder="98765 43210" #phone [(ngModel)]="tphone" /><br /><br />
 <button type="button" (click)="add(name.value, email.value, phone.value)">save</button>
 <a routerLink="/address" routerLinkActive="active"><button>Next</button></a>
 <router-outlet></router-outlet>

   `
   
})

export class ClickMe0Component  { 
  tname: string;
  temail: string;
  tphone: number;

  //array1: Array1[];

  //constructor(){
    //this.array1 = [];
  //}
  add(name:string, email:string, phone:number): void {
     array1.push( new Array1(name,email,phone));
     console.log(array1);
  }
 }
 