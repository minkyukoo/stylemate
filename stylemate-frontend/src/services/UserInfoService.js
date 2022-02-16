import axios from 'axios';

var token = localStorage.getItem('token');

export default class UserInfoService {

  async getUserInfo() {
    return await axios.get(`/stylemates/myInfo`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res).catch((err) => err);
  }

  async getNotice(uid) {
    return await axios.get(`/stylemates/users/${uid}/alarms`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res).catch((err) => err);
  }
}