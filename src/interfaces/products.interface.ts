interface IScu {
  id: number;
  name: string;
  value: string;
  price: string | null;
}

export interface IProduct {
  id: string;
  name: string;
  smallPhoto: string | null;
  sectionCode: string;
  sectionName: string;
  pin: string[];
  scu?: {
    [key: string]: IScu[];
  };
}

export type IProductArr = IProduct[];
