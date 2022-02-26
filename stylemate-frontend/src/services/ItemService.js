import axios from 'axios';
var token = localStorage.getItem('token');
export default class ItemService {
  async getProductCategories() {
    return await axios.get(`/stylemates/categories`).then((res) => res.data.data);
  }

  async getProductList() {
    return await axios.get(`/stylemates/products`).then((res) => res.data.data);
  }

  async getFilterProduct(ids) {
    if (ids === "All") {
      return await this.getProductList();
    }
    return await axios.get(`/stylemates/products?categoryId=${ids}`,{categoryId: ids}).then((res) => res.data.data);
    
  }

  async getProductDetails(ids) {
    return await axios.get(`/stylemates/products/${ids}`).then((res) => res.data).catch((err) => err);
  }

  async getUserdeliveries(uid) {
    return await axios.get(`/stylemates/users/${uid}/deliveries`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }
  // influencelikes
  async influencelikes(uid) {
    return await axios.get(`/stylemates/users/${uid}/influence-likes`, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }

}