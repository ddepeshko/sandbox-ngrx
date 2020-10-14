import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {ProductViewPageComponent} from './product-view-page.component';

const routes = [
  {
    path: '',
    component: ProductViewPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductViewPageRoutingModule {
}
