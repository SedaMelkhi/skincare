import { NextPage, GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';
import { setFooterData } from '@/redux/footerSlice/footerSlice';

import HomePage from '@/components/screens/home/HomePage';

import { ContactsArray } from '@/interfaces/contact.interface';
import { ContactsService } from '@/services/contacts.service';
import { useEffect } from 'react';
import { MainSliderService } from '@/services';
import { MainSliderArray } from '@/interfaces/mainSlider.inerface';

const Home: NextPage<{ data: ContactsArray; slider: any }> = ({ data, slider }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(slider);

    dispatch(setFooterData(data));
  }, []);

  return <HomePage data={data} />;
};

export const getServerSideProps: GetServerSideProps<{
  data: ContactsArray;
  slider: MainSliderArray;
}> = async () => {
  const data = await ContactsService.getContacts(); // данные футера
  const slider = await MainSliderService.getMainSlider(); //данные главного слайдера
  return {
    props: { data, slider },
  };
};

export default Home;
