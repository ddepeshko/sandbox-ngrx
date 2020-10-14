import {EProductStatuses} from '@constants/product-statuses';

export interface IProduct {
  id?: number;
  title: string;
  subtitle: string;
  image: string;
  creationDate: Date;
  status?: EProductStatuses;
}
