import { FC } from 'react';
import style from './header.module.sass';
import Catalog from './catalog/catalog';
import Search from './search/search';
import Logo from './logo/logo';
import Profile from './profile/profile';
import Save from './save/save';
import Basket from './basket/basket';

const Header: FC = () => {
  return (
    <div className="wrap">
      <header className={style.header}>
        <nav className={style.group + ' ' + style.nav}>
          <Catalog />
          <Search />
        </nav>
        <Logo />
        <div className={style.group}>
          <Profile />
          <Save />
          <Basket />
        </div>
      </header>
    </div>
  );
};
export default Header;
