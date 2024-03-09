import axios from 'axios';
import { MainSliderArray } from '@/interfaces/mainSlider.inerface';
import { RunningLineArray } from '@/interfaces/runningLine.interface';
import { PromoBlockArray } from '@/interfaces/promoBlocks.interface';
import { NewProducts } from '@/interfaces/newProducts.interface';
import { CatalogArray } from '@/interfaces/catalog.interface';

const API_URL = 'https://skincareagents.com/local/api/';

axios.defaults.baseURL = API_URL;

export const MainSliderService = {
  async getMainSlider(): Promise<MainSliderArray> {
    const { data } = await axios.post('/main.php', { type: 'mainSlider' });
    return data;
  },
};

export const RunningLineService = {
  async getRunningLine(): Promise<RunningLineArray> {
    const { data } = await axios.post('/main.php', { type: 'runningLine', code: 3 });
    return data;
  },
};

export const RunningVerticalLineService = {
  async getRunningLine(): Promise<RunningLineArray> {
    const { data } = await axios.post('/main.php', { type: 'runningLine', code: 4 });
    return data;
  },
};

export const PromoBlockService = {
  async getPromoBlock(): Promise<PromoBlockArray> {
    const { data } = await axios.post('/main.php', { type: 'mainPromo' });
    return data;
  },
};

export const NewProductsService = {
  async getProductsService(): Promise<NewProducts> {
    const { data } = await axios.post('/main.php', { type: 'getNewItems', count: 4 });
    return data;
  },
};

// export const JournalService = {
//   async getJournalService(): Promise<any> {
//     const { data } = await axios.post('/main.php', { type: 'getJournal' });
//     return data;
//   },
// };

export const JournalService = {
  async getJournalService(): Promise<any> {
    const { data } = await axios.post('/journal.php', { type: 'getList', numPage: 2, count: 9 });
    return data;
  },
};

export const HitsService = {
  async getHitsService(): Promise<any> {
    const { data } = await axios.post('/main.php', { type: 'getHits', count: 3 });
    return data;
  },
};

export const SetsService = {
  async getSetsService(): Promise<any> {
    const { data } = await axios.post('/main.php', { type: 'getSets' });
    return data;
  },
};

export const CatalogService = {
  async getCatalogService(): Promise<CatalogArray> {
    const { data } = await axios.post('/catalogue.php', { type: 'getCategoryList' });
    return data;
  },
};

//Для регистрации
//import { RegistrationUser } from '@/interfaces/registration.interface';
// export const UserApi = {
//   async register(dto: RegistrationUser) {
//     const { data } = await instance.post('/register.php', dto);
//     return data;
//   },
// };
