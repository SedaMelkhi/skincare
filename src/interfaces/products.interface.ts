interface IScu {
  id: number;
  name: string;
  value: string;
  price: string | null;
}

export interface Product {
  id: string;
  name: string;
  smallPhoto: string | null;
  sectionCode: string;
  sectionName: string;
  pin: string[];
  scu?: {
    [key: string]: IScu;
  };
}

export type IProductArr = Product[];
