import { FC } from 'react';

import ProfileAside from '../profile/profileAside/profileAside';
import Layout from '@/components/layout/Layout';

import style from './purchases.module.sass';

const PurchasesPage: FC = () => {
  return (
    <Layout title={'Мои покупки'}>
      <section className={style.wrap}>
        <div className="wrap">
          <ProfileAside activeMenu={0} setActiveProfileData={null} />
        </div>
      </section>
    </Layout>
  );
};

export default PurchasesPage;
