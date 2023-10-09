import { NextPage, GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';
import { setFooterData } from '@/redux/footerSlice/footerSlice';

import HomePage from '@/components/screens/home/HomePage';

import { ContactsArray } from '@/interfaces/contact.interface';
import { ContactsService } from '@/services/contacts.service';
import { useEffect } from 'react';
import { MainSliderService, RunningLineService } from '@/services';
import { MainSliderArray } from '@/interfaces/mainSlider.inerface';
import { RunningLineArray } from '@/interfaces/runningLine.interface';

const Home: NextPage<{
  data: ContactsArray;
  slider: MainSliderArray;
  runningLine: RunningLineArray;
}> = ({ data, slider, runningLine }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFooterData(data));
  }, []);

  return (
    <HomePage
      slider={slider}
      runningLine={
        runningLine.length < 6 ? [...runningLine, ...runningLine, ...runningLine] : runningLine
      }
    />
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: ContactsArray;
  slider: MainSliderArray;
}> = async () => {
  const data = await ContactsService.getContacts(); // данные футера
  const slider = await MainSliderService.getMainSlider(); //данные главного слайдера
  const runningLine = await RunningLineService.getRunningLine(); //данные главного слайдера
  return {
    props: { data, slider, runningLine },
  };
};

export default Home;
