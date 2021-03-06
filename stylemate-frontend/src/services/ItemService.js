import axios from "axios";
import store from "../store/index";
var token = localStorage.getItem("token");
export default class ItemService {
  async getProductCategories() {
    return await axios
      .get(`/stylemates/categories`)
      .then((res) => res.data.data);
  }

  async getProductList(order, page, categoryId) {
    var productParams = [];
    if (order !== null && typeof order !== "undefined" && order !== '') {
      productParams.push(`order=${order}`);
    }
    if (page !== null && typeof page !== "undefined" && page !== '') {
      productParams.push(`page=${page}`);
    }
    if (categoryId !== null && typeof categoryId !== "undefined" && categoryId !== '') {
      productParams.push(`categoryId=${categoryId}`);
    }
    // if (categoryId === "All") {
    //   if (!token) {
    //     return await axios
    //       .get(`/stylemates/products?page=${page}`)
    //       .then((res) => res.data);
    //   } else {
    //     return await axios
    //       .get(`/stylemates/products?page=${page}`, {
    //         headers: {
    //           Authorization: "Bearer " + token, //the token is a variable which holds the token
    //         },
    //       })
    //       .then((res) => res.data);
    //   }
    // }
    if (!token) {
      return await axios
        .get(`/stylemates/products?${productParams.join('&')}`)
        .then((res) => res.data);
    } else {
      return await axios
        .get(`/stylemates/products?${productParams.join('&')}`, {
          headers: {
            Authorization: "Bearer " + token, //the token is a variable which holds the token
          },
        })
        .then((res) => res.data);
    }
    // if (order !== null) {
    //   if (!token) {
    //     return await axios
    //       .get(`/stylemates/products?order=${order}&page=${page}`)
    //       .then((res) => res.data);
    //   } else {
    //     return await axios
    //       .get(`/stylemates/products?order=${order}&page=${page}`, {
    //         headers: {
    //           Authorization: "Bearer " + token, //the token is a variable which holds the token
    //         },
    //       })
    //       .then((res) => res.data);
    //   }
    // } else if (typeof page !== 'undefined') {
    //   if (!token) {
    //     return await axios
    //       .get(`/stylemates/products?page=${page}`)
    //       .then((res) => res.data);
    //   } else {
    //     return await axios
    //       .get(`/stylemates/products?page=${page}`, {
    //         headers: {
    //           Authorization: "Bearer " + token, //the token is a variable which holds the token
    //         },
    //       })
    //       .then((res) => res.data);
    //   }
    // } else if (typeof categoryId !== 'undefined') {
    //   this.getFilterProduct(categoryId, page);
    // } else {
    //   if (!token) {
    //     return await axios
    //       .get(`/stylemates/products`)
    //       .then((res) => res.data);
    //   } else {
    //     return await axios
    //       .get(`/stylemates/products`, {
    //         headers: {
    //           Authorization: "Bearer " + token, //the token is a variable which holds the token
    //         },
    //       })
    //       .then((res) => res.data);
    //   }
    // }
  }

  async getFilterProduct(categoryId, page, order) {
    var productParams = [];
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
      store.methods.getData(null, 1, null);
      // return await this.getProductList(null, 1, null);
    }
    // if (categoryId === "All") {
    //   if (!token) {
    //     return await axios
    //       .get(`/stylemates/products?page=${page}`)
    //       .then((res) => res.data);
    //   } else {
    //     return await axios
    //       .get(`/stylemates/products?page=${page}`, {
    //         headers: {
    //           Authorization: "Bearer " + token, //the token is a variable which holds the token
    //         },
    //       })
    //       .then((res) => res.data);
    //   }
    // }
    if (!token) {
      return await axios
        .get(`/stylemates/products?${productParams.join('&')}`)
        .then((res) => res.data.data);
    } else {
      return await axios
        .get(`/stylemates/products?${productParams.join('&')}`, {
          headers: {
            Authorization: "Bearer " + token, //the token is a variable which holds the token
          },
        })
        .then((res) => res.data.data);
    }


    // if (ids === "All") {
    //   return await this.getProductList(null, 1, null);
    // }
    // if (!token) {
    //   return await axios
    //     .get(`/stylemates/products?categoryId=${ids}&page=${page}`, {
    //       categoryId: ids,
    //     })
    //     .then((res) => res.data.data);
    // } else {
    //   return await axios
    //     .get(`/stylemates/products?categoryId=${ids}&page=${page}`, {
    //       categoryId: ids,
    //       headers: {
    //         Authorization: "Bearer " + token, //the token is a variable which holds the token
    //       },
    //     })
    //     .then((res) => res.data.data);
    // }
  }

  async getProductDetails(ids) {
    if (!token) {
      return await axios
        .get(`/stylemates/products/${ids}`)
        .then((res) => res.data)
        .catch((err) => err);
    } else {
      return await axios
        .get(`/stylemates/products/${ids}`, {
          headers: {
            Authorization: "Bearer " + token, //the token is a variable which holds the token
          },
        })
        .then((res) => res.data)
        .catch((err) => err);
    }
  }

  async getUserdeliveries(uid) {
    return await axios
      .get(`/stylemates/users/${uid}/deliveries`, {
        headers: {
          Authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      })
      .then((res) => res.data)
      .catch((err) => err);
  }
  // post influencelikes
  async influencelikes(uid, type, taggableId) {
    return await axios
      .post(
        `/stylemates/users/${uid}/influence-likes`,
        {
          type: type,
          taggableId: taggableId,
        },
        {
          headers: {
            Authorization: "Bearer " + token, //the token is a variable which holds the token
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => err);
  }
  // post apply sponsership
  async applySponsership(uid, compnId, channelId, deliveryId, bookoptn) {
    return await axios
      .post(
        `/stylemates/campaigns/${uid}/bookings`,
        {
          campaignId: compnId,
          channelId: channelId,
          influenceDeliveryId: deliveryId,
          bookingOption: bookoptn,
        },
        {
          headers: {
            Authorization: "Bearer " + token, //the token is a variable which holds the token
          },
        }
      )
      .then((res) => res)
      .catch((err) => err);
  }
  // delete influencelikes
  async influencedislikes(uid, type, taggableId) {
    return await axios
      .delete(`/stylemates/users/${uid}/influence-likes`, {
        params: {
          type: type,
          taggableId: taggableId,
        },
        headers: {
          Authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      })
      .then((res) => res.data)
      .catch((err) => err);
  }

  async cancelSponsership(campaignUID, bookingId) {
    return await axios.delete(
      `https://elsa.beta.mediance.co.kr/stylemates/campaigns/${campaignUID}/bookings/${bookingId}`,
      {
        headers: {
          Authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      }
    );
  }
}
