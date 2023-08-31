import Link from 'next/link';
import { FC } from 'react';

import user from './../../../../../public/user.svg';

import style from './profile.module.sass';

const Profile: FC = () => {
  return (
    <Link href="/profile" className={style.profile}>
      <img src={user.src} alt="" />
    </Link>
  );
};
export default Profile;
