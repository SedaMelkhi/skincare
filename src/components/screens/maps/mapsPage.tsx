import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import ProfileTitle from '../profile/profileTitle/Title';
import ProfileAside from '../profile/profileAside/profileAside';
import Footer from '@/components/layout/footer/footer';
import Tab from '@/components/other/tab/tab';
import InfoBlock from './infoBlock/infoBlock';

import style from './maps.module.sass';
import Button from '@/components/other/button/button';

const MapsPage: FC = () => {
  return (
    <Layout title={'баллы и сертификаты'}>
      <section className={style.wrap}>
        <div className={'wrap ' + style.content}>
          <div className={style.aside}>
            <ProfileAside activeMenu={3} setActiveProfileData={null} />
          </div>
          <div className={style.width}>
            <div className={style.title}>
              <ProfileTitle title="адреса и карты " link={true} />
            </div>
            <ProfileTitle title="адреса" link={true} />
            <div className={style.tabs}>
              <Tab text="пункт выдачи" link="maps" active={true} />
              <Tab text="курьером" link="byCourier" active={false} />
            </div>
            <div className={style.address}>
              <InfoBlock
                title="почта россии"
                text="г. Грозный ( Чеченская Республика ), проспект Мухаммеда Али ( бывший проспект Кирова ), д 2А"
              />
            </div>
            <div className={style.address}>
              <InfoBlock
                title="пункт выдачи сдэк"
                text="г. Грозный ( Чеченская Республика ), проспект Мухаммеда Али ( бывший проспект Кирова ), д 2А "
              />
            </div>
            <div className={style.btn}>
              <Button text="добавить новый адрес" height="44px" fontSize="14px" />
            </div>
            <div className={style.pay}>
              <ProfileTitle title="способ оплаты" link={false} />
            </div>
          </div>
        </div>
      </section>
      <Footer data={[]} />
    </Layout>
  );
};

export default MapsPage;
