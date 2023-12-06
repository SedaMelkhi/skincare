import axios from 'axios';

export const GetTokenService = {
  async getToken(): Promise<any> {
    const { data } = await axios.post('/user.php', {
      type: 'userInfo',
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoxNSwibmFtZSI6IiIsImxhc3RfbmFtZSI6IiIsInNlY29uZF9uYW1lIjoiIiwiZW1haWwiOiIifSwidWlkIjoiMTUiLCJpYXQiOjE3MDE4MDcwNjYsImV4cCI6MTcwMTgxNTY2Nn0.HCFXUWI7twMrGrR3Bii717kKGv5fSCCuiXteT7cZjhI',
    });
    return data;
  },
};

// {
//   type: 'userInfo',
//   token:
//     '',
// }
// {
//   type: 'getToken',
//   phone: 'root',
//   pass: 'x97_hwU!34',
// }
