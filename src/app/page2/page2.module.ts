import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Page2Component,
],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '',
          component: Page2Component
      }
  ])
  ]
})
export class Page2Module { }
