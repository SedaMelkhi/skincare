import { FC, useState } from 'react';

import style from './input.module.sass';

interface Input {
  placeholder?: string;
  value?: string;
}

const Input: FC<Input> = ({ placeholder, value }) => {
  const [data, setData] = useState(value || '');
  return (
    <input
      type="text"
      className={style.input + ' ' + (value ? style.input_active : '')}
      placeholder={placeholder}
      value={data}
      onChange={(event) => setData(event.target.value)}
    />
  );
};

export default Input;
