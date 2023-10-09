import { FC } from 'react';

import style from './Button.module.sass';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  height?: string;
  fontSize?: string;
  link?: string;
}

const Button: FC<ButtonProps> = ({ text, height, fontSize, link }) => {
  return link ? (
    <Link href={link}>
      <button
        className={style.btn}
        style={{ height: height ? height : '50px', fontSize: fontSize ? fontSize : '16px' }}>
        {text}
      </button>
    </Link>
  ) : (
    <button
      className={style.btn}
      style={{ height: height ? height : '50px', fontSize: fontSize ? fontSize : '16px' }}>
      {text}
    </button>
  );
};

export default Button;
