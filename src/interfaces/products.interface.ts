export interface IScu {
  id: number;
  name: string;
  value: string;
  price: string | null;
  photos?: string[];
  shade?: {
    ID: string;
    NAME: string;
    PREVIEW_PICTURE: string;
    PREVIEW_TEXT: string;
  };
}

export interface IProduct {
  id: string;
  name: string;
  smallPhoto: string | null;
  sectionCode: string;
  sectionName: string;
  pin: string[];
  addPhotos?: string[] | null;
  brand?: {
    ID: string;
    NAME: string;
    PREVIEW_PICTURE: string;
    PREVIEW_TEXT: string;
  };
  description?: string;
  detailPhoto?: string | null;
  preDescription?: string;
  props?: any;
  scu?: {
    [key: string]: IScu[];
  };
}

export type IProductArr = IProduct[];
