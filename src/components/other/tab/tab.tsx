import { FC } from 'react';
import Link from 'next/link';

import style from './tab.module.sass';

interface TabProps {
  text: string;
  link: string;
  active: boolean;
}

const Tab: FC<TabProps> = ({ text, link, active }) => {
  return (
    <Link href={link} className={style.tab + ' ' + (active ? style.active : '')}>
      {text}
    </Link>
  );
};

export default Tab;
