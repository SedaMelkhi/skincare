import { Dispatch, FC, SetStateAction } from 'react';
import Link from 'next/link';

import style from './smallProducts.module.sass';

interface SmallProductProps {
  image: string;
  link: string;
  id: number;
}

interface SmallProductPropsArr {
  products: SmallProductProps[] | null;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SmallProducts: FC<SmallProductPropsArr> = ({ products, setIsOpen }) => {
  return (
    <div className={style.cards__wrap}>
      <div className={style.cards} onClick={() => setIsOpen(true)}>
        {products &&
          products.map(({ image, link, id }, i) =>
            i !== 4 ? (
              i < 4 && (
                <div key={id}>
                  <div className={style.card} style={{ backgroundImage: `url(${image})` }}></div>
                </div>
              )
            ) : (
              <div className={style.circle} key={id}>
                + {products.length - 4}
              </div>
            ),
          )}
      </div>
    </div>
  );
};

export default SmallProducts;
