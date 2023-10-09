import axios from 'axios';

import { ContactsArray } from '@/interfaces/contact.interface';

const API_URL = 'http://fkmva.beget.tech/local/api/';

axios.defaults.baseURL = API_URL;

export const ContactsService = {
  async getContacts(): Promise<ContactsArray> {
    const { data } = await axios.post<ContactsArray>('   ', { type: 'siteInfo' });
    return data;
  },
};
