import {IProduct} from "@models/product/product";

export interface IProductsState {
  currentProduct: IProduct;
  productsList: Array<IProduct>
}
