import { reactive } from "vue";
// import axios from "axios";
import ItemService from "@/services/ItemService";
import MyPageService from "@/services/MyPageService";

const state = reactive({
  AppData: undefined,
  AppFltData: undefined,
  FltCampaignData: undefined,
  number: 13,
  UserId: "",
  status: "NotEmpty",
  likedTabState: "item",
  sponsorTabState: "progressHistory",
  sponcerFilterId: "",
  sponcerChannelType: "instagram",
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
var myPageService = new MyPageService();

const methods = {
  async getData() {
    return await itemService.getProductList().then((data) => {
      console.log("ItemList from store", data);
      state.AppData = data;
      return state.AppData;
    });
  },
  setSponsorTab(tab) {
    state.sponsorTabState = tab;
  },
  setContentsDetailsModal(tab, id) {
    state.contentDetailsModal = tab;
    state.contentDetailsId = id;
  },
  async  getcampList() {
    return await myPageService
      .getCampaignData(
        state.UserId,
        state.sponsorTabState,
        state.sponcerFilterId,
        state.sponcerChannelType
      )
      .then((data) => {
        // console.log("CampaignList from store", data);
        state.FltCampaignData = data.data.data;
        // console.log("CampaignList from store", state.FltCampaignData);
        return state.FltCampaignData;
      });
  },
  setSponsorFilter(id) {
    state.sponcerFilterId = id;
    if (state.sponcerFilterId === "") {
      state.sponsorTabState = "";
      state.sponcerChannelType = "";
    }
    methods.getcampList();
    console.log("setSponsorFilter", state.sponcerFilterId);
  },
  // setCampaignEncodeUrl() {
  //   if(state.sponcerFilterId === "") {
  //     state.sponsorTabState = "";
  //     state.sponcerChannelType = "";
  //   }
  // }
};

export default {
  state,
  methods,
};
