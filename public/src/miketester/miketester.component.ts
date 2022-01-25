import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;

const template = require('./miketester.html');

console.log('miketester 1');
@Component({
    selector: 'miketester',
    template: template,
    //templateUrl: './miketest.html'
})
export class MikeTesterComponent {
    @Input() theval;
    @Input() currenttime;
    currenttime2: string;

    constructor(){
        console.log('miketester component');
        this.currenttime2 = new Date().toString();
    }
}
