import { FC, useEffect, useState } from 'react';
import { userInfoService } from '@/services/profile.service';
import Link from 'next/link';
import InputMask from 'react-input-mask';
import parsePhoneNumberFromString from 'libphonenumber-js';

import Input from '@/components/other/input/input';
import Button from '@/components/other/button/button';
import ProfileTitle from '../profileTitle/Title';

import style from './profileData.module.sass';

interface ProfileAsideProps {
  setActiveProfileData: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileData: FC<ProfileAsideProps> = ({ setActiveProfileData }) => {
  const [phoneError, setPhoneError] = useState('');
  const [phone, setPhone] = useState('');
  //const [data, setData] = useState();
  // useEffect(() => {
  //   const data = userInfoService.getUserInfo();
  //   data.then((res) => setData(res));
  // }, []);
  // console.log(data);
  const handlePhoneChange = (event: any) => {
    const input = event.target.value;
    setPhone(input);

    const phone = parsePhoneNumberFromString(input, 'RU'); // Укажите здесь нужный регион
    if (!phone || !phone.isValid()) {
      setPhoneError('Введите действительный номер телефона.');
    } else {
      setPhoneError('');
    }
  };
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
        </span>
        мой профиль
      </div>
      <ProfileTitle title="привет, User" link={false} />
      <form className={style.form}>
        <div className={style.input}>
          <Input placeholder="Фамилия" value="" />
        </div>
        <div className={style.input}>
          <Input placeholder="Имя" value="User" />
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
          <InputMask
            mask="+7 (999) 999-99-99"
            maskChar={null}
            className={style.input_field + ' ' + (phoneError ? style.error_border : '')}
            type="tel"
            placeholder="Номер телефона *"
            required
            value={phone}
            onChange={handlePhoneChange}
          />
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
