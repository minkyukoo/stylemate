import axios from 'axios';

export default class BrandService {
  async getBrandList() {
    return await axios.get(`/stylemates/brands`).then((res) => res.data.data);
    
  }
  async getBrandDetails(ids) {
    return await axios.get(`/stylemates/brands/${ids}`).then((res) => res.data).catch((err) => err);
  }

  // async viewUser(ids) {
  //     return await axios.post(`/user/view/id`, { id: ids }).then((res) => res);
  // }
}
