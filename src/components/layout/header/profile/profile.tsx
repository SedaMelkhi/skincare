import Link from 'next/link';
import { FC } from 'react';
import style from './profile.module.sass';

const Profile: FC = () => {
  return (
    <Link href="/profile" className={style.profile}>
      <img src="./user.svg" alt="" />
    </Link>
  );
};
export default Profile;
