import { NextPage, GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';
import { setFooterData } from '@/redux/footerSlice/footerSlice';

import HomePage from '@/components/screens/home/HomePage';

import { ContactsArray } from '@/interfaces/contact.interface';
import { ContactsService } from '@/services/contacts.service';
import { useEffect } from 'react';

import { MainSliderService, PromoBlockService, RunningLineService } from '@/services';
import { MainSliderArray } from '@/interfaces/mainSlider.inerface';
import { RunningLineArray } from '@/interfaces/runningLine.interface';
import { PromoBlockArray } from '@/interfaces/promoBlocks.interface';

const Home: NextPage<{
  data: ContactsArray;
  slider: MainSliderArray;
  runningLine: RunningLineArray;
  promoBlocks: PromoBlockArray;
}> = ({ data, slider, runningLine, promoBlocks }) => {
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
      promoBlocks={promoBlocks}
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
  const promoBlocks = await PromoBlockService.getPromoBlock();
  return {
    props: { data, slider, runningLine, promoBlocks },
  };
};

export default Home;
