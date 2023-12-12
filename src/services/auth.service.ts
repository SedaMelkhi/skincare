import axios from 'axios';

export const GetTokenService = {
  async getToken(): Promise<any> {
    const { data } = await axios.post('/user.php', {
      type: 'getToken',
      phone: '7777777',
      pass: '580890',
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoxOCwibmFtZSI6IlNlZGEiLCJsYXN0X25hbWUiOiJHdWRpZXZhIiwic2Vjb25kX25hbWUiOiJTIiwiZW1haWwiOiJnLnNlZGEuZzE5OTZAZ21haWwuY29tIn0sInVpZCI6IjE4IiwiaWF0IjoxNzAyMTMwNzc0LCJleHAiOjE3MDIxMzkzNzR9.uvtHgC0kh7jo6AjiKEEfXRfS1DcZV3M2p6XzwB8qP08',
    });
    return data;
  },
};
/** 
type: 'userRegister',
{
  type: 'userInfo',
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoxOCwibmFtZSI6IiIsImxhc3RfbmFtZSI6IiIsInNlY29uZF9uYW1lIjoiIiwiZW1haWwiOiIifSwidWlkIjoiMTgiLCJpYXQiOjE3MDIxMzAzNDYsImV4cCI6MTcwMjEzODk0Nn0.T10j9OxksTwz7_LyG7iojzrmtG9sxcPw0SPxfcILIDA',

    eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoxLCJuYW1lIjoiU2VkYSIsImxhc3RfbmFtZSI6Ikd1ZGlldmEiLCJzZWNvbmRfbmFtZSI6IlMiLCJlbWFpbCI6Im1haWxAbWFpbC5ydSJ9LCJ1aWQiOiIxIiwiaWF0IjoxNzAyMTMwNjE0LCJleHAiOjE3MDIxMzkyMTR9.sehH7y6q-j0dsBB-GKKg3P9SisG5q_yP-6b0SB8XvNs
}
{
  type: 'getToken',
  phone: '7777777',
  pass: '580890',


  phone: 'root',
  pass: 'x97_hwU!34',
}
  type: 'userUpdate',
  birthday: '14.08.96',
  email: 'g.seda.g1996@gmail.com',
  lastName: 'Gudieva',
  loginPhone: '555554',
  name: 'Seda',
  secondName: 'S',
 */
