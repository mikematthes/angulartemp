import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;

const template = require('./miketest4.html');

console.log('miketest4 1');
@Component({
    selector: 'miketest4',
    template: template,
    //templateUrl: './miketest.html'
})
export class MikeTest4Component {
    @Input() theval;
    @Input() currenttime;
    currenttime2: string;

    constructor(){
        console.log('miketest4 component');
        this.currenttime2 = new Date().toString();
    }
}
