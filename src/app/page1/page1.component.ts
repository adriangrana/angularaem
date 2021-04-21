import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  @Input()
  data: any;
  constructor() { }

  ngOnInit(): void {
  }

}

MapTo('bancoestado/components/cta-list')(Page1Component);
