import { FC } from 'react';

import style from './menuItem.module.sass';

import Link from 'next/link';

interface MenuItemProps {
  link: string;
  text: string;
  active: boolean;
}

const MenuItem: FC<MenuItemProps> = ({ link, text, active }) => {
  return (
    <Link href={link} className={style.menu__item}>
      <div className={style.item}>
        {active && (
          <svg
            width="32"
            height="13"
            viewBox="0 0 32 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.4524 2.16602L26.6663 6.49935M22.4524 10.8327L26.6663 6.49935M26.6663 6.49935H22.4524L5.33301 6.49935"
              stroke="#A756D9"
            />
          </svg>
        )}
        <div>{text}</div>
      </div>
    </Link>
  );
};

export default MenuItem;
