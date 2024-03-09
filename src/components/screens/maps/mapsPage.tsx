import { FC, useState } from 'react';

import Layout from '@/components/layout/Layout';
import ProfileTitle from '../profile/profileTitle/Title';
import ProfileAside from '../profile/profileAside/profileAside';
import Footer from '@/components/layout/footer/footer';
import Tab from '@/components/other/tab/tab';
import InfoBlock from './infoBlock/infoBlock';
import Button from '@/components/other/button/button';

import sbpPng from './../../../../public/certificate/сбп.png';
import plusSvg from './../../../../public/certificate/plus.svg';

import style from './maps.module.sass';
import PayCard from './payCard/payCard';
import BasicPayCard from './basicPayCard/basicPayCard';

const MapsPage: FC = () => {
  const [activeEl, setActiveEl] = useState(0);

  return (
    <Layout title={'Адреса'}>
      <section className={style.wrap}>
        <div className={'wrap ' + style.content}>
          <div className={style.aside}>
            <ProfileAside activeMenu={3} setActiveProfileData={null} />
          </div>
          <div className={style.width}>
            <div className={style.title}>
              <ProfileTitle title="адреса и карты " link={true} />
            </div>
            <ProfileTitle title="адреса" link={false} />
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
              <div className={style.items}>
                <PayCard activeEl={activeEl} setActiveEl={setActiveEl} />
                <BasicPayCard
                  activeEl={activeEl}
                  setActiveEl={setActiveEl}
                  number={1}
                  image={plusSvg.src}
                />
                <BasicPayCard
                  activeEl={activeEl}
                  setActiveEl={setActiveEl}
                  number={2}
                  image={sbpPng.src}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MapsPage;
