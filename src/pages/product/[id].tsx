import { GetServerSideProps, NextPage } from 'next';
import { CatalogService } from '@/services/catalog.service';

import ProductPage from '@/components/screens/product/[id]';

const Product: NextPage<any> = ({ data }) => {
  return <ProductPage data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await CatalogService.getCatalog({
    type: 'getItem',
    itemId: context.params && context.params.id,
  });
  console.log(data);
  
  return {
    props: { data },
  };
};

export default Product;
