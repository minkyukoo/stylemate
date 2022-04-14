import axiox from 'axios';

var token = localStorage.getItem('token');
var refreshToken = localStorage.getItem('refreshToken');

export default class TokenService {
  async getRefreshToken() {
    return await axiox.get(`https://mid.beta.mediance.co.kr/refresh-token-verified`, {
      headers: {
        'Authorization': 'Bearer ' + token,
        'refresh-token': 'Bearer ' + refreshToken,
      }
    }).then((res) => res).catch((err) => err);
  }
  // Authentication Checking for Invalid authendication
  async isAuth() {
    var currentTime = new Date().getTime();
    // console.log('isAuth_currentTime', currentTime);
    //check for Invalid authendication
    if (!localStorage.token || !localStorage.tokenexpiresAt) {
      return false;
    } else if (localStorage.token && localStorage.tokenexpiresAt && localStorage.tokenexpiresAt < currentTime) {
      return await this.getRefreshToken()
        .then(function (res) {
          // console.log('res', res.status);
          if (res.status && res.status !== 200) {
            return false;
          } else {
            var d_expiresAt = res.data.expiresAt;
            var token_expiresAt = new Date(d_expiresAt).getTime();
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            localStorage.setItem('tokenexpiresAt', token_expiresAt);
            return true;
          }
        })
    } else if (localStorage.token && localStorage.tokenexpiresAt && localStorage.tokenexpiresAt > currentTime) {
      return true;
    } else {
      return false;
    }
  }
}