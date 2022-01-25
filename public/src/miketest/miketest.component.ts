import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;

const template = require('./miketest.html');

console.log('miketest 1');
@Component({
    selector: 'miketest',
    template: template,
    //templateUrl: './miketest.html'
})
export class MikeTestComponent {
    @Input() theval;
    @Input() currenttime;
    currenttime2: string;

    constructor(){
        console.log('miketest component');
        this.currenttime2 = new Date().toString();
    }
}
