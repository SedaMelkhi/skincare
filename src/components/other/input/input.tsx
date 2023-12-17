import React, { FC } from 'react';

import style from './input.module.sass';

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Добавлено свойство onChange
}

const Input: FC<InputProps> = ({ placeholder, value, type, onChange }) => {
  return (
    <input
      className={style.input + ' ' + (value ? style.input_active : '')}
      placeholder={placeholder}
      type={type || 'text'}
      value={value || ''}
      onChange={onChange || ((event) => {})} // Используйте переданный обработчик onChange
    />
  );
};

export default Input;
