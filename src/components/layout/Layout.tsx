import { FC, PropsWithChildren, useState } from 'react';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import Header from './header/header';
import Basket from './basket/basket';
import { useSelector } from 'react-redux';
import Notifications from './notifications/notifications';
import Footer from './footer/footer';

import style from './layout.module.sass';

interface IRootState {
  basket: {
    isBasketOpen: boolean;
  };
}
interface IRootNotifications {
  basket: {
    isNotifications: boolean;
  };
}
interface IMenuOpen {
  menu: {
    isMenuOpen: boolean;
  };
}

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description, nav }) => {
  const isBasketOpen = useSelector((state: IRootState) => state.basket.isBasketOpen);
  const isNotifications = useSelector((state: IRootNotifications) => state.basket.isNotifications);
  const isMenuOpen = useSelector((state: IMenuOpen) => state.menu.isMenuOpen);

  return (
    <div
      className={
        isBasketOpen || isNotifications || isMenuOpen ? style.stopScrollStyle : style.scroll
      }>
      <Meta
        title={title.length > 15 ? title.substring(0, 15) + '...' : title}
        description={description}
      />
      {nav !== false && <Header />}
      {nav !== false && <div className={style.empty}></div>}

      <Basket />
      <Notifications />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
