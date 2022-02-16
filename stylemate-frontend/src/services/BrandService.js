import axios from 'axios';

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
}