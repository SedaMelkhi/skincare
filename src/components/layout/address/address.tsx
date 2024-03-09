import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router';
import { setIsAddressOpen } from '@/redux/addressSlice/addressSlice';

import AsideHeader from './asideHeader/asideHeader';
import CourierContent from './courierContent/courierContent';
import PickupContent from './pickupContent/pickupContent';
import YandexMap from './yandexMap/yandexMap';

import style from './address.module.sass';
import PickupMap from './pickupMap/PickupMap';
import PointContent from './pointContent/pointContent';

interface IAddressState {
  address: {
    isAddressOpen: boolean;
  };
}

interface IType {
  address: {
    type: string;
  };
}

interface IWorkTimeList {
  day: number;
  time: string;
}

interface IAddressObj {
  geometry: { coordinates: number[]; type: string };
  id: string;
  properties: {
    balloonContentBody: string;
    balloonContentFooter: string;
    balloonContentHeader: string;
  };
  type: 'Feature';
  work_time_list: IWorkTimeList[];
}

const Address: FC = () => {
  const isAddressOpen = useSelector((state: IAddressState) => state.address.isAddressOpen);
  const type = useSelector((state: IType) => state.address.type);
  const dispatch = useDispatch();
  const router = useRouter();
  const [activeAddress, setActiveAddress] = useState<IAddressObj | null>(null);
  const closeAside = () => {
    dispatch(setIsAddressOpen(false));
  };

  useEffect(() => {
    closeAside();
  }, [router]);
  console.log(activeAddress);

  return (
    <CSSTransition
      in={isAddressOpen}
      timeout={400}
      classNames={{
        enter: style.slideEnter,
        enterActive: style.slideEnterActive,
        exit: style.slideExit,
        exitActive: style.slideExitActive,
      }}
      unmountOnExit>
      <div>
        <div className={style.aside__wrap}>
          <div className={style.empty + ' ' + (type === 'pickup' ? style.empty_small : '')}>
            <div className={style.closeBlock} onClick={closeAside}></div>
            {type === 'point' && (
              <div className={style.map}>
                <YandexMap setActiveAddress={setActiveAddress} />
              </div>
            )}
            {type === 'pickup' && (
              <div className={style.map}>
                <PickupMap />
              </div>
            )}
          </div>
          <div className={style.aside + ' ' + (type === 'pickup' ? style.aside_small : '')}>
            <AsideHeader
              title={
                type === 'courier'
                  ? 'АДРЕС ДОСТАВКИ'
                  : type === 'point'
                  ? 'выбор пункта выдачи'
                  : type === 'pickup'
                  ? 'магазин skincare agents'
                  : ''
              }
              closeAside={closeAside}
            />
            {type === 'courier' && <CourierContent closeAside={closeAside} />}
            {type === 'point' && (
              <PointContent closeAside={closeAside} activeAddress={activeAddress} />
            )}
            {type === 'pickup' && <PickupContent />}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
export default Address;
