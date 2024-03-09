import React, {FC} from 'react';
import style from './Record.module.sass';
import ModalPaidConsultation
    from "@/components/screens/paidRecording/modalWindows/modalConsultation/modalPaidConsultation";
import ModalPay from "@/components/screens/paidRecording/modalWindows/modalConsultation/modalPay/modalPay";
import ModalSuccessfulRegistration
    from "@/components/screens/paidRecording/modalWindows/modalConsultation/ModalSuccessfulRegistration/ModalSuccessfulRegistration";

const Record: FC = () => {
    const [isModalConsultationOpen, setIsModalConsultationOpen] = React.useState(false);
    const [isModalPayOpen, setIsModalPayOpen] = React.useState(false);
    const [isModalSuccessfulRegistrationOpen, setIsModalSuccessfulRegistrationOpen] = React.useState(false);

    return (
        <div className="wrap">
            <div className={style.main}>
                <div className={style.img__big}>
                    <div className={style.img__small} ></div>
                </div>

                <div className={style.lines}>
                    <div className={style.line}></div>
                </div>

                <h3 className={style.label}>Начните ваш путь к здоровой коже сейчас!</h3>
                <div className={style.btn__main}>
                    <button className={style.btn} onClick={(event) => {
                        event.preventDefault();
                        setIsModalConsultationOpen(true);
                    }}>записаться</button>
                    {isModalConsultationOpen && <ModalPaidConsultation active={isModalConsultationOpen} setActive={setIsModalConsultationOpen} setModalPayActive={setIsModalPayOpen} buttonText="Оплатить"/>}
                    {isModalPayOpen && <ModalPay active={isModalPayOpen} setActive={setIsModalPayOpen}  setModalSuccessfulRegistrationActive={setIsModalSuccessfulRegistrationOpen}/>}
                    {isModalSuccessfulRegistrationOpen && <ModalSuccessfulRegistration  active={isModalSuccessfulRegistrationOpen} setActive ={setIsModalSuccessfulRegistrationOpen}/>}
                </div>
                <h2 className={style.title}></h2>

            </div>
        </div>

    );
};
export default Record;