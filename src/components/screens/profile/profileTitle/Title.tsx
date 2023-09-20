import { FC } from 'react';

import style from './profileTitle.module.sass';

interface ProfileTitleProps {
  title: string;
}

const ProfileTitle: FC<ProfileTitleProps> = ({ title }) => {
  return <div className={style.title}>{title}</div>;
};

export default ProfileTitle;
