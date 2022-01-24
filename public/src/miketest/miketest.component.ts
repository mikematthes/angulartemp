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
    title: string;
    @Input() theval;
    constructor(){
        console.log('miketest 2');
        this.title = 'This is the miketest component';
    }
}
