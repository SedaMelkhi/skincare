import Layout from '@/components/layout/Layout';
import Hits from '@/components/screens/home/hits/Hits';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Catalog: NextPage = () => {
  const { push } = useRouter();

  return (
    <Layout title="Каталог">
      <div onClick={() => push('/')}>New Prodfuct</div>
    </Layout>
  );
};
export default Catalog;
