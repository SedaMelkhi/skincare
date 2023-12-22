import axios from 'axios';
const API_URL = 'https://skincareagents.com/local/api/';

axios.defaults.baseURL = API_URL;

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

export const removeSCUToCartService = {
  async removeSCUToCart(cartId: number): Promise<any> {
    const { data } = await axios.post('/cart.php', {
      type: 'deleteCartItem',
      saleUserId: localStorage.getItem('saleUserId'),
      cartId: cartId,
      //quantity: 2,
    });
    return data;
  },
};

export const getCartService = {
  async getCart(saleUserId: number | string | null): Promise<any> {
    const { data } = await axios.post('/cart.php', {
      type: 'getCart',
      saleUserId: saleUserId,
    });
    return data;
  },
};
