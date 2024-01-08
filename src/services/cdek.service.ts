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

export const getTokenService = {
  async getToken(): Promise<any> {
    const { data } = await axios.post(
      `https://api.edu.cdek.ru/v2/oauth/token?grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
      {}, // тело запроса
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    return data;
  },
};
