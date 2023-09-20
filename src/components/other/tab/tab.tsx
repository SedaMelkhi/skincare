import { FC } from 'react';

import style from './tab.module.sass';

interface TabProps {
  text: string;
  active: boolean;
}

const Tab: FC<TabProps> = ({ text, active }) => {
  return <div className={style.tab + ' ' + (active ? style.active : '')}>{text}</div>;
};

export default Tab;
