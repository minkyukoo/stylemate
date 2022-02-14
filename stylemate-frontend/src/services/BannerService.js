import axios from 'axios';


export default class BannerService {
  async getBannerList(area) {
    return await axios.get(`/stylemates/banners?area=${area}`,{ area:area}).then((res) => res.data.data);
  }
  async getNewItemList() {
    return await axios.get(`/stylemates/banners`).then((res) => res.data.data);
  }
}