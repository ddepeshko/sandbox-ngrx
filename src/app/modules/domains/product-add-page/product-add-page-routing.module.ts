import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductAddPageComponent} from './product-add-page.component';

const routes = [
  {
    path: '',
    component: ProductAddPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductAddPageRoutingModule {
}
