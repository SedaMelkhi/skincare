import Layout from '@/components/layout/Layout';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const NotFound: NextPage = () => {
  return (
    <Layout title="404">
      <Head>
        <title>Not Found</title>
      </Head>
      <div>
        404
        <Image src="/404.jpg" alt="" width={500} height={500} /> /**путь к картинке надо указывать с
        деплоя */
      </div>
    </Layout>
  );
};
export default NotFound;
