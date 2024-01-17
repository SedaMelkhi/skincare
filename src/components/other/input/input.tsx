import React, { ChangeEvent, FC } from 'react';

import starSvg from './../../../../public/inputStar.svg';

import style from './input.module.sass';

interface InputProps {
  placeholder?: string;
  value?: any;
  type?: string;
  isNecessary?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // Добавлено свойство onChange
}

const Input: FC<InputProps> = ({ placeholder, value, type, onChange, isNecessary }) => {
  return (
    <div className={style.input__wrap}>
      <input
        className={style.input + ' ' + (value ? style.input_active : '')}
        placeholder={placeholder}
        type={type || 'text'}
        value={value || ''}
        onChange={onChange || ((event) => {})} // Используйте переданный обработчик onChange
      />
      {!value && (
        <div className={style.text}>
          <span>{placeholder}</span> {isNecessary && <img src={starSvg.src} alt="" />}
        </div>
      )}
    </div>
  );
};

export default Input;
