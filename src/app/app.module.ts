import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Module } from './page1/page1.module';
import { Page2Module } from './page2/page2.module';
import {  SpaAngularEditableComponentsModule } from '@adobe/aem-angular-editable-components';

import { APP_BASE_HREF } from '@angular/common';
import { ModelManagerService } from './model-manager.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SpaAngularEditableComponentsModule,
   
    BrowserTransferStateModule,
    BrowserModule,
    AppRoutingModule,
    Page1Module,
    Page2Module
  ],
  exports: [AppComponent],
  providers: [ ModelManagerService,
    { provide: APP_BASE_HREF, useValue: '/' } ],
  bootstrap: [AppComponent]
},
)
export class AppModule { 
 /**
  *
  */
 constructor() {
  
 }
}
