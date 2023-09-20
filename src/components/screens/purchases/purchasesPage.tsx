import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import ProfileTitle from '../profile/profileTitle/Title';
import ProfileAside from '../profile/profileAside/profileAside';
import Tab from '@/components/other/tab/tab';
import Window from '@/components/other/window/window';

import style from './purchases.module.sass';

const PurchasesPage: FC = () => {
  return (
    <Layout title={'Мои покупки'}>
      <section className={style.wrap}>
        <div className={'wrap ' + style.purchases}>
          <ProfileAside activeMenu={0} setActiveProfileData={null} />
          <div>
            <ProfileTitle title="покупки" />
            <div className={style.tabs}>
              <Tab text="В пути" active={true} />
              <Tab text="история покупок" active={false} />
            </div>
            <div className={style.window}>
              <Window title="заказ #3123" price={5000} status="waiting" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PurchasesPage;
