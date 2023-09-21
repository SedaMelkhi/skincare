import {FC, useState} from 'react';

import style from './CertificateModalWindow.module.sass'

interface CertificateModalWindowProps {
    active: boolean;
    setActive: (active: boolean) => void;
}


const CertificateModalWindow: FC<CertificateModalWindowProps> = ({active, setActive}) => {


    return (
        <div className={active ? style.active : style.modal} onClick={() =>
                setActive(false)
        }>
            <div className={style.main} onClick={e => {
                e.stopPropagation()
            }}>
                <div className={style.close}><img alt="close" src={'./certificate/close.png'}
                                                  className={style.closeImg}/></div>
                <h3 className={style.title}>оплата </h3>
                <p className={style.text}>Способ оплаты</p>

                <form className={style.form}>
                    <div className={style.payMain}><input className={style.pay} type="number" id="name" name="name"
                                                          placeholder={"4534 5345 **** **64"}/>
                        <div className={style.position}>< img alt="visa" className={style.visa}
                                                              src={"./certificate/visa.svg"}/>
                        </div>
                    </div>
                    <div className={style.payMain}><input className={style.pay} type="text" id="name" name="name"
                                                          placeholder="Новой картой"/>
                        <div className={style.position}><img alt="plus" className={style.plus}
                                                             src={"./certificate/plus.svg"}/>
                        </div>
                    </div>
                    <div className={style.payMain}><input className={style.pay} type="text" id="name" name="name"
                                                          placeholder="СБП"/>
                        <div className={style.position}><img alt="spb" className={style.spb}
                                                             src={"./certificate/сбп.png"}/></div>
                    </div>

                    <div className={style.payBtnMain}>
                        <button className={style.payBtn}> оплатить</button>
                    </div>
                </form>
            </div>
        </div>


    )
        ;

}
export default CertificateModalWindow;
