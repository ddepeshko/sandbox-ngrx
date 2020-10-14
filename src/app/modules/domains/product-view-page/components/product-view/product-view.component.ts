import {Component, OnInit} from '@angular/core';

import {IProduct} from '@models/product/product';
import {currentProduct} from "@app/store/selectors/product.selectors";
import {Observable} from "rxjs";
import {IProductsState} from "@models/product/products-state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  productData$: Observable<IProduct>;

  constructor(private store$: Store<IProductsState>) {
  }

  ngOnInit(): void {
    this.productData$ = this.store$.select(currentProduct);
  }

}
