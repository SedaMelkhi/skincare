import {FC, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


import style from './CertificateForm.module.sass'

const CertificateForm: FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);

    }
    return (
        <div>
            <div className={style.main}>
                <div className={style.num}>1/4</div>
                <h3 className={style.title}>данные получателя карты </h3>
            </div>
            <form className={style.form}>
                <input className={style.payee} type="text" id="name" name="name" placeholder="Имя *"/>
                <input className={style.payee} type="text" id="surname" name="surname" placeholder="Фамилия *"/>
                <input className={style.payee} type="number" id="tel" name="tel" placeholder="Номер телефона *"/>

                <div>
                    <div className={style.num2}>2/4</div>
                    <h3 className={style.title}>выбери сумму </h3>
                    <div className={style.canteiner}>
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
                </div>
                <div>
                    <div className={style.num3}>3/4</div>
                    <h3 className={style.title}>Напиши добрые слова </h3>
                </div>
                <textarea className={style.message} name="text" placeholder="Дорогая..."></textarea>
                <label htmlFor="myCheckbox">Упомянуть от кого</label>
                <input type="checkbox" id="myCheckbox" name="myCheckbox" value="1"/>

                <div>
                    <div className={style.num}>4/4</div>
                    <h3 className={style.title}>Дата получения </h3>
                </div>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    className={style.form__airDatepicker}
                    placeholderText="Выбрать дату*"
                    dateFormat='dd.MM.yyyy'
                    locale="ru"
                />
            </form>
        </div>


    )
        ;

}

export default CertificateForm;