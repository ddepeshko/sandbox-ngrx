import {Component, OnInit} from '@angular/core';
import {IProduct} from '@models/product/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '@services/product.service';
import {IProductData} from '@models/product/product-data';

@Component({
  selector: 'app-product-add-page',
  templateUrl: './product-add-page.component.html',
  styleUrls: ['./product-add-page.component.scss']
})
export class ProductAddPageComponent implements OnInit, IProductData {
  productId: number;
  productData: IProduct;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProductIdFromRoute();
    this.getProductDataById();
  }

  getProductIdFromRoute() {
    if (this.route?.snapshot?.params?.id) {
      this.productId = this.route?.snapshot?.params?.id;
    }
  }

  getProductDataById() {
    this.productService.getProductData(this.productId).subscribe((data) => {
      this.productData = data;
    });
  }
}
