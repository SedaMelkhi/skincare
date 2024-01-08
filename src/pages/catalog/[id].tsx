import { GetServerSideProps, NextPage } from 'next';
import { CatalogService } from '@/services/catalog.service';

import CatalogPage from '@/components/screens/catalog/CatalogPage';
import { IProductArr } from '@/interfaces/products.interface';

const Catalog: NextPage<{ data: any }> = ({ data }) => {
  console.log(data);

  const products: IProductArr = data ? Object.values(data) : [];
  console.log(products);
  //<CatalogPage products={products} />
  return '';
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await CatalogService.getCatalog({
    type: 'getSectionItems',
    sectionId: context.params && context.params.id,
    count: 6,
    numPage: 1,
  });

  return {
    props: { data },
  };
};

export default Catalog;
