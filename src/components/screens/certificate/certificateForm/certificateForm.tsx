import { FC, useState } from 'react';

import { registerLocale } from 'react-datepicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import icon from './../../../../../public/certificate/calendar.svg';
import arrow from './../../../../../public/certificate/arrow.svg';
import ru from 'date-fns/locale/ru';

import CertificateModalWindow from '@/components/screens/certificate/certificateModalWindow/certificateModalWindow';

import style from './CertificateForm.module.sass';

const CertificateForm: FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <div className={style.main}>
      <div className={style.titleMain}>
        <div className={style.num}>1/4</div>
        <h3 className={style.title}>данные получателя карты </h3>
      </div>
      <form className={style.form}>
        <input className={style.payee} type="text" id="name" name="name" placeholder="Имя *" />
        <input
          className={style.payee}
          type="text"
          id="surname"
          name="surname"
          placeholder="Фамилия *"
        />
        <input
          className={style.payee}
          type="number"
          id="tel"
          name="tel"
          placeholder="Номер телефона *"
        />

        <div className={style.titleMain}>
          <div className={style.num2}>2/4</div>
          <h3 className={style.title}>выбери сумму </h3>
        </div>
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.btn}>500₽</div>
            <div className={style.btn}>1.000₽</div>
            <div className={style.btn}>2.500₽</div>
          </div>
          <div className={style.row}>
            <div className={style.btn}>5.000₽</div>
            <div className={style.btn}>7.500₽</div>
            <div className={style.btn}>10.000₽</div>
          </div>
        </div>
        <div>
          <input
            type="number"
            className={style.sum}
            id="tel"
            name="tel"
            placeholder="Выбрать сумму *"
          />
        </div>

        <div className={style.titleMain}>
          <div className={style.num3}>3/4</div>
          <h3 className={style.title}>Напиши добрые слова </h3>
        </div>
        <div>
          <textarea className={style.message} name="text" placeholder="Дорогая..."></textarea>
        </div>
        <div className={style.checkbox}>
          <label className={style.checkbox__text} htmlFor="myCheckbox">
            Упомянуть от кого
          </label>
          <input
            className={style.checkbox__input}
            type="checkbox"
            id="myCheckbox"
            name="myCheckbox"
            value="1"
          />
        </div>
        <div>
          <input type="text" className={style.sender} placeholder="Tвоя красивая сестра :)" />
        </div>

        <div className={style.titleMain}>
          <div className={style.num4}>4/4</div>
          <h3 className={style.title}>Дата получения </h3>
        </div>
        <span className={style.date}>
          <DatePicker
            showIcon
            selected={selectedDate}
            onChange={handleDateChange}
            className={style.date__picker}
            placeholderText="Выбрать дату"
            dateFormat="dd.MM.yyyy"
            locale="ru"
            minDate={new Date()}
          />
          <img className={style.date__icon} alt="icon" src={icon.src} />
          <img className={style.date__arrow} alt="arrow" src={arrow.src} />
        </span>

        <button
          className={style.pay}
          onClick={(event) => {
            event.preventDefault();
            setModalActive(true);
          }}>
          оплатить
        </button>
      </form>
      {modalActive && <CertificateModalWindow active={modalActive} setActive={setModalActive} />}
    </div>
  );
};

registerLocale('ru', ru);

export default CertificateForm;
