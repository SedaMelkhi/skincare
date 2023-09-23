import { FC } from 'react';
import Link from 'next/link';

import Input from '@/components/other/input/input';
import Button from '@/components/other/button/button';

import style from './profileData.module.sass';
import ProfileTitle from '../profileTitle/Title';

interface ProfileAsideProps {
  setActiveProfileData: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileData: FC<ProfileAsideProps> = ({ setActiveProfileData }) => {
  return (
    <div className={style.data}>
      <div className={style.back} onClick={() => setActiveProfileData((prev) => !prev)}>
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.8"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9091 5.46875L7.37874 11.9991L13.9091 18.5294L14.9697 17.4688L9.50006 11.9991L14.9697 6.52941L13.9091 5.46875Z"
              fill="#19171A"
            />
          </svg>
        </span>{' '}
        мой профиль
      </div>
      <ProfileTitle title="привет, Мария" link={false} />
      <form className={style.form}>
        <div className={style.input}>
          <Input value="Мария" />
        </div>
        <div className={style.input}>
          <Input placeholder="Мария" value="Адамова" />
        </div>
        <div className={style.input}>
          <Input placeholder="Отчество" />
        </div>
        <div className={style.input}>
          <Input placeholder="Дата рождения" />
        </div>
        <div className={style.input}>
          <Input value="E-mail" />
        </div>
        <div className={style.input}>
          <Input placeholder="+7 (___) ___-__-__" />
        </div>
        <Link href="" className={style.link}>
          Изменить пароль
        </Link>
        <Button text="сохранить" />
      </form>
    </div>
  );
};

export default ProfileData;
