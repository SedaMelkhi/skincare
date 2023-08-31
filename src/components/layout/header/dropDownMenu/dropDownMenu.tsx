import Link from 'next/link';
import { FC } from 'react';
import style from './dropDownMenu.module.sass';

const DropDownMenu: FC = () => {
  interface menu {
    id: number;
    name: string;
    link: string;
  }

  interface Categories {
    id: number;
    name: string;
    link: string;
    items: menu[];
  }

  interface itemsDate {
    id: number;
    name: string;
    link: string;
    items: Categories[];
  }
  const items: itemsDate[] = [
    {
      id: 0,
      name: 'лицо',
      link: '/',
      items: [
        {
          id: 0,
          name: 'Очищение',
          link: '/',
          items: [
            { name: 'Гидрофильные бальзамы/масла', id: 0, link: '/' },
            { name: 'Гели/пенки', id: 1, link: '/' },
            { name: 'Молочко/эмульсия', id: 2, link: '/' },
            { name: 'Полотенце/салфетки', id: 2, link: '/' },
          ],
        },
        {
          id: 1,
          name: 'Увлажнение и питание',
          link: '/',
          items: [
            { name: '1.1)Гидрофильные бальзамы/масла', id: 0, link: '/' },
            { name: '1.1)Гели/пенки', id: 1, link: '/' },
            { name: '1.1)Молочко/эмульсия', id: 2, link: '/' },
            { name: '1.1)Полотенце/салфетки', id: 2, link: '/' },
          ],
        },
        {
          id: 2,
          name: 'Сыворотки',
          link: '/',
          items: [
            { name: '1.2) Гидрофильные бальзамы/масла', id: 0, link: '/' },
            { name: '1.2) Гели/пенки', id: 1, link: '/' },
            { name: '1.2) Молочко/эмульсия', id: 2, link: '/' },
            { name: '1.2) Полотенце/салфетки', id: 2, link: '/' },
          ],
        },
        {
          id: 3,
          name: 'Отшелушивание',
          link: '/',
          items: [
            { name: '1.3) Гидрофильные бальзамы/масла', id: 0, link: '/' },
            { name: '1.3) Гели/пенки', id: 1, link: '/' },
            { name: '1.3) Молочко/эмульсия', id: 2, link: '/' },
            { name: '1.3) Полотенце/салфетки', id: 2, link: '/' },
          ],
        },
        {
          id: 4,
          name: 'Загар и защита от солнца',
          link: '/',
          items: [],
        },
        {
          id: 5,
          name: 'Маски/патчи',
          link: '/',
          items: [],
        },
        {
          id: 6,
          name: 'Глаза и губы',
          link: '/',
          items: [],
        },
        {
          id: 7,
          name: 'Макияж',
          link: '/',
          items: [],
        },
      ],
    },
    {
      id: 1,
      name: 'тело',
      link: '/',
      items: [],
    },
    {
      id: 2,
      name: 'волосы',
      link: '/',
      items: [
        {
          id: 0,
          name: '2)Очищение',
          link: '/',
          items: [
            { name: '2.1) Гидрофильные бальзамы/масла', id: 0, link: '/' },
            { name: '2.1) Гели/пенки', id: 1, link: '/' },
            { name: '2.1) Молочко/эмульсия', id: 2, link: '/' },
            { name: '2.1) Полотенце/салфетки', id: 2, link: '/' },
          ],
        },
        {
          id: 1,
          name: '2) Увлажнение и питание',
          link: '/',
          items: [
            { name: '2.2) Гидрофильные бальзамы/масла', id: 0, link: '/' },
            { name: '2.2) Гели/пенки', id: 1, link: '/' },
            { name: '2.2) Молочко/эмульсия', id: 2, link: '/' },
            { name: '2.2) Полотенце/салфетки', id: 2, link: '/' },
          ],
        },
        {
          id: 2,
          name: '2) Сыворотки',
          link: '/',
          items: [
            { name: '2.3) Гидрофильные бальзамы/масла', id: 0, link: '/' },
            { name: '2.3) Гели/пенки', id: 1, link: '/' },
            { name: '2.3) Молочко/эмульсия', id: 2, link: '/' },
            { name: '2.3) Полотенце/салфетки', id: 2, link: '/' },
          ],
        },
        {
          id: 3,
          name: 'Отшелушивание',
          link: '/',
          items: [
            { name: '2.4) Гидрофильные бальзамы/масла', id: 0, link: '/' },
            { name: '2.4) Гели/пенки', id: 1, link: '/' },
            { name: '2.4) Молочко/эмульсия', id: 2, link: '/' },
            { name: '2.4) Полотенце/салфетки', id: 2, link: '/' },
          ],
        },
        {
          id: 4,
          name: '2) Загар и защита от солнца',
          link: '/',
          items: [],
        },
        {
          id: 5,
          name: '2) Маски/патчи',
          link: '/',
          items: [],
        },
        {
          id: 6,
          name: '2) Глаза и губы',
          link: '/',
          items: [],
        },
        {
          id: 7,
          name: '2) Макияж',
          link: '/',
          items: [],
        },
      ],
    },
    {
      id: 3,
      name: 'для детей',
      link: '/',
      items: [],
    },
    {
      id: 4,
      name: 'бады',
      link: '/',
      items: [],
    },
    {
      id: 5,
      name: 'Гаджеты и массажеры',
      link: '/',
      items: [],
    },
    {
      id: 6,
      name: 'проблемы и решения',
      link: '/',
      items: [],
    },
  ];
  return (
    <div className={style.catalog__wrap}>
      <div className={style.wrap}>
        <div className={style.catalog}>
          <div className={style.column}>
            <Link href="/bramds" className={style.item}>
              Все
            </Link>
            <Link href="/bramds" className={style.item}>
              Бренды <img src="./arr.svg" />
            </Link>
            {items.map(({ id, name, link, items }): any => (
              <div className={style.item__wrap}>
                <Link href={link} className={style.item} key={id}>
                  {name} {items.length >= 1 && <img src="./arr.svg" />}
                </Link>
                {items.length >= 1 && (
                  <div className={style.categories}>
                    {items.map(({ id, name, link, items }) => (
                      <div className={style.subitem}>
                        <Link href={link} key={id}>
                          {name} {items.length >= 1 && <img src="./arr.svg" />}
                        </Link>
                        {items.length >= 1 && (
                          <div className={style.subcategories}>
                            {items.map(({ id, name, link }) => (
                              <div className={style.subcategories__item}>
                                <Link href={link} className={style.item} key={id}>
                                  {name}
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DropDownMenu;
