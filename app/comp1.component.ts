import { Component } from '@angular/core';
import { ClickMe2Component } from './comp2.component'
import { array2 } from './array'

export class Array2 {
  street: string;
  city: string;
  country:string;
  pin: number;
  constructor(street:string, city:string, country: string, pin:number){
    this.street = street;
    this.city = city;
    this.country = country;
    this.pin = pin;
  }
}
@Component({
    selector: 'click-me1',
    template: `

    <h1>Address Details</h1>
 Street:<input placeholder="VOC street" #street [(ngModel)]="tstreet" /><br /><br />
 City:<input placeholder="Coimbatore" #city [(ngModel)]="tcity"/><br /><br />
 Country:<input placeholder="India" #country [(ngModel)]="tcountry"/><br /><br />
 Pincode:<input placeholder="654321" #pin [(ngModel)]="tpin"/><br /><br />
 <button type="button" (click)="add(street.value, city.value, country.value, pin.value)">save</button>
 <a routerLink="/family" routerLinkActive="active"><button>Next</button></a>

  <router-outlet></router-outlet>
 
  `
})
export class ClickMeComponent {
  tstreet: string;
  tcity: string;
  tcountry: string;
  tpin: number;
  add(street:string, city:string, country:string, pin:number): void {
     array2.push( new Array2(street,city,country,pin));
     console.log(array2);
  }

}