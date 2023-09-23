import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import ProfileTitle from '../profile/profileTitle/Title';
import ProfileAside from '../profile/profileAside/profileAside';
import PointsCard from './pointsCard/pointsCard';

import style from './points.module.sass';
import CertificateCard from './pointsCard/certificateCard/certificateCard';

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
            <PointsCard />
            <ProfileTitle title="подарочные сертификаты" />
            <CertificateCard />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PointsPage;
