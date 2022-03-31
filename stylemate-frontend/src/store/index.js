import { reactive } from "vue";
// import axios from "axios";
import ItemService from "@/services/ItemService";
import MyPageService from "@/services/MyPageService";

const state = reactive({
  // AppData: undefined,
  hideBar: false,
  AppData: [],
  productMeta: null,
  AppFltData: undefined,
  campaignEmpty: "",
  number: 13,
  UserId: "",
  influenceId: null,
  status: "NotEmpty",
  noticeTabPageName: "공지사항",
  likedTabState: "item",
  likedTabBrand: [],
  likedTabProduct: [],
  likedTabProductLength: 0,
  likedTabBrandLength: 0,
  likedTabAllCategories: [
    {
      id: "all",
      name: "전체",
      active: true,
    },
    {
      id: "Progress",
      name: "진행",
      active: false,
    },
    {
      id: "end",
      name: "종료",
      active: false,
    },
  ],
  sponsorTabState: "progressHistory",
  sponcerFilterId: "",
  sponcerFilterNo: "전체",
  FltCampaignData: [],
  sponcerMeta: null,
  sponcerPageNo: 1,
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
    if (categoryId === "All") {
      return await itemService.getProductList(order, page, null).then((res) => {
        console.log("ItemList from store", res);
        state.productMeta = res.meta;
        state.AppData.push(...res.data);
        return state.AppData;
      });
    } else {
      return await itemService
        .getProductList(order, page, categoryId)
        .then((res) => {
          console.log("ItemList from store", res);
          state.productMeta = res.meta;
          state.AppData.push(...res.data);
          return state.AppData;
        });
    }
  },
  setSponsorTab(tab) {
    state.FltCampaignData = [];
    state.sponsorTabState = tab;
    state.sponcerFilterNo = "전체";
    state.sponcerFilterId = "";
    state.sponcerPageNo = 1;
    setTimeout(() => {
      methods.getcampList();
    }, 10);
  },
  setContentsDetailsModal(id, tab) {
    state.contentDetailsId = id;
    state.contentDetailsModal = tab;
    state.hideBar = true;
    console.log(state.contentDetailsId);
  },
  async getcampList(page) {
    return await myPageService
      .getCampaignData(
        page,
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
        if (!state.FltCampaignData.length && state.sponcerFilterId === "") {
          state.campaignEmpty =
            "아직 협찬에 선정되지 못하였습니다.<br/>다른 브랜드의 제품들도 협찬을 신청해보세요.";
        } else if (!state.FltCampaignData.length && state.sponcerFilterId) {
          state.campaignEmpty = "해당하는 제품이 없습니다.";
        } else {
          state.campaignEmpty = "";
        }

        // return state.FltCampaignData;
      });
  },
  setSponsorFilter(id, index) {
    state.sponcerFilterId = id;
    state.sponcerFilterNo = index;
    // console.log(index);
    state.FltCampaignData = [];
    state.sponcerPageNo = 1;
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
