import { FC, useEffect, useState } from 'react';
import { userInfoService } from '@/services/profile.service';

import Layout from '@/components/layout/Layout';

import ProfileAside from './profileAside/profileAside';
import ProfileData from './profileData/profileData';

import style from './profile.module.sass';

interface IUserData {
  birthday: string;
  email: string;
  lastName: string;
  loginPhone: string;
  name: string;
  secondName: string;
  userId: number;
}

const ProfilePage: FC = () => {
  const [activeProfileData, setActiveProfileData] = useState(true);
  const [userData, setUserData] = useState<IUserData>({
    birthday: '',
    email: '',
    lastName: '',
    loginPhone: '',
    name: '',
    secondName: '',
    userId: 0,
  });
  useEffect(() => {
    userInfoService.getUserInfo().then(setUserData);
  }, []);
  return (
    <Layout title="Личный кабинет">
      <div className={style.profile__wrap}>
        <div className={'wrap ' + style.profile}>
          <div className={!activeProfileData ? style.hidden : ''}>
            <ProfileAside setActiveProfileData={setActiveProfileData} userData={userData} />
          </div>
          <div className={activeProfileData ? style.hidden : ''}>
            <ProfileData
              setActiveProfileData={setActiveProfileData}
              userData={userData}
              setUserData={setUserData}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
