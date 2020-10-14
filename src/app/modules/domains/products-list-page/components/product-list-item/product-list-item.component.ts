import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '@models/product/product';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteAcceptanceModalComponent} from '@app/modules/shared/modals/delete-acceptance-modal/delete-acceptance-modal.component';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() itemData: IProduct;

  constructor(private router: Router, private modal: NgbModal) {
  }

  ngOnInit(): void {
  }

  openAcceptanceModal(id: number) {
    const modalRef = this.modal.open(DeleteAcceptanceModalComponent, {windowClass: 'custom-modal'});
    modalRef.componentInstance.id = id;
  }

  editProduct(id: number) {
    this.router.navigate(['/product-list/edit', id]);
  }
}
