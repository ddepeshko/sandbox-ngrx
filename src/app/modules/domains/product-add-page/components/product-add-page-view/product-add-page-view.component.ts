import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {ProductService} from '@services/product.service';
import {IProduct} from '@models/product/product';
import {EProductStatuses} from '@constants/product-statuses';
import {Store} from "@ngrx/store";
import {IProductsState} from "@models/product/products-state";

@Component({
  selector: 'app-product-add-page-view',
  templateUrl: './product-add-page-view.component.html',
  styleUrls: ['./product-add-page-view.component.scss']
})
export class ProductAddPageViewComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  imageURL: string;
  isEditPage: boolean;
  productDataValue: IProduct;

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService, private cdr: ChangeDetectorRef, private store$: Store<IProductsState>) {
  }

  @Input() set productData(data: IProduct) {
    if (data) {
      this.isEditPage = true;
      this.productDataValue = data;
    }
  };

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.maxLength(255), Validators.minLength(4)]],
      subtitle: [null, [Validators.required, Validators.maxLength(255), Validators.minLength(4)]],
      imageFile: [null],
      image: [null, Validators.required],
      creationDate: [null, Validators.required]
    });
  }

  showPreview(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageURL = String(reader.result);
      this.form.get('image').patchValue(this.imageURL);
    });


    reader.readAsDataURL(file);
  }

  clearImage() {
    this.form.get('image').patchValue(null);
    this.imageURL = null;
  }

  submitForm() {
    if (this.form.invalid) {
      return;
    }
    const product: IProduct = {
      /** Так как бэкенд не генерит ИД делаем для мока таким образом */
      id: this.form.value.id ? this.form.value.id : Math.floor(Math.random() * 10),
      title: this.form.value.title,
      subtitle: this.form.value.subtitle,
      status: EProductStatuses.New,
      creationDate: this.form.value.creationDate,
      image: this.form.value.image
    };
    this.isEditPage ? this.editProductItem(product) : this.createProductItem(product)

  }

  createProductItem(product) {
    this.productService.createProductItem(product);
  }

  editProductItem(product) {
    this.productService.editProductItem(product);
  }

  cancel() {
    this.form.reset();
    this.router.navigate(['/product-list']);
  }

  ngAfterViewInit(): void {
    this.form.patchValue({...this.productDataValue});
    this.imageURL = this.productDataValue?.image;
    this.cdr.detectChanges();
  }

}
