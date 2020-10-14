import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {ProductsListPageComponent} from './products-list-page.component';

const routes = [
  {
    path: '',
    component: ProductsListPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductListPageRoutingModule {
}
