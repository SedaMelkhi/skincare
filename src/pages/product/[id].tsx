import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/other/breadcrumbs/breadcrumbs';

import { NextPage } from 'next';

import style from './product.module.sass';
import Slider from './slider/slider';

const Product: NextPage = () => {
  return (
    <Layout title="Освежающий шампунь для глубокого увлажнения DAVINES Solu">
      <div className={`wrap ${style.wrap}`}>
        <Breadcrumbs
          arr={[
            { text: 'Каталог', link: '/catalog' },
            { text: 'Волосы', link: '/catalog/1' },
            { text: 'Шампунь', link: '/catalog/1' },
          ]}
        />
        <section className={style.product}>
          <Slider />
          <div className={style.text}>
            <h2 className={style.title}>
              Освежающий шампунь для глубокого увлажнения DAVINES Solu
            </h2>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default Product;
