import { GetServerSideProps, NextPage } from 'next';
import { CatalogService } from '@/services/catalog.service';

import CatalogPage from '@/components/screens/catalog/CatalogPage';
import { IProductArr } from '@/interfaces/products.interface';

const Catalog: NextPage<{ data: any }> = ({ data }) => {
  const products: IProductArr = data ? Object.values(data) : [];

  return <CatalogPage products={products} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await CatalogService.getCatalog({
    type: 'getSectionItems',
    sectionId: context.params && context.params.id,
    count: 10,
    numPage: 1,
  });

  return {
    props: { data },
  };
};

export default Catalog;
