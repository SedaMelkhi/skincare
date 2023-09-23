import { FC } from 'react';

import style from './Button.module.sass';

interface ButtonProps {
  text: string;
  height?: string;
  fontSize?: string;
}

const Button: FC<ButtonProps> = ({ text, height, fontSize }) => {
  return (
    <button
      className={style.btn}
      style={{ height: height ? height : '50px', fontSize: fontSize ? fontSize : '16px' }}>
      {text}
    </button>
  );
};

export default Button;
