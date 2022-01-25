import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;

const template = require('./miketest3.html');

console.log('miketest3 1');
@Component({
    selector: 'miketest3',
    template: template,
    //templateUrl: './miketest.html'
})
export class MikeTest3Component {
    @Input() theval;
    @Input() currenttime;
    currenttime2: string;

    constructor(){
        console.log('miketest3 component');
        this.currenttime2 = new Date().toString();
    }
}
