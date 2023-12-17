import axios from 'axios';
const API_URL = 'https://skincareagents.com/local/api/';

axios.defaults.baseURL = API_URL;

export const saleUserIdService = {
  async getSaleUserId(): Promise<any> {
    const { data } = await axios.post('/cart.php', {
      type: 'getSaleUserId',
    });
    return data;
  },
};

export const addSCUToCartService = {
  async addSCUToCart(
    saleUserId: number | string | null,
    SCUId: number,
    quantity: number,
  ): Promise<any> {
    const { data } = await axios.post('/cart.php', {
      type: 'addSCUToCart',
      saleUserId: saleUserId,
      SCUId: SCUId,
      quantity: quantity,
    });
    return data;
  },
};
