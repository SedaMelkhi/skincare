import {FC} from 'react';
import style from './CertificateTitle.module.sass'


const CertificateTitle: FC = () => {
    return (
        <div className={style.main}>
            <img alt={"star"} src={"./star.svg"} className={style.star1}/>
            <h2 className={style.title}>Подарите,
                Порадуйте</h2>
            <img alt={"star"} src={"./star.svg"} className={style.star2}/>

        </div>

    );
}

export default CertificateTitle;
