import { Dispatch, FC, SetStateAction, useState } from 'react';
import { IPricesObj, IbasketData } from '@/interfaces/basket.interface';

import BasketProduct from '../basketProduct/basketProduct';

import style from './productsTable.module.sass';

interface IProductsTable {
  basketArr: IbasketData[] | [];
  setBasketArr: Dispatch<SetStateAction<IbasketData[] | []>>;
  setPricesObj: Dispatch<SetStateAction<IPricesObj | null>>;
}

const ProductsTable: FC<IProductsTable> = ({ basketArr, setBasketArr, setPricesObj }) => {
  return (
    <div className={style.table}>
      {basketArr.map(
        ({ name, quantity, finalPrice, scuId, parentItem, cartId, fullPrice, price }) => (
          <BasketProduct
            key={scuId}
            name={name}
            quantity={quantity}
            finalPrice={finalPrice}
            scuId={scuId}
            parentItem={parentItem}
            cartId={cartId}
            fullPrice={fullPrice}
            price={price}
            setBasketArr={setBasketArr}
            setPricesObj={setPricesObj}
          />
        ),
      )}
    </div>
  );
};

export default ProductsTable;
