import axiox from 'axios';

var token = localStorage.getItem('token');
var refreshToken = localStorage.getItem('refreshToken');

export default class TokenService {
  async getRefreshToken() {
    return await axiox.get(`/refresh-token-verified`, {
      headers: {
        'Authorization': 'Bearer ' + token ,
        'refresh-token': 'Bearer ' + refreshToken ,
      }
    }).then((res) => res).catch((err) => err);
  }
}