import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import leftArrowSvg from './../../../public/journal/left-arrow.svg';
import greyStarSvg from './../../../public/journal/grey-star.svg';

import style from './article.module.sass';
import HitsSwiper from '@/components/screens/home/hits/hitsSwiper/hitsSwiper';

const Journal: NextPage = () => {
  return (
    <Layout title="Статья">
      <section className={style.articles}>
        <div className={style.articles__leftCol}>
          <Link href="/journal" className={style.articles__back}>
            <img src={leftArrowSvg.src} alt="Left arrow icon" />
            <span>Журнал</span>
          </Link>
          <h2 className={style.articles__title}>Вода для потрясающей кожи</h2>
          <div className={style.articles__categoryHolder}>
            <img src={greyStarSvg.src} alt="Grey star icon" />
            <span>образ жизни</span>
          </div>
        </div>
        <div className={style.articles__rightCol}>
          <div className={style.articles__img}></div>
          <p className={style.articles__author}>Автор: эндокринолог</p>
          <p className={style.date}>02/09/23</p>
          <div className={style.articles__text}>
            Красота и здоровье кожи - это цель, которую все мы стремимся достичь. И хотя существует
            множество продуктов и процедур, которые обещают подарить нам идеальную кожу, не стоит
            недооценивать простоту и силу естественных элементов, таких как вода.
            <br />
            <br />
            Вода является неотъемлемой частью нашей жизни. Она обеспечивает жизненно важные функции
            в нашем организме и является основным строительным блоком нашего организма. Но что такое
            роль воды в уходе за кожей?
            <br />
            <br />
            Кожа - наш самый большой орган, и она нуждается во влаге для своего оптимального
            состояния. Недостаток влаги может привести к сухости, шелушению и даже раздражению кожи.
            Вода способна увлажнить кожу, помочь ей оставаться упругой и эластичной. Кроме того,
            вода является прекрасным средством очищения кожи. Она помогает смывать загрязнения,
            излишки кожного сала и остатки макияжа, что способствует поддержанию здорового состояния
            кожи и предотвращает появление проблем, таких как акне или пигментация.
            <br />
            <br />
            Итак, как мы можем использовать воду в нашем режиме ухода за кожей?
            <ol className={style.articles__list}>
              <li className={style.articles__item}>
                Утренняя и вечерняя очистка: Начинайте и заканчивайте свой день с очищением лица с
                помощью воды. Используйте
                <span>мягкие очищающие средства</span>, которые не пересушивают кожу, и тщательно
                смойте их водой.
              </li>
              <li className={style.articles__item}>
                Увлажнение: После очищения нанесите
                <span>увлажняющий крем</span> на влажную кожу. Вода помогает усилить проникновение{' '}
                <span>активных ингредиентов в кожу</span>, делая кремы более эффективными.
              </li>
              <li className={style.articles__item}>
                Освежение в течение дня: Если ваша кожа начинает чувствовать сухость или усталость,
                освежите ее с помощью
                <span>спрея или тоника на основе воды.</span> Это позволит вам быстро и легко
                обновить кожу в любое время дня.
              </li>
              <li className={style.articles__item}>
                Маски и компрессы: Попробуйте различные маски и компрессы, которые содержат воду или
                гидрогелевые патчи. Они помогут увлажнить кожу, снять воспаление и улучшить ее общее
                состояние.
              </li>
            </ol>
            <br />
            <br />
            Не забывайте также об употреблении достаточного количества воды внутрь организма.
            Регулярное питье важно для увлажнения кожи изнутри.
            <br />
            <br />
            Вода - это неотъемлемый элемент здоровой и сияющей кожи. Придайте ей значимость в своем
            режиме ухода за кожей и наслаждайтесь потрясающими результатами. Помните, что простые и
            естественные методы могут быть самыми эффективными.
          </div>
          <p className={style.articles__hits}>Хиты</p>
          <h2 className={style.articles__mentionedProducts}>упомянутые в статье</h2>
        </div>
      </section>
      <div className={style.swiper__wrap}>
        <div className={style.empty}></div>
        <div className={style.swiper}>
          <HitsSwiper slidesPerView={4} />
        </div>
      </div>
    </Layout>
  );
};
export default Journal;
