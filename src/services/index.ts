import axios from 'axios';
import { MainSliderArray } from '@/interfaces/mainSlider.inerface';
import { RunningLineArray } from '@/interfaces/runningLine.interface';
import { PromoBlockArray } from '@/interfaces/promoBlocks.interface';

const API_URL = 'http://fkmva.beget.tech/local/api/';

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

export const PromoBlockService = {
  async getPromoBlock(): Promise<PromoBlockArray> {
    const { data } = await axios.post('/main.php', { type: 'mainPromo' });
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
