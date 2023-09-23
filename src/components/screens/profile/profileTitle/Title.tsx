import { FC } from 'react';
import Link from 'next/link';

import arrowSvg from './../../../../../public/arrowLeft.svg';

import style from './profileTitle.module.sass';

interface ProfileTitleProps {
  title: string;
  link: boolean;
}

const ProfileTitle: FC<ProfileTitleProps> = ({ title, link }) => {
  return link ? (
    <Link href="/profile" className={style.title}>
      <img src={arrowSvg.src} alt="" />
      {title}
    </Link>
  ) : (
    <div className={style.title}>{title}</div>
  );
};

export default ProfileTitle;
