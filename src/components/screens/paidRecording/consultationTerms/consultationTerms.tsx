import {FC} from 'react';
import style from './ConsultationTerms.module.sass';


const ConsultationTerms: FC = () => {
    return (
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
                        <li className={style.text}>В рамках консультация необходимо сдать общий клинический анализы в
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
            <button className={style.btn}>записаться</button></div>

        </div>


    )
        ;
};

export default ConsultationTerms;