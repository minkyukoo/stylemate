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

  async getFilterNotice(uid, filter) {
    return await axios.get(`/stylemates/users/${uid}/alarms?filters={"type":"${filter}"}`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res).catch((err) => err);
  }

  async getInfluence(uid, filter) {
    return await axios.get(`/stylemates/users/${uid}/influence-likes?type=${filter}`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res).catch((err) => err);
  }

  async getUserdeliveries(uid) {
    return await axios.get(`/stylemates/users/${uid}/deliveries`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }

  async Notice() {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/boards?type=stylemateNotice`).then((res) => res.data).catch((err) => err);
  }

  async FAQs() {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/boards?type=stylemateFaq`).then((res) => res.data).catch((err) => err);
  }

  async NoticeById(id) {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/boards/${id}`).then((res) => res.data).catch((err) => err);
  }
}