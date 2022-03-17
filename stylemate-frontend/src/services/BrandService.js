import axios from 'axios';
var token = localStorage.getItem('token');
export default class BrandService {
  async getBrandList() {
    if(!token) {
      return await axios.get(`/stylemates/brands`).then((res) => res.data.data);
    } else {
      return await axios.get(`/stylemates/brands`, {
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
      }).then((res) => res.data.data);
    }
  }

  async getBrandDetails(ids) {
    if(!token) {
    return await axios.get(`/stylemates/brands/${ids}`).then((res) => res.data).catch((err) => err);
  } else {
      return await axios.get(`/stylemates/brands/${ids}`, {
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
      }).then((res) => res.data).catch((err) => err);
    }
  }

  async searchBrand(brand) {
    return await axios.get(`/stylemates/brands?filters={"keyword":"${brand}"}`).then((res) => res.data.data).catch((err) => err);
  }

  async brandSearchHistory(uid, page) {
    return await axios.get(`/stylemates/users/${uid}/influence-search-history?type=brand&perPage=10&page=${page}`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then((res) => res.data).catch((err) => err);
  }

  async lookBook() {
    return await axios.get(`/stylemates/front-manages?type=post&limit=9`).then((res) => res.data).catch((err) => err);
  }

  // post influencelikes
  async influencelikes(uid, type, taggableId) {
    return await axios.post(`/stylemates/users/${uid}/influence-likes`, { type: type, taggableId: taggableId }, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }
  // delete influencelikes
  async influencedislikes(uid, type, taggableId) {
    return await axios.delete(`/stylemates/users/${uid}/influence-likes`,
      {
        params: {
          type: type,
          taggableId: taggableId
        },
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
      }
    ).then((res) => res.data).catch((err) => err);
  }
}