import axios from 'axios';


export default class BannerService {
  async getBannerList(area) {
    return await axios.get(`/stylemates/banners?area=${area}`,{ area:area}).then((res) => res.data.data);
  }
  async getProductItemList(perPage) {
    return await axios.get(`/stylemates/products?perPage=${perPage}&page=1&order=latest`).then((res) => res.data.data);
  }
  async getProductItemListSecond() {
    return await axios.get(`/stylemates/products?perPage=10&page=1&order=latest`).then((res) => res.data.data);
  }
  async getBrandList() {
    return await axios.get(`/stylemates/front-manages?type=brand`).then((res) => res.data);
  }
  async getNewBrandDetails() {
    return await axios.get(`/stylemates/front-manages?type=product`).then((res) => res.data);
  }
}