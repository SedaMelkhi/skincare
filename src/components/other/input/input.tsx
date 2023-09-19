import { FC } from 'react';

import style from './input.module.sass';

interface Input {
  placeholder?: string;
  value?: string;
}

const Input: FC<Input> = ({ placeholder, value }) => {
  return (
    <input
      type="text"
      className={style.input + ' ' + (value ? style.input_active : '')}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
