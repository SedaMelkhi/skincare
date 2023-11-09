import { CatalogArray } from '@/interfaces/catalog.interface';

export interface IMeta {
  title: string;
  description?: string;
  catalog?: CatalogArray;
  nav?: boolean;
}
