import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/other/breadcrumbs/breadcrumbs';
import CountProducts from '@/components/other/countProducts/countProducts';
import Filters from '@/components/other/filters/filters';
import Sort from '@/components/other/sort/sort';
import Products from '@/components/other/products/products';

import filtersSvg from './../../../../public/catalog/filters.svg';

import style from './catalog.module.sass';

const CatalogPage: FC = () => {
  const products = new Array(123);
  return (
    <Layout title="Каталог">
      <div className={`wrap ${style.catalog}`}>
        <div className={style.top__wrap}>
          <div className={style.empty}></div>
          <div>
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
              <div className={`${style.flex}`}>
                <h2 className={style.title}>Лицо чваыва</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={style.params}>
          <div className={style.filter_wrap}>
            <span className={style.text}>фильтры</span>
            <img src={filtersSvg.src} alt="" />
          </div>
          <div className={style.sort}>
            <Sort />
          </div>
        </div>
        <div className={style.wrap}>
          <Filters />
          <Products />
        </div>
      </div>
    </Layout>
  );
};
export default CatalogPage;
