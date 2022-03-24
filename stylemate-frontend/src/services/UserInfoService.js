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
    return await axios.get(`/stylemates/users/${uid}/alarms?sort=descend`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res).catch((err) => err);
  }
  async getNoticeConfirm(uid) {
    return await axios.patch(`/stylemates/users/${uid}/alarm-confirm`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res).catch((err) => err);
  }

  async getFilterNotice(uid, filter) {
    if (filter.data === 'subType') {
      // eslint-disable-next-line no-redeclare
      var data = `{"${filter.data}":["${filter.value}"]}`;
    } else {
      // eslint-disable-next-line no-redeclare
      var data = `{"${filter.data}":"${filter.value}"}`;
    }
    return await axios.get(`/stylemates/users/${uid}/alarms?filters=${data}&sort=descend`, {
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

  async getInfluenceWithCategory(uid, filter, category) {
    return await axios.get(`/stylemates/users/${uid}/influence-likes?type=${filter}&processStatus=${category}`, {
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
  async updateaddress(uid, nm, rec, loc, zip, adr1, adr2, def,ids) {
    return await axios.put(`/stylemates/users/${uid}/deliveries/${ids}`, {
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
  async deleteaddress(uid,ids) {
    return await axios.delete(`/stylemates/users/${uid}/deliveries/${ids}`,  {
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
        agreeStylematePush: push,
      }, {
        headers: {
          Authorization: 'Bearer ' + token,
        },

      })
      .then((res) => res)
  }
  async changePassword(uid, oldpass, newpass, confpass) {
    return await axios.patch(`stylemates/users/${uid}/password`, {
        token: token,
        oldPassword: oldpass,
        password: newpass,
        passwordConfirmation: confpass

      }, {
        headers: {
          Authorization: 'Bearer ' + token,
        },

      })
      .then((res) => res)
  }
  async telAuth(telNo, mailId, ids, expiry) {
    return await axios.post(`/stylemates/tel-auth`, {
        tel: telNo,
        email: mailId,
        expiredAt: expiry,
        id: ids

      }, {
        headers: {
          Authorization: 'Bearer ' + token,
        },

      })
      .then((res) => res)
  }

  async confirmPass(vcode, mailId, telNo) {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/tel-auth-confirm?verificationCode=${vcode}&email=${mailId}&tel=${telNo}`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data.data).catch((err) => err);
  }
  async Notice() {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/boards?type=stylemateNotice`).then((res) => res.data).catch((err) => err);
  }
  async addressDetails(uid,ids) {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/users/${uid}/deliveries/${ids}`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
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

  async QNAsById(id) {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/qnas/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }

  async QNAsCheckById(id) {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/qnas/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res);
  }
}