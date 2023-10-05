import {FC, useState} from 'react';
import style from './Faq.module.sass';

const Faq: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className={style.bg}>
            <div className="wrap">
                <div className={style.headerTitle}>
                    <div className={style.title}>
                        <h2 className={style.title}>остались вопросы?</h2>
                        <p className={style.text}>Вот ответы на самые<br/> частые из них.</p>
                    </div>

                    <div className={style.img}>
                        <div className={style.circle__one}></div>
                        <div className={style.circle__two}></div>

                        <div className={style.titleImg}>

                        </div>
                    </div>

                </div>
                <div className={style.borders}>
                    <div className={style.border}>
                        <div className={style.border__main}>
                            <h3 className={style.border__title}>Что такое Skin Solution и для кого она
                                предназначена?</h3>
                            <div className={style.border__input} onClick={handleToggle}>
                                {isExpanded ? (
                                    <div className={style.expandedContent}>
                                        Skin Solution - это премиум программа, объединяющая экспертизу врача
                                        эндокринолога и косметолога. Она предназначена для тех, кто хочет решить
                                        проблемы с кожей, такие как акне, розацея, атопический дерматит, и получить
                                        комплексные рекомендации по уходу и питанию.
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className={style.border}>
                        <div className={style.border__main}>
                            <h3 className={style.border__title}>кто врачи?</h3>
                            <div className={style.border__input}></div>
                        </div>
                    </div>
                    <div className={style.border}>
                        <div className={style.border__main}>
                            <h3 className={style.border__title}>Какие выгоды в Skin Solution?</h3>
                            <div className={style.border__input} onClick={handleToggle}>
                                {isExpanded ? (
                                    <div className={style.expandedContent}>
                                        Skin Solution - это премиум программа, объединяющая экспертизу врача
                                        эндокринолога и косметолога. Она предназначена для тех, кто хочет решить
                                        проблемы с кожей, такие как акне, розацея, атопический дерматит, и получить
                                        комплексные рекомендации по уходу и питанию.
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className={style.border}>
                        <div className={style.border__main}>
                            <h3 className={style.border__title}>Как проходит консультация?</h3>
                            <div className={style.border__input} onClick={handleToggle}>
                                {isExpanded ? (
                                    <div className={style.expandedContent}>
                                        {/* Вставьте расширенный текст или компоненты здесь */}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className={style.border}>
                        <div className={style.border__main}>
                            <h3 className={style.border__title}>что она
                                включAет?</h3>
                            <div className={style.border__input} onClick={handleToggle}>
                                {isExpanded ? (
                                    <div className={style.expandedContent}>
                                        {/* Вставьте расширенный текст или компоненты здесь */}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className={style.border}>
                        <div className={style.border__main}>
                            <h3 className={style.border__title}>Какие результаты можно ожидать?</h3>
                            <div className={style.border__input} onClick={handleToggle}>
                                {isExpanded ? (
                                    <div className={style.expandedContent}>
                                        {/* Вставьте расширенный текст или компоненты здесь */}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};
export default Faq;