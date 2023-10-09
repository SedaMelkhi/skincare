import React, { FC, useState } from 'react';
import style from './ConsultationTerms.module.sass';
import ModalPaidConsultation from "@/components/screens/paidRecording/modalWindows/modalPaidConsultation/modalPaidConsultation";
import ModalPay from "@/components/screens/paidRecording/modalWindows/modalPaidConsultation/modalPay/modalPay";
import ModalSuccessfulRegistration
    from "@/components/screens/paidRecording/modalWindows/modalPaidConsultation/ModalSuccessfulRegistration/ModalSuccessfulRegistration";

const ConsultationTerms: FC = () => {
    const [isModalPaidConsultationOpen, setIsModalPaidConsultationOpen] = React.useState(false);
    const [isModalPayOpen, setIsModalPayOpen] = React.useState(false);
    const [isModalSuccessfulRegistrationOpen, setIsModalSuccessfulRegistrationOpen] = React.useState(false);

    const handlePaymentButtonClick = () => {
        setIsModalPayOpen(true);
    };
    return (
        <div>
            <div className="wrap">
                <div className={style.mainTitle}>
                    <h2 className={style.title}>
                        Условия консультации
                    </h2>
                    <div className={style.priceMain}>
                        <div className={style.price}>цена:</div>
                        <div className={style.sum}>5 900 ₽</div>
                    </div>
                </div>
                <div className={style.bg}>


                    <div className={style.lists}>
                        <ol className={style.list}>
                            <li className={style.text}>Kонсультация проходит в онлайн формате,

                            </li>
                            <li className={style.text}> После оплаты консультация необходимо выслать анкету в течение 3
                                дней,

                            </li>
                            <li className={style.text}>В рамках консультация необходимо сдать общий клинический анализы
                                в
                                течение 10 дней,

                            </li>
                            <li className={style.text}>Сроки составление назначена семь дней после получения результатов
                                анализов,

                            </li>
                            <li className={style.text}>Срок сопровождение 4 неделе начинается с момента получения
                                рекомендации,

                            </li>
                            <li className={style.text}>Консультация проходит в Telegram.
                            </li>

                        </ol>
                    </div>


                </div>
                <div className={style.container}>
                    <h3 className={style.titleBtn}>Начните ваш путь к здоровой коже сейчас!</h3>
                    <button className={style.btn} onClick={(event) => {
                        event.preventDefault();
                        setIsModalPaidConsultationOpen(true);
                    }}>записаться</button>

                    {/* Модальное окно */}

                    {isModalPaidConsultationOpen && <ModalPaidConsultation active={isModalPaidConsultationOpen} setActive={setIsModalPaidConsultationOpen} setModalPayActive={setIsModalPayOpen} buttonText="Оплатить"/>}
                    {isModalPayOpen && <ModalPay active={isModalPayOpen} setActive={setIsModalPayOpen}  setModalSuccessfulRegistrationActive={setIsModalSuccessfulRegistrationOpen}/>}
                    {isModalSuccessfulRegistrationOpen && <ModalSuccessfulRegistration  active={isModalSuccessfulRegistrationOpen} setActive ={setIsModalSuccessfulRegistrationOpen}/>}
                </div>

            </div>
            <div className={style.lineMain}>
                <div className={style.line}></div>
            </div>
        </div>


    )
        ;
};

export default ConsultationTerms;