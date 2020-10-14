import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '@services/product.service';

@Component({
  selector: 'app-delete-acceptance-modal',
  templateUrl: './delete-acceptance-modal.component.html',
  styleUrls: ['./delete-acceptance-modal.component.scss']
})
export class DeleteAcceptanceModalComponent implements OnInit {
  @Input() id: number;

  constructor(private modal: NgbModal, private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  close() {
    this.modal.dismissAll();
  }

  submitDeletion() {
    this.productService.deleteProductItem(this.id);
  }
}
