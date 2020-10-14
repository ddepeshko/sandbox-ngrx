import {Injectable} from '@angular/core';
import {IProductsState} from "@models/product/products-state";
import {select, Store} from "@ngrx/store";
import {filter} from "rxjs/operators";

import {PRODUCTS_LS_KEY} from "@constants/constants";
import {currentProduct, selectProductsListItems} from "@app/store/selectors/product.selectors";
import {LoadAppProductsState} from "@app/store/actions/products.action";

@Injectable({
  providedIn: 'root'
})
export class DataSyncStorageService {
  private isInit = false;

  constructor(private store$: Store<IProductsState>) {
  }

  initStoreState() {
    if (this.isInit) {
      return;
    }

    this.loadFromStorage();
    this.store$.pipe(select(selectProductsListItems), filter((state) => !!state)).subscribe((data) => {
      localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify({productsList: data}));
    });
    this.store$.pipe(select(currentProduct), filter((state) => !!state)).subscribe((data) => {
      localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify({currentProduct: data}));
    });
    this.isInit = true;
  }


  private loadFromStorage() {
    const storageProductsState = localStorage.getItem(PRODUCTS_LS_KEY);
    if (storageProductsState) {
      this.store$.dispatch(new LoadAppProductsState(JSON.parse(storageProductsState)));
    }
  }
}
