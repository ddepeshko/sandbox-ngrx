import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IProduct} from '@models/product/product';
import {PRODUCT_LIST_MOCK} from '@constants/products-list-mock';
import {api} from '@constants/api';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  listOfProducts: Array<IProduct> = PRODUCT_LIST_MOCK;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url === `${api.products.baseUrl}${api.products.productList}`) {
      console.log('Loaded from JSON: ' + req.url);
      return of(new HttpResponse({status: 200, body: this.listOfProducts}));

    } else if (req.method === 'POST' && req.url === `${api.products.baseUrl}${api.products.productAddEdit}`) {
      console.log('Loaded from JSON: ' + req.url);
      this.listOfProducts = [...this.listOfProducts, req.body];
      return of(new HttpResponse({status: 200, body: this.listOfProducts}));

    } else if (req.method === 'DELETE') {
      console.log('Loaded from JSON: ' + req.url);
      let id = this.getCurrentId(req.url);
      this.listOfProducts = this.listOfProducts.filter(el => el.id !== id);
      return of(new HttpResponse({status: 200, body: this.listOfProducts}));

    } else if (req.method === 'GET' && req.url.includes('/product/')) {
      let id = this.getCurrentId(req.url);
      let product = this.listOfProducts.find(el => el.id === Number(id));
      return of(new HttpResponse({status: 200, body: product}));

    } else if (req.method === 'PUT' && req.url.includes('/product-add')) {
      this.listOfProducts = this.listOfProducts.map(el => {
        if (el.id === req.body.id) {
          el = req.body;
        }
        return el;
      });
      return of(new HttpResponse({status: 200, body: req.body}));
    }
    return next.handle(req);
  }

  getCurrentId(req) {
    let idx = req.lastIndexOf('/');
    return Number(req.slice(idx + 1));
  }
}
