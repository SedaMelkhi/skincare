export interface IShade {
  ID: string;
  NAME: string;
  PREVIEW_PICTURE: string;
  PREVIEW_TEXT: string;
}

export interface IScu {
  id: number;
  name: string;
  value: string;
  price: {
    basePrice: number;
    discountPrice: number;
    discount: number;
    percent: number;
  };
  photos?: string[];
  discount?: string;
  shade?: IShade;
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
  scu?: IScu[];
}

export type IProductArr = IProduct[];
