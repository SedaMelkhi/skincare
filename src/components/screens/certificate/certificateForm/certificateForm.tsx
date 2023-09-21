import {FC, useState} from 'react';
import {registerLocale, setDefaultLocale} from 'react-datepicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import ru from 'date-fns/locale/ru';

registerLocale('ru', ru)

import style from './CertificateForm.module.sass'
import {getDate} from "date-fns";
import CertificateModalWindow from "@/components/screens/certificate/certificateModalWindow/certificateModalWindow";

const CertificateForm: FC = () => {
    const [modalActive, setModelActive]=useState(false)
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);

    }
    return (
        <div className={style.main}>
            <div className={style.titleMain}>
                <div className={style.num}>1/4</div>
                <h3 className={style.title}>данные получателя карты </h3>
            </div>
            <form className={style.form}>
                <input className={style.payee} type="text" id="name" name="name" placeholder="Имя *"/>
                <input className={style.payee} type="text" id="surname" name="surname" placeholder="Фамилия *"/>
                <input className={style.payee} type="number" id="tel" name="tel" placeholder="Номер телефона *"/>

                <div className={style.titleMain}>
                    <div className={style.num2}>2/4</div>
                    <h3 className={style.title}>выбери сумму </h3>
                </div>
                <div className={style.container}>
                    <div className={style.row}>
                        <button className={style.btn}>500₽</button>
                        <button className={style.btn}>1.000₽</button>
                        <button className={style.btn}>2.500₽</button>
                    </div>
                    <div className={style.row}>
                        <button className={style.btn}>5.000₽</button>
                        <button className={style.btn}>7.500₽</button>
                        <button className={style.btn}>10.000₽</button>
                    </div>
                </div>
                <div>
                    <input type="number" className={style.sum} id="tel" name="tel" placeholder="Выбрать сумму *"/></div>

                <div className={style.titleMain}>
                    <div className={style.num3}>3/4</div>
                    <h3 className={style.title}>Напиши добрые слова </h3>
                </div>
                <div>
                    <textarea className={style.message} name="text" placeholder="Дорогая..."></textarea></div>
                <label className={style.checkbox} htmlFor="myCheckbox">Упомянуть от кого</label>
                <input className={style.checkbox__box} type="checkbox" id="myCheckbox" name="myCheckbox" value="1"/>
                <input type='text' className={style.sender} placeholder="Tвоя красивая сестра :)"/>

                <div className={style.titleMain}>
                    <div className={style.num4}>4/4</div>
                    <h3 className={style.title}>Дата получения </h3>
                </div>
                <span className={style.date}>
                    <DatePicker
                        showIcon
                        selected={selectedDate}
                        onChange={handleDateChange}
                        className={style.form__airDatepicker}
                        placeholderText="Выбрать дату"
                        dateFormat='dd.MM.yyyy'
                        locale="ru"
                        minDate={new Date()}

                    /></span>
                <button className={style.pay} onClick={()=>setModelActive(true)}>оплатить</button>
            </form>
            {modalActive && <CertificateModalWindow active={modalActive} setActive={setModelActive} />}
        </div>


    )
        ;

}

export default CertificateForm;