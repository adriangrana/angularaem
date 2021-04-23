import { Component } from '@angular/core';
import { ModelManager } from '@adobe/aem-spa-page-model-manager';
import { Constants } from "@adobe/aem-angular-editable-components";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAemPrueba';
  items;
  itemsOrder;
  path;
  /**
   *
   */
  constructor() {
    ModelManager.initialize().then(this.updateData.bind(this));
  }
  private updateData(model) {
    this.path = model[Constants.PATH_PROP];
    this.items = model[Constants.ITEMS_PROP];
    this.itemsOrder = model[Constants.ITEMS_ORDER_PROP];
    console.log(this.path, this.items, this.itemsOrder);
    
  
  }
}
