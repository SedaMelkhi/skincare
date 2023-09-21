import {FC} from 'react';
import style from './CertificateTitle.module.sass'


const CertificateTitle: FC = () => {
    return (
        <div className={style.main}>
            <img src={"./star.svg"}/>
            <h2 className={style.title}>Подарите,
                Порадуйте</h2>
            <img src={"./star.svg"}/>
            <div className={style.container}>

            </div>
        </div>

    );
}

export default CertificateTitle;
