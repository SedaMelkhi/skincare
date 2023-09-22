import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import ProfileTitle from '../profile/profileTitle/Title';
import ProfileAside from '../profile/profileAside/profileAside';

import style from './favorite.module.sass';

const FavoritePage: FC = () => {
  return (
    <Layout title={'Фавориты'}>
      <section className={style.wrap}>
        <div className={'wrap ' + style.content}>
          <div className={style.aside}>
            <ProfileAside activeMenu={1} setActiveProfileData={null} />
          </div>
          <div className={style.width}>
            <ProfileTitle title="фавориты" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FavoritePage;
