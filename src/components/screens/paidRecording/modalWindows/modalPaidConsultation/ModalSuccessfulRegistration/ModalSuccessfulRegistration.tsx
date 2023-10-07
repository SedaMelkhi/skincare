import React, {FC, useState} from 'react';

import style from "./ModalSuccessfulRegistration.module.sass"

interface ModalPayProps {
    active: boolean;
    setActive: (active: boolean) => void;
}

const ModalPay: FC<ModalPayProps> = ({active, setActive}) => {
    return (
        <div
            className={active ? `${style.active} ${style.modal}` : style.modal}
            onClick={() => setActive(false)}>
            <div
                className={style.modal__content}
                onClick={(e) => {
                    e.stopPropagation();
                }}>
                <div className={style.close} onClick={() => setActive(false)}>
                    <img alt="close" src={'./certificate/close.png'} className={style.closeImg}/>
                </div>
                <h3 className={style.title}>оплата </h3>
                <p className={style.text}>Способ оплаты</p>


                <div className={style.payMain}>
                    <div className={style.pay}>
                        4534 5345 **** **64
                        <div className={style.payImg}>
                            <img alt="visa" className={style.visa} src={'./certificate/visa.svg'}/>
                        </div>
                    </div>
                </div>
                <div className={style.payMain}>
                    <div className={style.pay}>
                        Новой картой
                        <div className={style.payImg}>
                            <img alt="plus" className={style.plus} src={'./certificate/plus.svg'}/>
                        </div>
                    </div>
                </div>
                <div className={style.payMain}>
                    <div className={style.pay}>
                        СБП
                        <div className={style.payImg}>
                            <img alt="spb" className={style.spb} src={'./certificate/сбп.png'}/>
                        </div>
                    </div>
                </div>

                <div className={style.payBtnMain}>
                    <button className={style.payBtn}> оплатить</button>
                </div>


            </div>
        </div>
    );
};
export default ModalPay;
