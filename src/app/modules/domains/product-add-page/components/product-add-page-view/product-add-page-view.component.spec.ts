import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductAddPageViewComponent} from './product-add-page-view.component';

describe('ProductAddPageViewComponent', () => {
  let component: ProductAddPageViewComponent;
  let fixture: ComponentFixture<ProductAddPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAddPageViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
