import { GetServerSideProps, NextPage } from 'next';
import { CatalogService } from '@/services/catalog.service';

import ProductPage from '@/components/screens/product/[id]';

const Product: NextPage<any> = ({ data }) => {
  return <ProductPage data={data} key={Object.keys(data)[0]} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await CatalogService.getCatalog({
    type: 'getItem',
    itemId: context.params && context.params.id,
  });

  return {
    props: { data },
  };
};

export default Product;
