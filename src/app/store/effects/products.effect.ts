import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {map, switchMap} from "rxjs/operators";

import {LoadProductList, PRODUCT_ACTIONS} from "@app/store/actions/products.action";
import {ProductService} from "@services/product.service";
import {IProduct} from "@models/product/product";

@Injectable()
export class ProductsEffect {
  @Effect()
  $onDeleteProduct = this.actions$.pipe(ofType(PRODUCT_ACTIONS.DELETE_PRODUCT), switchMap(() => {
    return this.productService.productListResponse().pipe(map((data: IProduct[]) => {
      return new LoadProductList(data);
    }))
  }))

  constructor(private actions$: Actions, private productService: ProductService) {
  }
}
