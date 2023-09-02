import { FC, useCallback } from 'react';

import style from './countProducts.module.sass';

interface CountProductsProps {
  count: number;
}

const CountProducts: FC<CountProductsProps> = ({ count }) => {
  const pluralize = useCallback((n: number): string => {
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return `${n} товар`;
    } else if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
      return `${n} товара`;
    } else {
      return `${n} товаров`;
    }
  }, []);
  return <div className={style.count}>{pluralize(count)}</div>;
};

export default CountProducts;
