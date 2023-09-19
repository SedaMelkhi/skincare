import Link from 'next/link';
import { FC } from 'react';

import user from './../../../../../public/user.svg';

import style from './profile.module.sass';

const ProfileLogo: FC = () => {
  return (
    <Link href="/authorization" className={style.profile}>
      <img src={user.src} alt="" />
    </Link>
  );
};
export default ProfileLogo;
