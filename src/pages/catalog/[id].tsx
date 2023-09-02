import { NextPage } from 'next';

import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/other/breadcrumbs/breadcrumbs';
import CountProducts from '@/components/other/countProducts/countProducts';
import Filters from '@/components/other/filters/filters';
import Sort from '@/components/other/sort/sort';
import Products from '@/components/other/products/products';

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
        <div className={style.params}>
          <div className={style.filters__mobile}>
            <Filters />
          </div>
          <div className={style.sort}>
            <Sort />
          </div>
        </div>
        <div className={style.products}>
          <Products />
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
