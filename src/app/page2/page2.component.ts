import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';
const page2Config = {
  emptyLabel: 'Please author at leaast on item',
  isEmpty: cqModel =>
  !cqModel || !cqModel.data || cqModel.data.length < 1
  };
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  @Input()
  data: object;
  constructor() { }
  ngOnInit(): void {
  }
}

MapTo('bech-site-prueba-remoto/components/page2')(Page2Component,page2Config);
