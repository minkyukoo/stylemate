import axios from "axios";
// import store from "../store/index";
var token = localStorage.getItem("token");

export default class ItemService {
  async getProductCategories() {
    return await axios.get(`/stylemates/categories`).then((res) => res.data.data);
  }

  async getProductList(order, page, categoryId) {
    var productParams = [];
    // if (categoryId === "All") {
    //   // return await this.getProductList(null, 1, null);
    //   store.methods.getData(null, 1, null);
    // }
    if (order !== null && typeof order !== "undefined" && order !== '') {
      productParams.push(`order=${order}`);
    }
    if (page !== null && typeof page !== "undefined" && page !== '') {
      productParams.push(`page=${page}`);
    }
    if (categoryId !== null && typeof categoryId !== "undefined" && categoryId !== '') {
      productParams.push(`categoryId=${categoryId}`);
    }

    if (categoryId === "All") {
      // return await this.getProductList(null, 1, null);
      if (!token) {
        return await axios
          .get(`/stylemates/products?page=${page}`)
          .then((res) => res.data).catch((err) => err);
      } else {
        return await axios
          .get(`/stylemates/products?page=${page}`, {
            headers: {
              Authorization: "Bearer " + token, //the token is a variable which holds the token
            },
          })
          .then((res) => res.data).catch((err) => err);
      }
    }
   
    if (!token) {
      return await axios
        .get(`/stylemates/products?${productParams.join('&')}`)
        .then((res) => res.data).catch((err) => err);
    } else {
      return await axios
        .get(`/stylemates/products?${productParams.join('&')}`, {
          headers: {
            Authorization: "Bearer " + token, //the token is a variable which holds the token
          },
        })
        .then((res) => res.data).catch((err) => err);
    }
  }

  // async getFilterProduct(categoryId, page, order) {
  //   var productParams = [];
  //   if (categoryId === "All") {
  //     // return await this.getProductList(null, 1, null);
  //     store.methods.getData(null,1,null);
  //   }
  //   if (order !== null && typeof order !== "undefined" && order !== '') {
  //     productParams.push(`order=${order}`);
  //   }
  //   if (page !== null && typeof page !== "undefined" && page !== '') {
  //     productParams.push(`page=${page}`);
  //   }
  //   if (categoryId !== null && typeof categoryId !== "undefined" && categoryId !== '') {
  //     productParams.push(`categoryId=${categoryId}`);
  //   }
    
  //   if (!token) {
  //     return await axios
  //       .get(`/stylemates/products?${productParams.join('&')}`)
  //       .then((res) => res.data.data);
  //   } else {
  //     return await axios
  //       .get(`/stylemates/products?${productParams.join('&')}`, {
  //         headers: {
  //           Authorization: "Bearer " + token, //the token is a variable which holds the token
  //         },
  //       })
  //       .then((res) => res.data.data);
  //   }


  //   // if (ids === "All") {
  //   //   return await this.getProductList(null, 1, null);
  //   // }
  //   // if (!token) {
  //   //   return await axios
  //   //     .get(`/stylemates/products?categoryId=${ids}&page=${page}`, {
  //   //       categoryId: ids,
  //   //     })
  //   //     .then((res) => res.data.data);
  //   // } else {
  //   //   return await axios
  //   //     .get(`/stylemates/products?categoryId=${ids}&page=${page}`, {
  //   //       categoryId: ids,
  //   //       headers: {
  //   //         Authorization: "Bearer " + token, //the token is a variable which holds the token
  //   //       },
  //   //     })
  //   //     .then((res) => res.data.data);
  //   // }
  // }

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
  // post influencelikes
  async influencelikes(uid, type, taggableId) {
    return await axios.post(`/stylemates/users/${uid}/influence-likes`, { type: type, taggableId: taggableId }, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }
  // delete influencelikes
  async influencedislikes(uid, type, taggableId) {
    return await axios.delete(`/stylemates/users/${uid}/influence-likes`,
      {
        params: {
          type: type,
          taggableId: taggableId
        },
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
      }
    ).then((res) => res.data).catch((err) => err);
  }

}