import { Component } from '@angular/core';

@Component({
    selector: 'click-me4',
    template: `
    <h1>{{clickMessage}}</h1>
    `
})
export class ClickMe4Component {
    clickMessage:number = 0;

    clickme() {
        this.clickMessage =1;
    }

}

