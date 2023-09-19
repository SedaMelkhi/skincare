import { FC } from 'react';

import style from './Button.module.sass';

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return <button className={style.btn}>{text}</button>;
};

export default Button;
