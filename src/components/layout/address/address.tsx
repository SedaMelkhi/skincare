import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router';
import { setIsAddressOpen } from '@/redux/addressSlice/addressSlice';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import AsideHeader from './asideHeader/asideHeader';
import CourierContent from './courierContent/courierContent';
import PickupContent from './pickupContent/pickupContent';

import style from './address.module.sass';

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

interface IMapData {
  type: string;
  id: string;
  geometry: { type: string; coordinates: number[] };
  properties: {
    balloonContentHeader: string;
    balloonContentBody: string;
    balloonContentFooter: string;
  };
  work_time_list: string;
}

const Address: FC = () => {
  const isAddressOpen = useSelector((state: IAddressState) => state.address.isAddressOpen);
  const type = useSelector((state: IType) => state.address.type);
  const dispatch = useDispatch();
  const router = useRouter();
  const mapData: IMapData[] = useSelector((state: any) => state.address.mapData);
  const defaultState = {
    center: mapData[0] ? mapData[0].geometry.coordinates : [0, 0],
    zoom: 5,
  };

  const closeAside = () => {
    dispatch(setIsAddressOpen(false));
  };

  useEffect(() => {
    closeAside();
  }, [router]);

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
          <div className={style.empty}>
            <div className={style.closeBlock} onClick={closeAside}></div>
            {type === 'pickup' && (
              <div className={style.map}>
                <YMaps>
                  <Map defaultState={defaultState} width={100}>
                    {mapData.map(({ geometry, properties }) => (
                      <Placemark
                        geometry={geometry.coordinates}
                        properties={properties}
                        onClick={() => console.log(properties, geometry)}
                      />
                    ))}
                  </Map>
                </YMaps>
              </div>
            )}
          </div>
          <div className={style.aside}>
            <AsideHeader
              title={
                type === 'courier'
                  ? 'АДРЕС ДОСТАВКИ'
                  : type === 'point'
                  ? 'магазин skincare agents'
                  : type === 'pickup'
                  ? 'выбор пункта выдачи'
                  : ''
              }
              closeAside={closeAside}
            />
            {type === 'courier' && <CourierContent closeAside={closeAside} />}
            {type === 'pickup' && <PickupContent closeAside={closeAside} />}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
export default Address;
