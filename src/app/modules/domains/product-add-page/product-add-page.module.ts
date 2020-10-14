import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductAddPageComponent} from './product-add-page.component';
import {ProductAddPageViewComponent} from './components/product-add-page-view/product-add-page-view.component';
import {ProductAddPageRoutingModule} from './product-add-page-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ProductAddPageComponent, ProductAddPageViewComponent],
  imports: [
    CommonModule,
    ProductAddPageRoutingModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
})
export class ProductAddPageModule {
}
