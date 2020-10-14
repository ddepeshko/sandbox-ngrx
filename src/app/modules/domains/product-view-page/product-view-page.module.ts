import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductViewPageComponent} from './product-view-page.component';
import {ProductViewComponent} from './components/product-view/product-view.component';
import {ProductViewPageRoutingModule} from './product-view-page-routing.module';
import {ProductsListPageModule} from '@app/modules/domains/products-list-page/products-list-page.module';


@NgModule({
  declarations: [ProductViewPageComponent, ProductViewComponent],
  imports: [
    CommonModule,
    ProductViewPageRoutingModule,
    ProductsListPageModule
  ]
})
export class ProductViewPageModule {
}
