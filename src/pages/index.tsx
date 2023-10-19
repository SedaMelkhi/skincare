import { useEffect } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';
import { setFooterData } from '@/redux/footerSlice/footerSlice';

import HomePage from '@/components/screens/home/HomePage';

import {
  MainSliderService,
  PromoBlockService,
  RunningLineService,
  NewProductsService,
  JournalService,
  HitsService,
  CatalogService,
} from '@/services';

import { ContactsService } from '@/services/contacts.service';

import { ContactsArray } from '@/interfaces/contact.interface';
import { MainSliderArray } from '@/interfaces/mainSlider.inerface';
import { RunningLineArray } from '@/interfaces/runningLine.interface';
import { PromoBlockArray } from '@/interfaces/promoBlocks.interface';
import { NewProducts } from '@/interfaces/newProducts.interface';

const Home: NextPage<{
  data: ContactsArray;
  slider: MainSliderArray;
  runningLine: RunningLineArray;
  promoBlocks: PromoBlockArray;
  newProducts: NewProducts;
  journal: any;
  hits: any;
  catalog: any;
}> = ({ data, slider, runningLine, promoBlocks, newProducts, journal, hits, catalog }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFooterData(data));
  }, []);

  return (
    <HomePage
      slider={slider}
      catalog={catalog}
      runningLine={
        runningLine.length < 6 ? [...runningLine, ...runningLine, ...runningLine] : runningLine
      }
      promoBlocks={promoBlocks}
      newProducts={newProducts}
      journal={journal}
      hits={hits}
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
  const newProducts = await NewProductsService.getProductsService();
  const journal = await JournalService.getJournalService();
  const hits = await HitsService.getHitsService();
  const catalog = await CatalogService.getCatalogService();
  return {
    props: { data, slider, runningLine, promoBlocks, newProducts, journal, hits, catalog },
  };
};

export default Home;
