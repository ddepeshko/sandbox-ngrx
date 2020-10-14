import {Component, OnInit} from '@angular/core';
import {IProduct} from '@models/product/product';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ActivatedRoute} from '@angular/router';

import {ProductService} from '@services/product.service';
import {IProductData} from '@models/product/product-data';
import {IProductsState} from "@models/product/products-state";
import {currentProduct} from "@app/store/selectors/product.selectors";

@Component({
  selector: 'app-product-add-page',
  templateUrl: './product-add-page.component.html',
  styleUrls: ['./product-add-page.component.scss']
})
export class ProductAddPageComponent implements OnInit, IProductData {
  productId: number;
  productData$: Observable<IProduct>;

  constructor(private route: ActivatedRoute, private productService: ProductService, private store$: Store<IProductsState>) {
  }


  ngOnInit(): void {
    this.getProductIdFromRoute();
    this.getProductDataById();
    this.productData$ = this.store$.select(currentProduct);
  }

  getProductIdFromRoute() {
    if (this.route?.snapshot?.params?.id) {
      this.productId = this.route?.snapshot?.params?.id;
    }
  }

  getProductDataById() {
    this.productService.getProductData(this.productId);
  }
}
