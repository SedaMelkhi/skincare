import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Product: NextPage = () => {
  const { push } = useRouter();

  return <div onClick={() => push('/')}>New Prodfuct</div>;
};
export default Product;
