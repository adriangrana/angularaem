import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Module } from './page1/page1.module';
import { Page2Module } from './page2/page2.module';
import {ModelManager}  from '@adobe/aem-spa-page-model-manager';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AEMPageComponent, SpaAngularEditableComponentsModule } from '@adobe/aem-angular-editable-components';
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
    Page2Module,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [AppComponent],
  providers: [],
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
