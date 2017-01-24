import { Component, Input } from '@angular/core'
import { Array1, ClickMe0Component } from './comp0.component'
import { Array2, ClickMeComponent } from './comp1.component'
import { Array3, ClickMe2Component } from './comp2.component'
import { array1, array2, array3 } from './array'

//import { ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2';

@Component({
    selector: 'display',
    template: `
     <h1> Details</h1>
     <div *ngFor="let hero of array">     
        Name:<input id="id1" type="text" value={{hero.name}}/><br /><br />
        Email:<input type="text" value={{hero.email}} /><br /><br />
        Phone.no:<input type="number" value={{hero.phone}} /><br /><br />
    </div>
    <div *ngFor="let hero of arr2">
        Street:<input type="text" value={{hero.street}} /><br /><br />
        City:<input type="text" value={{hero.city}}/><br /><br />
        Country:<input type="text" value={{hero.country}}/><br /><br />
        Pincode:<input type="number" value={{hero.pin}}/><br /><br />
    </div>
    <div *ngFor="let hero of arr3">
        marrital status:<input type="text" value={{hero.marry}} /><br /><br />
        spouse:<input type="text" value={{hero.spouse}}/><br /><br />
        kids:<input type="number" value={{hero.kids}}/><br /><br />
    </div>

<button type="button" (click)="id1.focus">Edit</button>
<button type="button" (click)="clickme()">Save</button>
   
    `
})
export class ClickMe3Component {
    text:{};
    clickMessage:number = 0;
        array = array1;
        arr2= array2;
        arr3= array3;

    //fo()
    //{
     //   id1.focus();
    //}
    clickme() {
        alert("Your details are successfully saved. Thanks for registering:)");
    }
}