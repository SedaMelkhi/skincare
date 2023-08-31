import { FC, useState } from 'react';

import Catalog from './catalog/catalog';
import Search from './search/search';
import Logo from './logo/logo';
import Profile from './profile/profile';
import Save from './save/save';
import Basket from './basket/basket';

import style from './header.module.sass';
import DropDownMenu from './dropDownMenu/dropDownMenu';

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={style.header__wrap}>
      <div className="wrap">
        <header className={style.header}>
          <nav className={style.group + ' ' + style.nav}>
            <Catalog menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Search />
          </nav>
          <div className={style.logo}>
            <Logo />
          </div>
          <div className={style.group + ' ' + style.group_right}>
            <Profile />
            <Save />
            <Basket />
          </div>
        </header>
        <div className={style.menu}>{menuOpen && <DropDownMenu />}</div>
      </div>
    </div>
  );
};
export default Header;
