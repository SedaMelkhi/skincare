import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import ProfileTitle from '../profile/profileTitle/Title';
import ProfileAside from '../profile/profileAside/profileAside';
import PointsCard from './pointsCard/pointsCard';
import CertificateCard from './certificateCard/certificateCard';

import style from './points.module.sass';
import AddCertificate from './addCertificate/addCertificate';
import Footer from '@/components/layout/footer/footer';

const PointsPage: FC = () => {
  return (
    <Layout title={'баллы и сертификаты'}>
      <section className={style.wrap}>
        <div className={'wrap ' + style.content}>
          <div className={style.aside}>
            <ProfileAside activeMenu={2} setActiveProfileData={null} />
          </div>
          <div className={style.width}>
            <ProfileTitle title="баллы и сертификаты" link={true} />
            <ProfileTitle title="баллы" link={false} />
            <PointsCard />
            <ProfileTitle title="подарочные сертификаты" link={false} />
            <CertificateCard />
            <AddCertificate />
          </div>
        </div>
      </section>
      <Footer data={[]} />
    </Layout>
  );
};

export default PointsPage;
