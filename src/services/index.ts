import axios from 'axios';

import { RegistrationUser } from '@/interfaces/registration.interface';

const instance = axios.create({
  baseURL: 'http://fkmva.beget.tech/local/api/',
});

export const UserApi = {
  async register(dto: RegistrationUser) {
    const { data } = await instance.post('/register.php', dto);
    return data;
  },
};
