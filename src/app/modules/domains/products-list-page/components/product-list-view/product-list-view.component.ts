import {Component, OnInit} from '@angular/core';
import {IProduct} from '@models/product/product';
import {Observable} from "rxjs";

import {IProductsState} from "@models/product/products-state";
import {Store} from "@ngrx/store";
import {selectProductsListItems} from "@app/store/selectors/product.selectors";


@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  products$: Observable<IProduct[]>

  constructor(private store$: Store<IProductsState>) {
  }

  ngOnInit() {
    this.products$ = this.store$.select(selectProductsListItems);
  }


  updateProductList() {
    // this.getProductList();
  }
}
