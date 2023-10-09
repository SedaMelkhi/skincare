import axios from 'axios';
import { MainSliderArray } from '@/interfaces/mainSlider.inerface';
const API_URL = 'http://fkmva.beget.tech/local/api/';

axios.defaults.baseURL = API_URL;

export const MainSliderService = {
  async getMainSlider(): Promise<MainSliderArray> {
    const { data } = await axios.post('/main.php', { type: 'mainSlider' });
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
