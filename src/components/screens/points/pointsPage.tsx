import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import ProfileTitle from '../profile/profileTitle/Title';
import ProfileAside from '../profile/profileAside/profileAside';
import CardProduct from '@/components/other/cardProduct/cardProduct';
import Tab from '@/components/other/tab/tab';

import style from './points.module.sass';

const PointsPage: FC = () => {
  return (
    <Layout title={'баллы и сертификаты'}>
      <section className={style.wrap}>
        <div className={'wrap ' + style.content}>
          <div className={style.aside}>
            <ProfileAside activeMenu={2} setActiveProfileData={null} />
          </div>
          <div className={style.width}>
            <ProfileTitle title="баллы" />
            <ProfileTitle title="подарочные сертификаты" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PointsPage;
