export interface CatalogItem {
  ID: string;
  NAME: string;
  DESCRIPTION: string;
  DEPTH_LEVEL: string;
  IBLOCK_SECTION_ID: string | null;
  SUBCATEGORIES?: CatalogItem[];
}

export type CatalogItems = CatalogItem[];

export type CatalogMenu = {
  menu: {
    menu: CatalogItems;
  };
};
