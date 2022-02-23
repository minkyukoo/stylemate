import { reactive } from "vue";
// import axios from "axios";
import ItemService from "@/services/ItemService";

const state = reactive({
  AppData: undefined,
  AppFltData: undefined,
  number: 13,
  UserId: "",
  status: "NotEmpty",
  likedTabState: "item",
  sponsorTabState: "progress",
  isPostModalVisible: false,
  cancelPopup: false,
  isReRegisterModalVisible: false,
  contentDetailsModal: false,
  contentDetailsId: null,
  MyPageTopState: "",
  MyPageTopDetails: {
    name: "",
    email: "",
    profile_img: "",
  },
  MyPageRateBox: {
    Avg_like: 0,
    Avg_comment: 0,
    EGR_activity: 0,
  },
  MyPageSponsorBox: {
    sponsorship: 0,
    Post_activity: 0,
    like: 0,
  },
});

var itemService = new ItemService();


 const methods = {
  async getData() {
    return await itemService.getProductList().then((data) => {
      console.log("ItemList from store", data);
      state.AppData = data;
      return state.AppData;
    })
  },
  setSponsorTab(tab) {
    state.sponsorTabState = tab;
  },
  setContentsDetailsModal(tab , id) {
    state.contentDetailsModal = tab;
    state.contentDetailsId = id;
  }
};

export default {
  state,
  methods,
};
