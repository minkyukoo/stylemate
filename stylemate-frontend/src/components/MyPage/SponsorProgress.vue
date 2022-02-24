<template>
  <div class="sponsers-wrap">
    <div v-if="store.state.FltCampaignData.length > 0">
      <ItemCard
        :progressDetails="item"
        v-for="(item, index) in store.state.FltCampaignData"
        :key="index"
      />
    </div>
    <div v-else>
      <Error
        errors="You have not yet been selected for sponsorship. 
        Please apply for sponsorship for products from other brands as well."
      />
    </div>
    <RegisterPostModal />
    <CancelSponser />
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
import MyPageService from "@/services/MyPageService";
import ItemCard from "@/components/MyPage/ItemCard.vue";
import Error from "../Error.vue";
import RegisterPostModal from "./Modals/RegisterPostModal.vue";
import CancelSponser from "./Modals/CancelSponser.vue";
export default {
  name: "SponsorProgress",
  components: {
    ItemCard,
    Error,
    RegisterPostModal,
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
      console.log("onPage",store.state.FltCampaignData);
    });

    return {
      store,
    };
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