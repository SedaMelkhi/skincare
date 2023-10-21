import Link from 'next/link';
import { FC } from 'react';
import { IProductArr } from '@/interfaces/products.interface';

import infoSvg from './../../../../public/info.svg';

import style from './products.module.sass';

[
  {
    id: '20',
    name: 'SANDAWHA Масло гидрофильное на основе масла семян камелии японской, миниатюра',
    smallPhoto: '/upload/iblock/d8d/o6io17nxacu1agrbjmo0wqetv387bk28.jpg',
    sectionCode: '27',
    sectionName: 'Гидрофильные бальзамы/масла',
    pin: ['Хит'],
    scu: {
      '21': {
        id: 21,
        name: 'SANDAWHA Масло гидрофильное на основе масла семян камелии японской, миниатюра  100 мл',
        value: '100 мл',
        price: '1232.00',
      },
      '22': {
        id: 22,
        name: 'SANDAWHA Масло гидрофильное на основе масла семян камелии японской, миниатюра  125 мл',
        value: '125 мл',
        price: '1266.00',
      },
      '23': {
        id: 23,
        name: 'SANDAWHA Масло гидрофильное на основе масла семян камелии японской, миниатюра  250 мл',
        value: '250 мл',
        price: '1645.00',
      },
    },
  },
  {
    id: '24',
    name: '2 SANDAWHA Масло гидрофильное на основе масла семян камелии японской, миниатюра',
    smallPhoto: null,
    sectionCode: '27',
    sectionName: 'Гидрофильные бальзамы/масла',
    pin: ['Новинка', 'Хит'],
    scu: {
      '25': {
        id: 25,
        name: '2 SANDAWHA Масло гидрофильное на основе масла семян камелии японской, миниатюра ',
        value: '100 мл',
        price: null,
      },
      '26': {
        id: 26,
        name: '2 SANDAWHA Масло гидрофильное на основе масла семян камелии японской, миниатюра ',
        value: '125 мл',
        price: null,
      },
    },
  },
  {
    id: '109',
    name: 'Солнцезащитный крем с гиалуроновой кислотой Dr.Ceuracle Hyal Reyouth Moist Sun SPF 50+',
    smallPhoto: '/upload/iblock/2e0/6yo2ipvzv56yuhq2m50qx6jf9t8d5ra0.JPG',
    sectionCode: '56',
    sectionName: 'Солнцезащитные средства',
    pin: ['Хит'],
  },
  {
    id: '110',
    name: 'ТЕСТ',
    smallPhoto: null,
    sectionCode: '23',
    sectionName: 'БАДы',
    pin: ['Скидка', 'Новинка', 'Хит'],
  },
];
const Products: FC<{ products: IProductArr }> = ({ products }) => {
  return (
    <div className={style.products}>
      {products.map(({ id, name, smallPhoto, sectionCode, pin, scu }, i) =>
        i % 6 === 0 ? (
          <Link href={'/product/' + id} className={style.cart_big} key={id}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(http://fkmva.beget.tech/${smallPhoto})` }}></div>
            <div className={style.name}>{name}</div>
            {scu
              ? Object.values(scu).map(({ id, name, value, price }, i) => (
                  <span className={style.size} key={id}>
                    {value}
                    {Object.values(scu).length - 1 === i ? '' : ', '}
                  </span>
                ))
              : ''}
            <div className={style.price}>
              <div className={style.new}>
                {scu && Object.values(scu)[0].price !== null
                  ? Object.values(scu)[0].price + ' ₽'
                  : 'цены нет'}
              </div>
              <div className={style.old}>2 234 ₽</div>
              <div className={style.info}>
                <img src={infoSvg.src} alt="" />
              </div>
            </div>
          </Link>
        ) : (
          <Link href={'/product/' + id} className={style.cart}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(http://fkmva.beget.tech/${smallPhoto})` }}></div>
            <div className={style.name}>{name}</div>
            {scu
              ? Object.values(scu).map(({ id, name, value, price }, i) => (
                  <span className={style.size} key={id}>
                    {value}
                    {Object.values(scu).length - 1 === i ? '' : ', '}
                  </span>
                ))
              : ''}
            <div className={style.price}>
              <div className={style.new}>
                {scu && Object.values(scu)[0].price !== null
                  ? Object.values(scu)[0].price + ' ₽'
                  : 'цены нет'}
              </div>
            </div>
          </Link>
        ),
      )}
    </div>
  );
};

export default Products;
