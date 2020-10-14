import {Component, Input} from '@angular/core';

import {EProductStatuses, statusesClassList, statusesList} from '@constants/product-statuses';

@Component({
  selector: 'app-product-status',
  templateUrl: './product-status.component.html',
  styleUrls: ['./product-status.component.scss']
})
export class ProductStatusComponent {
  statusClass: string;
  statusName: string;

  @Input() set status(data: EProductStatuses) {
    this.setStatus(data);
    this.setClassName(data);
  };

  setStatus(data: EProductStatuses): void {
    this.statusName = statusesList.get(data);
  }

  setClassName(data: EProductStatuses) {
    this.statusClass = statusesClassList.get(data);
  }

}
