import axios from 'axios';

export default class ItemService {
  async getProductCategories() {
    return await axios.get(`/stylemates/categories`).then((res) => res.data.data);
  }

   async getProductLsit(){
 return await axios.get(`/stylemates/products`).then((res) => res.data.data);
   }

   //error
//    async getProductDetails(){
//     return await axios.get(`/stylemates/products/id`, { id:70 }).then((res) => res.data.data);
//    }

   
//error
//    async getbanner(){
//     return await axios.get(`/stylemates/banners`).then((res) => res.data.data);
//    }








  // async getItemsDetails() {
  //   return await axios.get(`/stylemates/brands/id`, { id: 9 }).then((res) => res.data.data);
  // }

  // async viewUser(ids) {
  //     return await axios.post(`/user/view/id`, { id: ids }).then((res) => res);
  // }
}