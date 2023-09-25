import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import ProfileTitle from '../profile/profileTitle/Title';
import ProfileAside from '../profile/profileAside/profileAside';
import PointsCard from './pointsCard/pointsCard';
import CertificateCard from './certificateCard/certificateCard';
import AddCertificate from './addCertificate/addCertificate';
import Footer from '@/components/layout/footer/footer';

import style from './points.module.sass';

const PointsPage: FC = () => {
  return (
    <Layout title={'Баллы и сертификаты'}>
      <section className={style.wrap}>
        <div className={'wrap ' + style.content}>
          <div className={style.aside}>
            <ProfileAside activeMenu={2} setActiveProfileData={null} />
          </div>
          <div className={style.width}>
            <div className={style.title}>
              <ProfileTitle title="баллы и сертификаты" link={true} />
            </div>
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
