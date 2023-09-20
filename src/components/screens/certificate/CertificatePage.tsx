import {FC} from 'react';

import Layout from '@/components/layout/Layout';
import Footer from "@/components/layout/footer/footer";
import {ContactsArray} from '@/interfaces/contact.interface';
import style from './CertificatePage.module.sass'
import CertificateForm from "@/components/screens/certificate/certificateForm/certificateForm";
import CertificateImg from "@/components/screens/certificate/certificateImg/certificateImg";

const CertificatePage: FC<{ data: ContactsArray }> = ({ data }) => {
    return (
        <>  
            <Layout title="сертификат">
                <div className="wrap">
                    <div className={style.main}><img src={"./star.svg"}/> <h2 className={style.title}>Подарите,
                        Порадуйте</h2>
                        <img src={"./star.svg"}/></div>
                </div>
                <CertificateImg/>
                <CertificateForm/>


            </Layout>
            <Footer data={data}/>
        </>
    );
}

export default CertificatePage;
