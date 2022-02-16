import axios from 'axios';


export default class BannerService {
  async getBannerList(area) {
    return await axios.get(`/stylemates/banners?area=${area}`,{ area:area}).then((res) => res.data.data);
  }
  async getProductItemList(perPage) {
    return await axios.get(`/stylemates/products?perPage=${perPage}&page=1&order=latest`).then((res) => res.data.data);
  }
}