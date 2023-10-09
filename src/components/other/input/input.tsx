import { FC, useState } from 'react';

import style from './input.module.sass';

interface Input {
  placeholder?: string;
  value?: string;
  type?: string;
}

const Input: FC<Input> = ({ placeholder, value, type }) => {
  const [data, setData] = useState(value || '');
  return (
    <input
      className={style.input + ' ' + (value ? style.input_active : '')}
      placeholder={placeholder}
      type={type ? type : 'text'}
      value={data}
      onChange={(event) => setData(event.target.value)}
    />
  );
};

export default Input;
