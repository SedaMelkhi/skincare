import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

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
  const [countProducts, setCountProducts] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setCountProducts(3);
      } else if (window.innerWidth < 450) {
        setCountProducts(4);
      } else if (window.innerWidth < 520) {
        setCountProducts(5);
      } else if (window.innerWidth < 768) {
        setCountProducts(6);
      } else {
        setCountProducts(5);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={style.cards__wrap}>
      <div className={style.cards} onClick={() => setIsOpen(true)}>
        {products &&
          products.map(({ image, link, id }, i) =>
            i !== countProducts ? (
              i < countProducts && (
                <div key={id}>
                  <div className={style.card} style={{ backgroundImage: `url(${image})` }}></div>
                </div>
              )
            ) : (
              <div className={style.circle} key={id}>
                + {products.length - countProducts}
              </div>
            ),
          )}
      </div>
    </div>
  );
};

export default SmallProducts;
