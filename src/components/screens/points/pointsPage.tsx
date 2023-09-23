import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import ProfileTitle from '../profile/profileTitle/Title';
import ProfileAside from '../profile/profileAside/profileAside';
import PointsCard from './pointsCard/pointsCard';

import style from './points.module.sass';

const PointsPage: FC = () => {
  return (
    <Layout title={'баллы и сертификаты'}>
      <section className={style.wrap}>
        <div className={'wrap ' + style.content}>
          <div className={style.aside}>
            <ProfileAside activeMenu={3} setActiveProfileData={null} />
          </div>
          <div className={style.width}>
            <ProfileTitle title="баллы" />
            <PointsCard />
            <ProfileTitle title="подарочные сертификаты" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PointsPage;
