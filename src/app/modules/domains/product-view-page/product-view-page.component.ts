import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '@services/product.service';
import {IProductData} from '@models/product/product-data';

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent implements OnInit, IProductData {
  productId: number;

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
    this.productService.getProductData(this.productId)
  }
}
