import axios from 'axios';

export default class BrandService {
  async getBrandList() {
    return await axios.get(`/stylemates/brands`).then((res) => res.data.data);
  }
  // async getBrandDetails() {
  //   return await axios.get(`/stylemates/brands/id`, { id: 9 }).then((res) => res.data.data);
  // }

  // async viewUser(ids) {
  //     return await axios.post(`/user/view/id`, { id: ids }).then((res) => res);
  // }
}
