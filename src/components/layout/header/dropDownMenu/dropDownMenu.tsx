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
      link: '/catalog/1',
      items: [
        {
          id: 0,
          name: 'Очищение',
          link: '/catalog/1',
          items: [
            { name: 'Гидрофильные бальзамы/масла', id: 0, link: '/catalog/1' },
            { name: 'Гели/пенки', id: 1, link: '/catalog/1' },
            { name: 'Молочко/эмульсия', id: 2, link: '/catalog/1' },
            { name: 'Полотенце/салфетки', id: 2, link: '/catalog/1' },
          ],
        },
        {
          id: 1,
          name: 'Увлажнение и питание',
          link: '/catalog/1',
          items: [
            { name: '1.1)Гидрофильные бальзамы/масла', id: 0, link: '/catalog/1' },
            { name: '1.1)Гели/пенки', id: 1, link: '/catalog/1' },
            { name: '1.1)Молочко/эмульсия', id: 2, link: '/catalog/1' },
            { name: '1.1)Полотенце/салфетки', id: 2, link: '/catalog/1' },
          ],
        },
        {
          id: 2,
          name: 'Сыворотки',
          link: '/catalog/1',
          items: [
            { name: '1.2) Гидрофильные бальзамы/масла', id: 0, link: '/catalog/1' },
            { name: '1.2) Гели/пенки', id: 1, link: '/catalog/1' },
            { name: '1.2) Молочко/эмульсия', id: 2, link: '/catalog/1' },
            { name: '1.2) Полотенце/салфетки', id: 2, link: '/catalog/1' },
          ],
        },
        {
          id: 3,
          name: 'Отшелушивание',
          link: '/catalog/1',
          items: [
            { name: '1.3) Гидрофильные бальзамы/масла', id: 0, link: '/catalog/1' },
            { name: '1.3) Гели/пенки', id: 1, link: '/catalog/1' },
            { name: '1.3) Молочко/эмульсия', id: 2, link: '/catalog/1' },
            { name: '1.3) Полотенце/салфетки', id: 2, link: '/catalog/1' },
          ],
        },
        {
          id: 4,
          name: 'Загар и защита от солнца',
          link: '/catalog/1',
          items: [],
        },
        {
          id: 5,
          name: 'Маски/патчи',
          link: '/catalog/1',
          items: [],
        },
        {
          id: 6,
          name: 'Глаза и губы',
          link: '/catalog/1',
          items: [],
        },
        {
          id: 7,
          name: 'Макияж',
          link: '/catalog/1',
          items: [],
        },
      ],
    },
    {
      id: 1,
      name: 'тело',
      link: '/catalog/1',
      items: [],
    },
    {
      id: 2,
      name: 'волосы',
      link: '/catalog/1',
      items: [
        {
          id: 0,
          name: '2)Очищение',
          link: '/catalog/1',
          items: [
            { name: '2.1) Гидрофильные бальзамы/масла', id: 0, link: '/catalog/1' },
            { name: '2.1) Гели/пенки', id: 1, link: '/catalog/1' },
            { name: '2.1) Молочко/эмульсия', id: 2, link: '/catalog/1' },
            { name: '2.1) Полотенце/салфетки', id: 2, link: '/catalog/1' },
          ],
        },
        {
          id: 1,
          name: '2) Увлажнение и питание',
          link: '/catalog/1',
          items: [
            { name: '2.2) Гидрофильные бальзамы/масла', id: 0, link: '/catalog/1' },
            { name: '2.2) Гели/пенки', id: 1, link: '/catalog/1' },
            { name: '2.2) Молочко/эмульсия', id: 2, link: '/catalog/1' },
            { name: '2.2) Полотенце/салфетки', id: 2, link: '/catalog/1' },
          ],
        },
        {
          id: 2,
          name: '2) Сыворотки',
          link: '/catalog/1',
          items: [
            { name: '2.3) Гидрофильные бальзамы/масла', id: 0, link: '/catalog/1' },
            { name: '2.3) Гели/пенки', id: 1, link: '/catalog/1' },
            { name: '2.3) Молочко/эмульсия', id: 2, link: '/catalog/1' },
            { name: '2.3) Полотенце/салфетки', id: 2, link: '/catalog/1' },
          ],
        },
        {
          id: 3,
          name: 'Отшелушивание',
          link: '/catalog/1',
          items: [
            { name: '2.4) Гидрофильные бальзамы/масла', id: 0, link: '/catalog/1' },
            { name: '2.4) Гели/пенки', id: 1, link: '/catalog/1' },
            { name: '2.4) Молочко/эмульсия', id: 2, link: '/catalog/1' },
            { name: '2.4) Полотенце/салфетки', id: 2, link: '/catalog/1' },
          ],
        },
        {
          id: 4,
          name: '2) Загар и защита от солнца',
          link: '/catalog/1',
          items: [],
        },
        {
          id: 5,
          name: '2) Маски/патчи',
          link: '/catalog/1',
          items: [],
        },
        {
          id: 6,
          name: '2) Глаза и губы',
          link: '/catalog/1',
          items: [],
        },
        {
          id: 7,
          name: '2) Макияж',
          link: '/catalog/1',
          items: [],
        },
      ],
    },
    {
      id: 3,
      name: 'для детей',
      link: '/catalog/1',
      items: [],
    },
    {
      id: 4,
      name: 'бады',
      link: '/catalog/1',
      items: [],
    },
    {
      id: 5,
      name: 'Гаджеты и массажеры',
      link: '/catalog/1',
      items: [],
    },
    {
      id: 6,
      name: 'проблемы и решения',
      link: '/catalog/1',
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
