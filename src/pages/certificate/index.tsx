import { FC } from 'react';
import CertificatePage from "@/components/screens/certificate/CertificatePage";
import {ContactsArray} from "@/interfaces/contact.interface";
import {NextPage} from "next";

const Certificate: NextPage<{ data: ContactsArray }> = ({ data }) => {
    return <CertificatePage data={data} />

};

export default Certificate;


