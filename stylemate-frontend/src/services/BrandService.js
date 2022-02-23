import axios from 'axios';
var token = localStorage.getItem('token');
export default class BrandService {
  async getBrandList() {
    return await axios.get(`/stylemates/brands`).then((res) => res.data.data);

  }
  async getBrandDetails(ids) {
    return await axios.get(`/stylemates/brands/${ids}`).then((res) => res.data).catch((err) => err);
  }

  async searchBrand(brand) {
    return await axios.get(`/stylemates/brands?filters={"keyword":"${brand}"}`).then((res) => res.data.data).catch((err) => err);
  }

  async brandSearchHistory(uid) {
    return await axios.get(`/stylemates/users/${uid}/influence-search-history?type=brand`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then((res) => res.data).catch((err) => err);
  }

  async lookBook() {
    return await axios.get(`/stylemates/front-manages?type=post`).then((res) => res.data).catch((err) => err);
  }
}