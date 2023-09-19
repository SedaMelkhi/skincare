import { FC, useState } from 'react';

import Layout from '@/components/layout/Layout';

import ProfileAside from './profileAside/profileAside';
import ProfileData from './profileData/profileData';

import style from './profile.module.sass';

const ProfilePage: FC = () => {
  const [activeProfileData, setActiveProfileData] = useState(true);
  return (
    <Layout title="Личный кабинет">
      <div className={style.profile__wrap}>
        <div className={'wrap ' + style.profile}>
          <div className={!activeProfileData ? style.hidden : ''}>
            <ProfileAside setActiveProfileData={setActiveProfileData} />
          </div>
          <div className={activeProfileData ? style.hidden : ''}>
            <ProfileData setActiveProfileData={setActiveProfileData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
