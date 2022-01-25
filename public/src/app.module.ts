import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import moduleName from './app.module.ajs';
//import { HomeComponent } from './home/home.component';
import { MikeTestComponent } from './miketest/miketest.component';
import { MikeTest2Component } from './miketest2/miketest2.component';
import { MikeTest3Component } from './miketest3/miketest3.component';
import { MikeTest4Component } from './miketest4/miketest4.component';
import { MikeTesterComponent } from './miketester/miketester.component';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        //HomeComponent,
        MikeTestComponent,
        MikeTest2Component,
        MikeTest3Component,
        MikeTesterComponent,
        MikeTest4Component
    ],
    entryComponents: [
        //HomeComponent,
        MikeTestComponent,
        MikeTest2Component,
        MikeTest3Component,
        MikeTesterComponent,
        MikeTest4Component
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule){
    }

    ngDoBootstrap(){
        this.upgrade.bootstrap(document.documentElement, [moduleName], {strictDi: true});
    } 
}
