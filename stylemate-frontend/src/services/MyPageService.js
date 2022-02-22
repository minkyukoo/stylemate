import axios from "axios";

export default class MyPageService {
  async getMyPageData() {
    return await axios.get("/stylemates/myInfo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }
}
