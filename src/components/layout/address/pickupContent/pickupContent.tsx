import { FC, useState } from 'react';

import Input from '@/components/other/input/input';

import style from './pickupContent.module.sass';

interface ICloseAside {
  closeAside: () => void;
}

const PickupContent: FC<ICloseAside> = ({ closeAside }) => {
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [apartment, setApartment] = useState(''); //квартира
  const [intercom, setIntercom] = useState(''); //домофон
  const [entrance, setEntrance] = useState(''); //подъезд
  const [floor, setFloor] = useState(''); //этаж

  return (
    <form className={style.form}>
      <div className={style.content}>
        <div className={style.margin}>
          <Input
            placeholder="Город"
            value={city}
            type="text"
            isNecessary={true}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>

      <button
        className={style.btn + ' ' + (!(street && apartment && city) ? style.disabled : '')}
        onClick={closeAside}>
        сохранить адрес
      </button>
    </form>
  );
};

export default PickupContent;
