import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/other/breadcrumbs/breadcrumbs';
import Slider from './slider/slider';
import TabPanel from './tabPanel/tabPanel';
import Text from './text/Text';
import HitsSwiper from '@/components/screens/home/hits/hitsSwiper/hitsSwiper';

import askSvg from './../../../../public/ask.svg';

import style from './product.module.sass';
import { useSelector } from 'react-redux';
import { IProduct } from '@/interfaces/products.interface';

const ProductPage: FC<{ data: IProduct }> = ({ data }) => {
  const hits = useSelector((state: any) => state.hits.hits);

  const product = Object.values(data)[0];

  return (
    <Layout title={product.name}>
      <div className={`wrap ${style.wrap}`}>
        <Breadcrumbs
          arr={[
            { text: 'Каталог', link: '/catalog/' + product.sectionCode },
            { text: 'Волосы', link: '/catalog/' + product.sectionCode },
            { text: product.name, link: '/product/' + product.id },
          ]}
        />
        <section className={style.product}>
          <Slider detailPhoto={product.detailPhoto} />
          <Text data={product} />
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
      </div>
      <div className={style.recommendation}>
        <div className={style.recommendation__title}>Bам может понравиться</div>
        <HitsSwiper slidesPerView={4} />
      </div>
    </Layout>
  );
};
export default ProductPage;
