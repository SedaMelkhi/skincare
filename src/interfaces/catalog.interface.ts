export interface ICatalog {
  ID: string;
  NAME: string;
  DESCRIPTION: string;
  DEPTH_LEVEL: string;
  IBLOCK_SECTION_ID: string | null;
}

export type CatalogArray = ICatalog[];
export type CatalogObj = { catalog: CatalogArray };
