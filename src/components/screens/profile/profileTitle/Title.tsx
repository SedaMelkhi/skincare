import { FC } from 'react';
import Link from 'next/link';

import arrowSvg from './../../../../../public/arrowLeft.svg';

import style from './profileTitle.module.sass';

interface ProfileTitleProps {
  title: string;
}

const ProfileTitle: FC<ProfileTitleProps> = ({ title }) => {
  return (
    <Link href="/profile" className={style.title}>
      <img src={arrowSvg.src} alt="" />
      {title}
    </Link>
  );
};

export default ProfileTitle;
