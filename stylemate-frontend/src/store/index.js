import {
  reactive
} from "vue";
// import axios from "axios";
import ItemService from "@/services/ItemService";
import MyPageService from "@/services/MyPageService";

const state = reactive({
  // AppData: undefined,
  hideBar: false,
  AppData: [],
  productMeta: null,
  AppFltData: undefined,
  campaignEmpty: false,
  number: 13,
  UserId: "",
  influenceId: null,
  status: "NotEmpty",
  noticeTabPageName: "Notice",
  likedTabState: "item",
  likedTabBrand: [],
  likedTabProduct: [],
  likedTabProductLength: 0,
  likedTabBrandLength: 0,
  likedTabAllCategories: [{
      id: "all",
      name: "all",
      active: true,
    },
    {
      id: "Progress",
      name: "Progress",
      active: false,
    },
    {
      id: "end",
      name: "end",
      active: false,
    },
  ],
  sponsorTabState: "progressHistory",
  sponcerFilterId: "",
  sponcerFilterNo: 1,
  FltCampaignData: [],
  sponcerMeta: null,
  sponcerChannelType: "instagram",
  isPostModalVisible: false,
  cancelPopup: false,
  isReRegisterModalVisible: false,
  contentDetailsModal: false,
  contentDetailsId: null,
  MyPageTopState: "",
  isChannelExists: false,
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

const MyPageModals = reactive({
  reRegistration: false,
  reRegistrationNo: null,
  campaignUID: null,
  campaignId: null,
  productID: null,
  bookingId: null,
  channelId: null,
});

var itemService = new ItemService();
var myPageService = new MyPageService();

const methods = {
  async getData(order, page, categoryId) {
    if (categoryId === 'All') {
      return await itemService.getProductList(order, page, null).then((res) => {
        console.log("ItemList from store", res);
        state.productMeta = res.meta;
        state.AppData.push(...res.data);
        return state.AppData;
      });
    } else {
      return await itemService.getProductList(order, page, categoryId).then((res) => {
        console.log("ItemList from store", res);
        state.productMeta = res.meta;
        state.AppData.push(...res.data);
        return state.AppData;
      });
    }
  },
  setSponsorTab(tab) {
    state.sponsorTabState = tab;
    state.sponcerFilterNo = 0;
    state.sponcerFilterId = "";
    state.FltCampaignData = [];
    methods.getcampList();
  },
  setContentsDetailsModal(id, tab) {
    state.contentDetailsId = id;
    state.contentDetailsModal = tab;
    state.hideBar = true;
    console.log(state.contentDetailsId);
  },
  async getcampList(pageNo) {
    state.FltCampaignData = []
    return await myPageService
      .getCampaignData(
        pageNo,
        state.UserId,
        state.sponsorTabState,
        state.sponcerFilterId,
        state.sponcerChannelType
      )
      .then((data) => {
        console.log("CampaignList from store", data);
        let resData = data.data.data;
        state.FltCampaignData.push(...resData);
        state.sponcerMeta = data.data.meta;
        // console.log("CampaignList from store", state.FltCampaignData);
        state.campaignEmpty = state.FltCampaignData.length > 0 ? false : true;
        console.log("0th", state.campaignEmpty);
        // return state.FltCampaignData;
      });
  },
  setSponsorFilter(id, index) {
    state.sponcerFilterId = id;
    state.sponcerFilterNo = index;
    // console.log(index);
    state.FltCampaignData = [];
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
  MyPageModals,
  methods,
};