import Link from 'next/link';
import { FC } from 'react';
import style from './profile.module.sass';

const Profile: FC = () => {
  return (
    <div className={style.profile}>
      <img src="./user.svg" alt="" />
    </div>
  );
};
export default Profile;
