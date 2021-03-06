import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';
const page1Config = {
  emptyLabel: 'data',
  isEmpty: cqModel =>
  !cqModel || !cqModel.data || cqModel.data.length < 1
  };
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  @Input()
  data: object;
  constructor() { }

  ngOnInit(): void {
  }

}


MapTo('bech-site-prueba-remoto/components/page1')(Page1Component,page1Config);
