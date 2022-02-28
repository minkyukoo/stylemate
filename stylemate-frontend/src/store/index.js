import { reactive } from "vue";
// import axios from "axios";
import ItemService from "@/services/ItemService";
import MyPageService from "@/services/MyPageService";

const state = reactive({
  AppData: undefined,
  AppFltData: undefined,
  FltCampaignData: undefined,
  campaignEmpty: false,
  number: 13,
  UserId: "",
  status: "NotEmpty",
  likedTabState: "item",
  sponsorTabState: "progressHistory",
  sponcerFilterId: "",
  sponcerFilterNo: 0,
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

const EditPostModal = reactive({});

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
    state.sponcerFilterNo = 0;
    methods.getcampList();
  },
  setContentsDetailsModal(tab, id) {
    state.contentDetailsModal = tab;
    state.contentDetailsId = id;
  },
  async getcampList() {
    return await myPageService
      .getCampaignData(
        state.UserId,
        state.sponsorTabState,
        state.sponcerFilterId,
        state.sponcerChannelType
      )
      .then((data) => {
        console.log("CampaignList from store", data);
        state.FltCampaignData = data.data.data;
        // console.log("CampaignList from store", state.FltCampaignData);
        state.campaignEmpty = state.FltCampaignData.length > 0 ? false : true;
        return state.FltCampaignData;
      });
  },
  setSponsorFilter(id, index) {
    state.sponcerFilterId = id;
    state.sponcerFilterNo = index;
    console.log(index);
    methods.getcampList();
    console.log(
      "setSponsorFilter",
      state.sponcerFilterId,
      state.sponcerFilterNo
    );
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
  EditPostModal,
  methods,
};
