import axios from 'axios';

export const AuthService = {
  async getAuthData(): Promise<any> {
    const { data } = await axios.post('/auth.php', {
      type: 'userRegister',
      pass: 'sdfdsf',
      login: 'asdsad',
    });
    return data;
  },
};
