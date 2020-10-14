import {IProductsState} from "@models/product/products-state";
import {createFeatureSelector, createSelector} from "@ngrx/store";

import {PRODUCTS_REDUCER_KEY} from "@constants/constants";

export const selectProductList = createFeatureSelector(PRODUCTS_REDUCER_KEY);

export const selectProductsListItems = createSelector(
  selectProductList,
  (state: IProductsState) => state.productsList
);

export const currentProduct = createSelector(
  selectProductList,
  (state: IProductsState) => state.currentProduct
);
