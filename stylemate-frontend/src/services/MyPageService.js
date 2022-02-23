import axios from "axios";

export default class MyPageService {
  async getMyPageData() {
    return await axios.get("/stylemates/myInfo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }
  async getCampaignData() {
    return await axios.get("/stylemates/users/7OPwPmd9oS/campaigns");
  }
}
