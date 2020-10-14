import {Action} from "@ngrx/store";
import {IProduct} from "@models/product/product";
import {IProductsState} from "@models/product/products-state";

export enum EState_Actions {
  SET_STATE = 'SET_STATE'
}

export enum PRODUCT_ACTIONS {
  ADD_PRODUCT = 'ADD_PRODUCT',
  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  LOAD_PRODUCT_LIST = 'LOAD_PRODUCT_LIST'
}

export class AddProduct implements Action {
  readonly type = PRODUCT_ACTIONS.ADD_PRODUCT;

  constructor(public payload: IProduct) {
  }
}

export class UpdateProduct implements Action {
  readonly type = PRODUCT_ACTIONS.UPDATE_PRODUCT;

  constructor(public payload: IProduct) {
  }
}

export class DeleteProduct implements Action {
  readonly type = PRODUCT_ACTIONS.DELETE_PRODUCT;

  constructor(public payload: IProduct) {
  }
}

export class LoadProductList implements Action {
  readonly type = PRODUCT_ACTIONS.LOAD_PRODUCT_LIST;

  constructor(public payload: IProduct[]) {
  }
}

export class LoadAppProductsState implements Action {
  readonly type = EState_Actions.SET_STATE

  constructor(public payload: IProductsState) {
  }
}


export type ProductActions = AddProduct | UpdateProduct | DeleteProduct | LoadProductList | LoadAppProductsState;
