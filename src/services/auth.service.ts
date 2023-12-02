import axios from 'axios';

export const GetTokenService = {
  async getToken(): Promise<any> {
    const { data } = await axios.post('/user.php', {
      type: 'login',
      phone: 'root',
      pass: 'x97_hwU!34',
    });
    return data;
  },
};

// {
//   type: 'userInfo',
//   login: 'root',
//   token:
//     '$6$dA5y21Gc1o0wN1sy$eNoywIJ4Pvf9MfblSyL3X3x13zVuhP6viz3PvuLfxx1vlwNHieBVQb/gRkZshTjIfPw9BjBebLLtaTUQTtFCA',
// }
// {
//   type: 'login',
//   phone: 'root',
//   pass: 'x97_hwU!34',
// }
