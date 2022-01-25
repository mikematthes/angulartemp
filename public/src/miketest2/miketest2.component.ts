import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;

const template = require('./miketest2.html');

console.log('miketest2 #1');
@Component({
    selector: 'miketest2',
    template: template,
    //templateUrl: './miketest.html'
})
export class MikeTest2Component {
    @Input() theval;
    @Input() currenttime = "unset22";
    constructor(){
        console.log('miketest2 #2');
    }
}
