import axios from 'axios';


export default class BannerService {
  async getBannerList(area) {
    return await axios.get(`/stylemates/banners?area=${area}`,{ area:area}).then((res) => res.data.data);
  }
  async getNewItemList() {
    return await axios.get(`/stylemates/banners`).then((res) => res.data.data);
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