import Link from 'next/link';
import { FC, useState, useEffect } from 'react';

import user from './../../../../../public/user.svg';

import style from './profile.module.sass';

const ProfileLogo: FC = () => {
  const [href, setHref] = useState('/authorization'); // Устанавливаем начальное состояние

  useEffect(() => {
    // Этот код выполняется только на клиенте
    const token = localStorage.getItem('token');
    if (token) {
      setHref('/profile'); // Обновляем состояние, если пользователь авторизован
    }
  }, []); // Пустой массив зависимостей гарантирует, что эффект выполнится только один раз

  return (
    <Link href={href} className={style.profile}>
      <img src={user.src} alt="" />
    </Link>
  );
};

export default ProfileLogo;
