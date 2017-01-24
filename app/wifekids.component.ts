import { Component } from '@angular/core';
import { ClickMe3Component } from './final.component'
import { array3 } from './array'

export class Array3 {
  marry: string;
  unmarry: string;
  spouse: string;
  kids: number;

  constructor(marry:string, unmarry:string, spouse:string, kids:number){
    
    this.marry = marry;
    this.unmarry = unmarry;
    this.spouse = spouse;
    this.kids = kids;
  }
}

@Component({
  selector: 'wifekid',
  template: `
  Name of spouse:<input placeholder="Ash/Aanu" #spouse [(ngModel)]="tspouse"/><br /><br />
 No of Kids:<input placeholder="2" #kids [(ngModel)]="tkids"/><br /><br />
 <button type="button" (click)="add(marry.value, unmarry.value, spouse.value, kids.value)">save</button>
 
 
 
 <a routerLink="/final" routerLinkActive="active">REGISTER</a>

  <router-outlet></router-outlet>


   `
})
export class WifeComponent {
  tmarried: string;
  tunmarried: string;
  tspouse: string;
  tkids: number;
  c:number=0;
   
  count():void {
     this.c = 1;
    }

  add(marry:string, unmarry:string, spouse:string, kids:number): void {
     if(this.c == 1)
     {
       unmarry="married";
     array3.push( new Array3(marry,unmarry,spouse,kids));
     
     console.log(marry);
     console.log(unmarry);
     console.log(spouse);
     console.log(kids);
     }
     else{
       marry="unmarried";
       spouse="Nil";
       kids=0;
     
       array3.push( new Array3(marry,unmarry,spouse,kids));
        console.log(marry);
        console.log(unmarry);
        console.log(spouse);
        console.log(kids);
     }
  }
}


 