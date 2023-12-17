import Link from 'next/link';
import { FC } from 'react';

import user from './../../../../../public/user.svg';

import style from './profile.module.sass';

const ProfileLogo: FC = () => {
  let token;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token') || false;
  }
  return (
    <Link href={token ? '/profile' : '/authorization'} className={style.profile}>
      <img src={user.src} alt="" />
    </Link>
  );
};
export default ProfileLogo;
