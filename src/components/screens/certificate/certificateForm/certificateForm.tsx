import {FC} from 'react';

import style from './CertificateForm.module.sass'

const CertificateForm: FC = () => {
    return (
        <div>
            <div>
                <div className={style.num} >1/4</div>
                <h3 className={style.title}>данные получателя карты </h3>
            </div>
            <form className={style.form}>
                <input type="text" id="name" name="name" placeholder="Имя*"/>
                <input type="text" id="surname" name="surname" placeholder="Фамилия*"/>
                <input type="number" id="tel" name="tel" placeholder="Номер телефона*"/>

            </form>
        </div>

    )
        ;
}

export default CertificateForm;