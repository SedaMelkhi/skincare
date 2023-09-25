import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import Footer from '@/components/layout/footer/footer';
import { ContactsArray } from '@/interfaces/contact.interface';
import style from './CertificatePage.module.sass';
import CertificateForm from '@/components/screens/certificate/certificateForm/certificateForm';
import CertificateImg from '@/components/screens/certificate/certificateImg/certificateImg';
import CertificateTitle from '@/components/screens/certificate/certificateTitle/CertificateTitle';

const CertificatePage: FC<{ data: ContactsArray }> = ({ data }) => {
  return (
    <>
      <Layout title="сертификат">
        <div className="wrap certificate">
          <CertificateTitle />
          <div className={style.container}>
            <div className={style.row1}>
              <CertificateImg />
            </div>
            <div className={style.row2}>
              <CertificateForm />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CertificatePage;
