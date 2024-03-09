import { FC } from 'react';

import style from './title.module.sass';

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return <h2 className={style.title}>{text}</h2>;
};
export default Title;
