import { FC, PropsWithChildren, useState } from 'react';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import Header from './header/header';
import Basket from './basket/basket';
import { useSelector } from 'react-redux';
import Notifications from './notifications/notifications';
import Footer from './footer/footer';

interface RootState {
  basket: {
    isBasketOpen: boolean;
  };
}
interface RootNotifications {
  basket: {
    isNotifications: boolean;
  };
}
const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  const isBasketOpen = useSelector((state: RootState) => state.basket.isBasketOpen);
  const isNotifications = useSelector((state: RootNotifications) => state.basket.isNotifications);
  const stopScrollStyle = { height: '100vh', overflow: 'hidden' };
  return (
    <div style={isBasketOpen || isNotifications ? stopScrollStyle : {}}>
      <Meta
        title={title.length > 15 ? title.substring(0, 15) + '...' : title}
        description={description}
      />
      <Header />
      <Basket />
      <Notifications />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
