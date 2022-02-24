import axios from "axios";

export default class MyPageService {
  async getMyPageData() {
    return await axios.get("/stylemates/myInfo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }
  async getCampaignData(uid) {
    return await axios.get(`/stylemates/users/${uid}/campaigns`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }
  async getPostingList() {
    return await axios.get(`/stylemates/posts?filters={"influenceId":1}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }
  async postCampaign() {
    return await axios.post(`/stylemates/posts/instagram`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }
}
