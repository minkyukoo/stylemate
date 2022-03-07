<template>
  <div class="mypage-page">
    <!-- header -->
    <TopNav headerTitle="마이페이지" />
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap">
      <!-- <h1>My page</h1> -->
      <MyTop />
      <!-- <Login/> -->
      <!-- <ion-button  @click="$router.push({name: 'LinkChannel'})">Link with</ion-button> -->
      <MyPageDetailsDefault />
    </div>
    <!-- </ion-content> -->
    <!-- End page content -->
  </div>
</template>

<script>
import { inject } from "vue";
// import { IonPage, IonContent } from "@ionic/vue";
import MyPageServices from "../services/MyPageService";
import TopNav from "@/components/TopNav.vue";
import MyTop from "@/components/MyPage/MyPageTop.vue";
import MyPageDetailsDefault from "@/components/MyPage/MyPageDetailsDefault.vue";

export default {
  name: "Mypage",
  components: { TopNav, MyTop, MyPageDetailsDefault },

  data() {
    return {
      myPageServices: null,
    };
  },

  created() {
    this.myPageServices = new MyPageServices();
  },

  mounted() {
    this.myPageServices.getMyPageData().then((res) => {
      console.log("res", res);
      let globalState = this.store.state;
      // localStorage.setItem("User_id", res.data.uid);
      globalState.UserId = res.data.uid;
      globalState.influenceId = res.data.influence.influenceStat.influenceId;
      globalState.MyPageTopDetails.name = res.data.name;
      globalState.MyPageTopDetails.email = res.data.email;
      globalState.MyPageTopState =
        res.data.influence.channel[0].stylemateStatus;
      globalState.MyPageTopDetails.profile_img = res.data.influence.channel[0]
        .instagramChannel.thumbnailUrl
        ? res.data.influence.channel[0].instagramChannel.thumbnailUrl
        : res.data.influence.channel[0].instagramChannel.thumbnailOriginalUrl;
      globalState.MyPageRateBox.Avg_like =
        res.data.influence.channel[0].instagramChannel.latelyEngagementAvg;
      globalState.MyPageRateBox.Avg_comment =
        res.data.influence.channel[0].instagramChannel.latelyCommentCountAvg;
      globalState.MyPageRateBox.EGR_activity = `${
        res.data.influence.channel[0].instagramChannel.engagementRate / 100
      }%`;
      globalState.MyPageSponsorBox.like = res.data.influence.influenceLikeCount;
      let channelStats = res.data.influence.channel[0].channelStat;
      if (Object.keys(channelStats).length > 0) {
        globalState.MyPageSponsorBox.sponsorship =
          channelStats.stylemateBookingCount;
        globalState.MyPageSponsorBox.Post_activity =
          channelStats.stylematePostCount;
        // console.log("asdf", channelStats.stylemateBookingCount);
      } else {
        globalState.MyPageSponsorBox.sponsorship = 0;
        globalState.MyPageSponsorBox.Post_activity = 0;
      }

      // this.store.state.MyPageSponsorBox.sponsorship =
      // console.log("just", this.profileImg);
    });
  },

  setup() {
    const store = inject("store");
    return {
      store,
    };
  },

  methods: {
    openlink() {
      console.log("clivk");
    },
  },
};
</script>
