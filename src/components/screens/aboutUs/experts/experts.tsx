import {FC} from 'react';
import style from './Experts.module.sass';


const ExpertsSkinCare: FC = () => {
    return (
        <div className={style.bg}>
            <div className="wrap">
                <div className={style.position}>
                    <div className={style.container}>
                        <h2 className={style.title}>мы эксперты <br/>в уходе за кожей
                        </h2>
                        <div className={style.left}>
                            <div className={style.img}></div>
                        </div>
                        <div className={style.right}>

                            <div className={style.text}>Рекомендации наших агентов имеют доказательную базу и строятся
                                на
                                потребностях вашей кожи. Мы не только про внешнюю красоту, которая кроется в каждой из
                                нас,
                                но и
                                про заботу о своём теле и духовной составляющей.
                            </div>
                            <div className={style.text}>В нашей команде есть специалисты, которые помогут изучить
                                проблему
                                глубже, понять первопричину текущего состояния кожи.
                            </div>

                        </div>
                    </div>
                    <div className={style.block__container}>
                        <div className={style.block__row}>
                            <div className={style.block}>
                                <div className={style.block__icon1}></div>
                                <div className={style.block__text}>косметолог-эстетист</div>
                            </div>
                            <div className={style.block__line}></div>
                            <div className={style.block}>
                                <div className={style.block__icon2}></div>
                                <div className={style.block__text}>эндокринолог</div>
                            </div>
                            <div className={style.block__line}></div>
                        </div>
                        <div className={style.block__row}>
                            <div className={style.block}>
                                <div className={style.block__icon3}></div>
                                <div className={style.block__text}>нутрициолог</div>
                            </div>
                            <div className={style.block__line}></div>
                            <div className={style.block}>
                                <div className={style.block__icon4}></div>
                                <div className={style.block__text}>бьюти-эксперты</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ExpertsSkinCare;