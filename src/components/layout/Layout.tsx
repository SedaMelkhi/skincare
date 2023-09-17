import { FC, PropsWithChildren, useState } from 'react';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import Header from './header/header';
import Basket from './basket/basket';

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  const [basketOpen, setBasketOpen] = useState(false);
  const stopScrollStyle = { height: '100vh', overflow: 'hidden' };
  return (
    <div style={basketOpen ? stopScrollStyle : {}}>
      <Meta
        title={title.length > 15 ? title.substring(0, 15) + '...' : title}
        description={description}
      />
      <Header setBasketOpen={setBasketOpen} basketOpen={basketOpen} />
      <Basket setBasketOpen={setBasketOpen} basketOpen={basketOpen} />
      {children}
    </div>
  );
};
export default Layout;
