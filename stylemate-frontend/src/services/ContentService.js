import axios from "axios";

export default class ContentService {
  async getPost(type, limit) {
    return await axios
      .get(`/stylemates/banners?type=${type}?limit=${limit}`)
      .then((res) => res.data)
      .catch((err) => err);
  }

  async getNewContent() {
    return await axios.get("/stylemates/contents");
  }

  async getPostDetail(id) {
    return await axios.get(`/stylemates/contents/${id}`);
  }

  async getBestContent() {
    return await axios.get("/stylemates/front-manages?type=post");
  }
}
