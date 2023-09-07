import { NextPage } from 'next';

import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/other/breadcrumbs/breadcrumbs';
import Slider from './slider/slider';
import TabPanel from './tabPanel/tabPanel';
import Text from './text/Text';

import askSvg from './../../../public/ask.svg';

import style from './product.module.sass';
import Details from './details/details';

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
          <Text />
        </section>
        <div className={style.quenstion__wrap}>
          <div className={style.quenstion}>
            <div className={style.textGrey}>
              <span>Есть вопрос?</span>
            </div>
            <div className={style.textGrey}>бесплатная консультация</div>
          </div>
          <div className={style.ask}>
            <img src={askSvg.src} alt="" />
          </div>
        </div>
        <TabPanel />
        <Details />
      </div>
    </Layout>
  );
};
export default Product;
