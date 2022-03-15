<template>
  <div class="sponsers-wrap">
    <div v-if="!store.state.campaignEmpty">
      <ItemCard
        :progressDetails="item"
        v-for="(item, index) in store.state.FltCampaignData"
        :key="index"
      />
    </div>
    <div v-else>
      <Error
        errors="아직 협찬에 선정되지 못하였습니다.
                다른 브랜드의 제품들도 협찬을 신청해보세요."
      />
    </div>
    <RegisterPostModal v-if="store.state.isPostModalVisible" />
    <ReRegisterModal v-if="store.state.isReRegisterModalVisible" />
    <CancelSponser v-if="store.state.cancelPopup" @cancelSponsor="rerun" />
  </div>
</template>

<script>
import { inject, onMounted, onUnmounted } from "vue";
import MyPageService from "@/services/MyPageService";
import ItemCard from "@/components/MyPage/ItemCard.vue";
import Error from "../Error.vue";
import RegisterPostModal from "./Modals/RegisterPostModal.vue";
import ReRegisterModal from "./Modals/ReRegisterModal.vue";
import CancelSponser from "./Modals/CancelSponser.vue";
export default {
  name: "SponsorProgress",
  components: {
    ItemCard,
    Error,
    RegisterPostModal,
    ReRegisterModal,
    CancelSponser,
  },
  data() {
    return {
      // progress: [
      //   {
      //     imgTag: "re-registration",
      //     img: "MyPage-item1.png",
      //     title: "NCOVER",
      //     desc: "CHECKER BOARD  URTLEN...",
      //     endDate: "2012-02-13 15:30",
      //     status: "re-registration",
      //   },
      //   {
      //     imgTag: "Sponsor Selection",
      //     img: "MyPage-item1.png",
      //     title: "ROLAROLA",
      //     desc: "leopard fleece jumper black",
      //     endDate: "2012-02-13 15:30",
      //     status: "sponsor-selection",
      //   },
      //   {
      //     imgTag: "Post registration",
      //     img: "MyPage-item1.png",
      //     title: "NCOVER",
      //     desc: "CHECKER BOARD  URTLEN...",
      //     endDate: "2012-02-13 15:30",
      //     status: "post-registration",
      //   },
      //   {
      //     imgTag: "Checking",
      //     img: "MyPage-item1.png",
      //     title: "NCOVER",
      //     desc: "CHECKER BOARD  URTLEN...",
      //     endDate: "2012-02-13 15:30",
      //     status: "checking",
      //   },
      // ],
      progressList: [],
      errorMsg: "",
      myPageService: null,
    };
  },
  created() {
    this.myPageService = new MyPageService();
  },
  setup() {
    const store = inject("store");

    onMounted(() => {
      store.methods.getcampList();
      console.log("onPage", store.state.FltCampaignData);
    });

    onUnmounted(() => {
      store.state.FltCampaignData = [];
      store.state.cancelPopup = false;
      store.state.isReRegisterModalVisible = false;
      store.state.isPostModalVisible = false;
    });

    return {
      store,
    };
  },
  methods : {
    rerun() {
      this.store.state.cancelPopup = false;
      this.store.methods.getcampList();
    },
   },
  // mounted() {
  //   this.myPageService
  //     .getCampaignData(
  //       this.store.state.UserId,
  //       this.store.state.sponsorTabState,
  //       this.store.state.sponcerFilterId,
  //       this.store.state.sponcerChannelType
  //     )
  //     .then((res) => {
  //       console.log("data list", res);
  //       this.progressList = res.data.data;
  //     });
  // },
};
</script>

<style scoped>
.sponsers-wrap {
  padding: 0 20px;
}
</style>