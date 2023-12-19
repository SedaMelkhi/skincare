import { IScu } from './products.interface';

export interface IPricesObj {
  saleUserId: string;
  price: number;
  fullPrice: number;
}

export interface IbasketData {
  cartId: number;
  scuId: number;
  parentItem: {
    ID: number;
    NAME: string;
    PREVIEW_PICTURE: string;
    SCU: IScu[];
  };
  name: string;
  quantity: number;
  finalPrice: number;
  fullPrice: number;
  price: number;
}
