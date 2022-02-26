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
    }).then((res) => res.data.data).catch((err) => err);
  }
  async addaddress(uid, nm, rec, loc, zip, adr1, adr2, def) {
    return await axios.post(`/stylemates/users/${uid}/deliveries`, {
      name: nm,
      recipient: rec,
      addressLocale: loc,
      addressZipcode: zip,
      address1: adr1,
      address2: adr2,
      isDefault: def,
    }, {
      headers: {
        Authorization: 'Bearer ' + token,
      },

    })
      .then((res) => res)
  }
  async updatemyInfo(uid, ids, nm, tel, agency, certi, markt, cmpgn, newsl, info, push) {
    return await axios.put(`/stylemates/users/${uid}`, {
      id: ids,
      name: nm,
      tel: tel,
      telAgency: agency,
      isTelCertified: certi,
      agreeMarketing: markt,
      agreeCampaign: cmpgn,
      agreeNewsletter: newsl,
      isInformationPoint: info,
      agreeStylematePush: push
    }, {
      headers: {
        Authorization: 'Bearer ' + token,
      },

    })
      .then((res) => res)
  }
  async Notice() {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/boards?type=stylemateNotice`).then((res) => res.data).catch((err) => err);
  }

  async FAQs() {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/boards?type=stylemateFaq`).then((res) => res.data).catch((err) => err);
  }

  async QNAs() {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/qnas`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }

  async NoticeById(id) {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/boards/${id}`).then((res) => res.data).catch((err) => err);
  }

  async userDetails() {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/myInfo`).then((res) => res.data);
  }
}