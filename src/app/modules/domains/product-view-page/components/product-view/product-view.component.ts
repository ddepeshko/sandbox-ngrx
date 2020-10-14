import {Component, Input, OnInit} from '@angular/core';

import {IProduct} from '@models/product/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Input() productData: IProduct;

  constructor() {
  }

  ngOnInit(): void {
  }

}
