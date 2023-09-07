import { NextPage } from 'next';

import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/other/breadcrumbs/breadcrumbs';
import Slider from './slider/slider';

import ArrowIcon from './arrowIcon/arrowIcon';
import actionSvg1 from './../../../public/action1.svg';
import actionSvg2 from './../../../public/action2.svg';
import actionSvg3 from './../../../public/action3.svg';
import infoSvg from './../../../public/info.svg';
import saveSvg from './../../../public/save.svg';

import style from './product.module.sass';
import { useState } from 'react';

type Size = {
  size: string;
  id: number;
};

const Product: NextPage = () => {
  const [activeSize, setActiveSize] = useState(0);
  const [city, setCity] = useState('Москва');

  const sizes: Size[] = [
    {
      size: '100мл',
      id: 0,
    },
    {
      size: '250мл',
      id: 1,
    },
    {
      size: '350мл',
      id: 2,
    },
  ];

  const cities: String[] = ['Москва', 'Грозный', 'Стамбул'];

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
            <div className={style.actions}>
              <div className={style.action}>
                <img src={actionSvg1.src} alt="" className={style.svg} />
                <span>Oсвежает</span>
              </div>
              <div className={style.action}>
                <img src={actionSvg2.src} alt="" className={style.svg} />
                <span>Очищает</span>
              </div>
              <div className={style.action}>
                <img src={actionSvg3.src} alt="" className={style.svg} />
                <span>Питает</span>
              </div>
            </div>
            <div className={style.description}>
              Активно освежающий шампунь SOLU глубоко очищает волосы и кожу головы, удаляя остатки
              стайлинговых продуктов.
            </div>
            <div className={style.subtitle}>Объеm</div>
            <div className={style.sizes}>
              {sizes.map(({ size, id }) => (
                <div
                  className={style.size + ' ' + (activeSize === id ? style.active : '')}
                  onClick={() => setActiveSize(id)}>
                  {size}
                </div>
              ))}
            </div>
            <div className={style.oldPrice}>
              <div>2 234 ₽</div>
              <div>
                <img src={infoSvg.src} alt="" />
              </div>
            </div>
            <div className={style.price}>2 300 ₽</div>
            <div className={style.btns}>
              <button className={style.btn}>Добавить в сумочку</button>
              <img src={saveSvg.src} alt="" />
            </div>

            <div className={style.select__wrap}>
              <div className={style.value}>
                <span>{city} </span>
                <ArrowIcon />
              </div>
              {/* <div className={style.select}>
                {cities.map((item, i) => (
                  <div className={style.select__item} key={i}>
                    {item}
                  </div>
                ))}
              </div> */}
            </div>
            <div className={style.date}>В пункты выдачи 3 дня</div>
            <div className={style.more}>Подробнее о доставке</div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default Product;
