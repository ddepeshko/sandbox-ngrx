import {EProductStatuses} from '@constants/product-statuses';
import {IProduct} from '@models/product/product';
import {PRODUCTS_LS_KEY} from "@constants/constants";

export const PRODUCT_LIST_MOCK: Array<IProduct> = !!JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY))?.length ? JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY)) : [
  {
    id: 1,
    title: 'Продукт №1',
    subtitle: 'Продукт для пользователя',
    image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    creationDate: new Date(),
    status: EProductStatuses.New
  },
  {
    id: 2,
    title: 'Продукт №2',
    subtitle: 'Продукт для пользователя',
    image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    creationDate: new Date(),
    status: EProductStatuses.Used
  },
  {
    id: 3,
    title: 'Продукт №3',
    subtitle: 'Продукт для пользователя',
    image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    creationDate: new Date(),
    status: EProductStatuses.New
  },
  {
    id: 4,
    title: 'Продукт №4',
    subtitle: 'Продукт для пользователя',
    image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    creationDate: new Date(),
    status: EProductStatuses.New
  },
  {
    id: 5,
    title: 'Продукт №5',
    subtitle: 'Продукт для пользователя',
    image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    creationDate: new Date(),
    status: EProductStatuses.Refurbished
  },
  {
    id: 6,
    title: 'Продукт №6',
    subtitle: 'Продукт для пользователя',
    image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    creationDate: new Date(),
    status: EProductStatuses.Used
  },
  {
    id: 7,
    title: 'Продукт №7',
    subtitle: 'Продукт для пользователя',
    image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    creationDate: new Date(),
    status: EProductStatuses.New
  },
  {
    id: 8,
    title: 'Продукт №8',
    subtitle: 'Продукт для пользователя',
    image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    creationDate: new Date(),
    status: EProductStatuses.Refurbished
  },
  {
    id: 9,
    title: 'Продукт №9',
    subtitle: 'Продукт для пользователя',
    image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    creationDate: new Date(),
    status: EProductStatuses.New
  },
  {
    id: 10,
    title: 'Продукт №10',
    subtitle: 'Продукт для пользователя',
    image: 'https://elcopcbonline.com/photos/product/4/176/4.jpg',
    creationDate: new Date(),
    status: EProductStatuses.Refurbished
  },
];
