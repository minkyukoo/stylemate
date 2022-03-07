import axios from 'axios';
var token = localStorage.getItem('token');
export default class ItemService {
  async getProductCategories() {
    return await axios.get(`/stylemates/categories`).then((res) => res.data.data);
  }

  async getProductList(order = null) {
    if (order !== null) {
      if (!token) {
        return await axios.get(`/stylemates/products?order=${order}`).then((res) => res.data.data);
      } else {
        return await axios.get(`/stylemates/products?order=${order}`, {
          headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
        }).then((res) => res.data.data);
      }
    } else {
      if (!token) {
        return await axios.get(`/stylemates/products`).then((res) => res.data.data);
      } else {
        return await axios.get(`/stylemates/products`, {
          headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
        }).then((res) => res.data.data);
      }
    }

  }

  async getFilterProduct(ids) {
    if (ids === "All") {
      return await this.getProductList();
    }
    return await axios.get(`/stylemates/products?categoryId=${ids}`, {
      categoryId: ids
    }).then((res) => res.data.data);

  }

  async getProductDetails(ids) {
    if (!token) {
      return await axios.get(`/stylemates/products/${ids}`).then((res) => res.data).catch((err) => err);
    } else {
      return await axios.get(`/stylemates/products/${ids}`, {
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
      }).then((res) => res.data).catch((err) => err);
    }
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
    return await axios.post(`/stylemates/users/${uid}/influence-likes`, {
      type: type,
      taggableId: taggableId
    }, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }
  // post apply sponsership
  async applySponsership(uid, compnId, channelId, deliveryId, bookoptn) {
    return await axios.post(`/stylemates/campaigns/${uid}/bookings`, {
      campaignId: compnId,
      channelId: channelId,
      influenceDeliveryId: deliveryId,
      bookingOption: bookoptn
    }, {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res).catch((err) => err);
  }
  // delete influencelikes
  async influencedislikes(uid, type, taggableId) {
    return await axios.delete(`/stylemates/users/${uid}/influence-likes`, {
      params: {
        type: type,
        taggableId: taggableId
      },
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }

}