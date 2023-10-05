import React, {FC, useState} from 'react';
import style from './ModalPaidConsultation.module.sass';

interface ModalPaidConsultationProps {
    active: boolean;
    setActive: (active: boolean) => void;
}
const CertificateModalWindow: FC<ModalPaidConsultationProps> = ({ active, setActive }) => {

    return (
        <div className={style.modal}>
            <div className={style.title}></div>
            <input className={style.name}/>
            <input className={style.tel}/>
            <div><label>С вами связаться через:</label>
                <input type="checkbox"/>
                <input type="checkbox"/></div>


            <button className={style.closeButton} >Записаться</button>

        </div>
    );
};

export default CertificateModalWindow;
