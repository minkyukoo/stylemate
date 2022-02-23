import { reactive } from "vue";
import UserInfoService from "@/services/UserInfoService";

const state = reactive({
  userData: undefined,
});

var userInfoService = new UserInfoService();


 const methods = {
  async getUserData() {
    return await userInfoService.getUserInfo().then((data) => {
      console.log("Userinfo from store", data);
      state.userData = data;
      return state.userData;
    })
  },
};

export default {
  state,
  methods,
};
