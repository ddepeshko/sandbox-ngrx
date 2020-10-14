import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IProduct} from '@models/product/product';
import {api} from '@constants/api';
import {Store} from "@ngrx/store";
import {IProductsState} from "@models/product/products-state";
import {AddProduct, DeleteProduct, LoadProductList, UpdateProduct} from "../store/actions/products.action";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private store$: Store<IProductsState>, private router: Router, private modal: NgbModal) {
  }

  createProductItem(data: IProduct): void {
    this.http.post<IProduct>(`${api.products.baseUrl}${api.products.productAddEdit}`, data).toPromise().then((data) => {
      this.store$.dispatch(new AddProduct(data));
      this.router.navigate(['/product-list']);
    });
  }

  editProductItem(data: IProduct): void {
    this.http.put<IProduct>(`${api.products.baseUrl}${api.products.productAddEdit}`, data).toPromise().then(data => {
      this.store$.dispatch(new UpdateProduct(data));
      this.router.navigate(['/product-list']);
    });
  }

  deleteProductItem(id: number): void {
    this.http.delete<IProduct>(`${api.products.baseUrl}${api.products.productActions}`.replace('{id}', String(id))).toPromise().then(data => {
      this.store$.dispatch(new DeleteProduct(data));
      this.modal.dismissAll();
    });
  }

  getProductsList(): void {
    this.productListResponse().toPromise().then((data) => {
      this.store$.dispatch(new LoadProductList(data))
    });
  }

  productListResponse(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(`${api.products.baseUrl}${api.products.productList}`);
  }

  getProductData(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${api.products.baseUrl}${api.products.productActions}`.replace('{id}', String(id)));
  }
}
