import axios from 'axios';
const API_URL = 'https://skincareagents.com/local/api/';

axios.defaults.baseURL = API_URL;

export const userInfoService = {
  async getUserInfo(): Promise<any> {
    const { data } = await axios.post('/user.php', {
      type: 'userInfo',
      token: localStorage.getItem('token'),
    });
    return data;
  },
};
