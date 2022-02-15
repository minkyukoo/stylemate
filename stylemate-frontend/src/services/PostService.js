import axios from 'axios';


export default class PostService {
  
  async getPost(type, limit) {
    return await axios.get(`/stylemates/banners?type=${type}?limit=${limit}`).then((res) => res.data).catch((err) => err);
  }
  
}