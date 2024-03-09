import { FC } from 'react';
import Link from 'next/link';

import style from './address.module.sass';

interface AddressProps {
  text: string;
  link: string;
}

const Address: FC<AddressProps> = ({ text, link }) => {
  return (
    <div className={style.data}>
      <div className={style.grey}>Адрес доставки</div>
      <Link href={link} target="_blank" className={style.link}>
        {text}
      </Link>
    </div>
  );
};

export default Address;
