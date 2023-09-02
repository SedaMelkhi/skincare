import { NextPage } from 'next';

import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/other/breadcrumbs/breadcrumbs';
import CountProducts from '@/components/other/countProducts/countProducts';

import style from './catalog.module.sass';

const Catalog: NextPage = () => {
  const products = new Array(123);
  return (
    <Layout title="Каталог">
      <div className={`wrap ${style.catalog}`}>
        <div className={style.top}>
          <div className={style.flex}>
            <Breadcrumbs
              arr={[
                { text: 'Каталог', link: 'catalog' },
                { text: 'Лицо', link: 'catalog/1' },
              ]}
            />
            <CountProducts count={products.length} />
          </div>
        </div>
        <div className={style.top}>
          <div className={`${style.flex} ${style.flex_long}`}>
            <h2 className={style.title}>Основной уход</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Catalog;

{
  /* import { useRouter } from 'next/router'; */
  /* const { push } = useRouter(); */
  /* <div onClick={() => push('/')}>New Prodfuct</div> */
}
