import axios from 'axios';

// interface IUserData {
//   birthday: string;
//   email: string;
//   lastName: string;
//   loginPhone: string;
//   name: string;
//   secondName: string;
//   userId: number;
// }

const client_id = 'EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI'; //account
const client_secret = 'PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG'; //secure_password

export const getCdekTokenService = {
  async getCdekToken(): Promise<any> {
    const { data } = await axios.post(
      `https://api.edu.cdek.ru/v2/oauth/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`,
      {},
    );
    return data;
  },
};

export const getAddressesService = {
  async getAddresses(token: any): Promise<any> {
    const { data } = await axios.get('https://api.edu.cdek.ru/v2/deliverypoints', {
      headers: { Authorization: 'Bearer ' + token },
    });
    return data;
  },
};
