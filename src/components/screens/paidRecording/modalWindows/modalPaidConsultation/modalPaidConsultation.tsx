import React, {FC, useState} from 'react';
import style from './ModalPaidConsultation.module.sass';
import ModalPay from "@/components/screens/paidRecording/modalWindows/modalPaidConsultation/modalPay/modalPay";
import ModalSuccessfulRegistration
    from "@/components/screens/paidRecording/modalWindows/modalPaidConsultation/ModalSuccessfulRegistration/ModalSuccessfulRegistration";


interface ModalPaidConsultationProps {
    active: boolean;
    setActive: (active: boolean) => void;
    setModalPayActive: (active: boolean) => void;
    buttonText: string;
}

const ModalPaidConsultation: FC<ModalPaidConsultationProps> = ({active, setActive, setModalPayActive, buttonText  }) => {

    const [isModalPayOpen, setIsModalPayOpen] = React.useState(false);
    const [isModalSuccessfulRegistrationOpen, setIsModalSuccessfulRegistrationOpen] = React.useState(false);

    const handleButtonClick = () => {
        setActive(false);
        setModalPayActive(true);
    };

    const handleRegistrationButtonClick = () => {
        setActive(false);
        setIsModalPayOpen(true);
    };
    return (
        <div className={active ? `${style.active} ${style.modal}` : style.modal} onClick={() => setActive(false)}>
            <div
                className={style.modal__content}
                onClick={(e) => {
                    e.stopPropagation();
                }}>
                <div className={style.close} onClick={() => setActive(false)}>
                    <img alt="close" src={'./certificate/close.png'} className={style.closeImg}/>
                </div>


                <div className={style.title}>данные</div>
                <form>
                    <input className={style.name} type="text" id="name" name="name" placeholder="Имя*"/>
                    <input className={style.tel} type="text" id="tel" name="tel" placeholder="Номер телефона*"/>
                    <div className={style.subtitle}>С вами связаться через:</div>
                    <div className={style.chackbox__main}>
                        <div className={style.chackbox__telegram}>
                            <img src='./paidRecording/telegram.svg' className={style.chackbox__telegramImg}/>
                            <label htmlFor="telegram" className={style.chackbox__telegramText}>Telegram</label>
                            <input className={style.chackbox} type="checkbox" id="telegram"/>
                        </div>
                        <div className={style.chackbox__whatsapp}>
                            <img src='./paidRecording/whatsapp.svg' className={style.chackbox__whatsappImg}/>
                            <label htmlFor="whatsapp" className={style.chackbox__whatsappText}>Whatsapp</label>
                            <input className={style.chackbox} type="checkbox" id="whatsapp"/>
                        </div>
                    </div>
                </form>


                <div className={style.button__main}>
                    <button className={style.button} onClick={(event) => {
                        event.preventDefault();
                        setActive(false);
                        setModalPayActive(true);
                    }}>{buttonText}</button>
                </div>

            </div>


        </div>

    );
};

export default ModalPaidConsultation;
