import { NextPage } from 'next';

import Layout from '@/components/layout/Layout';

import style from './journal.module.sass';

const Journal: NextPage = () => {
  return (
    <Layout title="Журнал">
      <section className={style.journal}>
        <h1 className={style.journal__title}>Журнал</h1>
        <div className={style.journal__content}>
          <div className={style.journal__img}>
            <img src="./journal/img-1.svg" alt="Product image" />
          </div>
          <div className={style.journal__textCol}>
            <div className={style.journal__text}>
              <p className={style.date}>02/09/23</p>
              <h2 className={style.journal__subtitle}>Вода для потрясающей кожи</h2>
              <p className={style.journal__article}>
                Красота и здоровье кожи - это цель, которую все мы стремимся достичь. И хотя
                существует множество продуктов и процедур, которые обещают подарить нам идеальную
                кожу, не стоит недооценивать простоту и силу естественных элементов, таких как вода.
              </p>
            </div>
            <a href="#" className={style.journal__btn}>
              <span className={style.journal__btnText}>Читать</span>
              <img
                className={style.journal__btnArrow}
                src="./journal/right-arrow .svg"
                alt="Right arrow icon"
              />
            </a>
          </div>
        </div>
      </section>
      <section className={style.categories}>
        <div className={style.categories__leftCol}>
          <h2 className={style.categories__title}>Категории</h2>
          <div className={style.dropdownHolder}>
            <ul className={style.dropdown}>
              <li className={style.dropdown__item + ' ' + style.dropdown__item_active}>
                <a href="#" className={style.dropdown__link + ' ' + style.dropdown__link_active}>
                  Секреты, советы
                </a>
              </li>
              <li className={style.dropdown__item + ' ' + style.dropdown__item_hidden}>
                <a href="#" className={style.dropdown__link}>
                  Ингредиенты
                </a>
              </li>
              <li className={style.dropdown__item + ' ' + style.dropdown__item_hidden}>
                <a href="#" className={style.dropdown__link}>
                  Проблемы кожи
                </a>
              </li>
              <li className={style.dropdown__item + ' ' + style.dropdown__item_hidden}>
                <a href="#" className={style.dropdown__link}>
                  Органические подходы
                </a>
              </li>
              <li className={style.dropdown__item + ' ' + style.dropdown__item_hidden}>
                <a href="#" className={style.dropdown__link}>
                  Обзоры
                </a>
              </li>
              <li className={style.dropdown__item + ' ' + style.dropdown__item_hidden}>
                <a href="#" className={style.dropdown__link}>
                  Образ жизни
                </a>
              </li>
            </ul>
            <img className={style.dropdown__img} src="./journal/up-arrow.svg" alt="Up arrow ucon" />
          </div>
        </div>
        <div className={style.articleColumns}>
          <div className={style.articleRow}>
            <div className={style.articleColumn}>
              <div className={style.articleColumn__img}></div>
              <p className={style.category}>Уход</p>
              <h3 className={style.articleColumn__title}>Как составить уход?</h3>
            </div>
            <div className={style.articleColumn}>
              <div
                className={style.articleColumn__img + ' ' + style.articleColumn__img_second}></div>
              <p className={style.category}>Уход</p>
              <h3 className={style.articleColumn__title}>Лучшая ткань для хиджаба</h3>
            </div>
            <div className={style.articleColumn}>
              <div
                className={style.articleColumn__img + ' ' + style.articleColumn__img_third}></div>
              <p className={style.category}>Уход</p>
              <h3 className={style.articleColumn__title}>Что такое ко-вошинг?</h3>
            </div>
          </div>
          <div className={style.article2}>
            <div className={style.article2__imgCol}>
              <picture>
                <source srcSet="./journal/article-img-4.svg" media="(min-width: 768px)" />
                <img
                  src="./journal/article-img-4-mobile.svg"
                  alt="Image"
                  className={style.article2__img}
                />
              </picture>
            </div>
            <div className={style.article2__textCol}>
              <p className={style.category}>Уход</p>
              <h2 className={style.article2__title}>Вода для потрясающей кожи</h2>
              <p className={style.article2__paragraph}>
                Красота и здоровье кожи - это цель, которую все мы стремимся достичь. И хотя
                существует множество продуктов и процедур, которые обещают подарить нам идеальную
                кожу, не стоит недооценивать простоту и силу естественных элементов, таких как вода.
              </p>
            </div>
          </div>

          <div className={style.articleColumns}>
            <div className={style.articleRow}>
              <div className={style.articleColumn + ' ' + style.articleColumn_order3}>
                <div className={style.articleColumn__img}></div>
                <p className={style.category}>Уход</p>
                <h3 className={style.articleColumn__title}>Как составить уход?</h3>
              </div>
              <div className={style.articleColumn + ' ' + style.article_column_order2}>
                <div
                  className={
                    style.articleColumn__img + ' ' + style.articleColumn__img_second
                  }></div>
                <p className={style.category}>Уход</p>
                <h3 className={style.articleColumn__title}>Лучшая ткань для хиджаба</h3>
              </div>
              <div className={style.articleColumn + ' ' + style.articleColumn_order1}>
                <div
                  className={style.articleColumn__img + ' ' + style.articleColumn__img_third}></div>
                <p className={style.category}>Уход</p>
                <h3 className={style.articleColumn__title}>Что такое ко-вошинг?</h3>
              </div>
            </div>

            <div className={style.article2 + ' ' + style.article2_reversed}>
              <div className={style.article2__imgCol}>
                <picture>
                  <source srcSet="./journal/article-img-4.svg" media="(min-width: 768px)" />
                  <img
                    src="./journal/article-img-4-mobile.svg"
                    alt="Image"
                    className={style.article2__img}
                  />
                </picture>
              </div>
              <div className={style.article2__textCol}>
                <p className={style.category}>Уход</p>
                <h2 className={style.article2__title}>Вода для потрясающей кожи</h2>
                <p className={style.article2__paragraph}>
                  Красота и здоровье кожи - это цель, которую все мы стремимся достичь. И хотя
                  существует множество продуктов и процедур, которые обещают подарить нам идеальную
                  кожу, не стоит недооценивать простоту и силу естественных элементов, таких как
                  вода.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Journal;
