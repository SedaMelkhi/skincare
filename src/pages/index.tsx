import { NextPage, GetServerSideProps } from 'next';

import HomePage from '@/components/screens/home/HomePage';

import { ContactsArray } from '@/interfaces/contact.interface';
import { ContactsService } from '@/services/contacts.service';

const Home: NextPage<{ data: ContactsArray }> = ({ data }) => {
  return <HomePage data={data} />;
};

export const getServerSideProps: GetServerSideProps<{ data: ContactsArray }> = async () => {
  const data = await ContactsService.getContacts();
  return {
    props: { data },
  };
};

export default Home;
