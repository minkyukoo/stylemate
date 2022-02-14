import axios from 'axios';


export default class BannerService {
  async getBannerList(area) {
    return await axios.get(`/stylemates/banners?area=${area}`,{ area:area}).then((res) => res.data.data);
  }
  async getProductItemList() {
    return await axios.get(`https://elsa.beta.mediance.co.kr/stylemates/products?perPage=10&page=1&order=latest`).then((res) => res.data.data);
  }

  

  // async getBrandDetails() {
  //   return await axios.get(`/stylemates/brands/id`, { id: 9 }).then((res) => res.data.data);
  // }

  // async viewUser(ids) {
  //     return await axios.post(`/user/view/id`, { id: ids }).then((res) => res);
  // }
  // async getFilterProduct(ids) {
  //   return await axios.get(`/stylemates/products?categoryId=${ids}`,{categoryId: ids}).then((res) => res.data.data);
  // }
}