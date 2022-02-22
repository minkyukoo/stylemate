<template>
  <ion-page>
    <!-- header -->
    <TopNav headerTitle="My page" />
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <!-- <h1>My page</h1> -->
      <MyTop />
      <!-- <Login/> -->
      <!-- <ion-button  @click="$router.push({name: 'LinkChannel'})">Link with</ion-button> -->
      <MyPageDetailsDefault />
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { inject } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import MyPageServices from "../services/MyPageService";
import TopNav from "@/components/TopNav.vue";
import MyTop from "@/components/MyPage/MyPageTop.vue";
import MyPageDetailsDefault from "@/components/MyPage/MyPageDetailsDefault.vue";

export default {
  name: "Mypage",
  components: { TopNav, IonContent, IonPage, MyTop, MyPageDetailsDefault },

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
      this.store.state.MyPageTopDetails.name = res.data.name;
      this.store.state.MyPageTopDetails.email = res.data.email;
      this.store.state.MyPageTopState = res.data.influence.channel[0].stylemateStatus;
      this.store.state.MyPageTopDetails.profile_img =
        res.data.influence.channel[0].instagramChannel.thumbnailOriginalUrl;
      this.store.state.MyPageRateBox.Avg_like =
        res.data.influence.channel[0].instagramChannel.latelyEngagementAvg;
      this.store.state.MyPageRateBox.Avg_comment =
        res.data.influence.channel[0].instagramChannel.latelyCommentCountAvg;
      this.store.state.MyPageRateBox.EGR_activity =
        res.data.influence.channel[0].instagramChannel.engagementRate;
      let channelStats = res.data.influence.channel[0].channelStat;
      if (Object.keys(channelStats).length > 0) {
        this.store.state.MyPageSponsorBox.sponsorship =
          channelStats.stylemateBookingCount;
        this.store.state.MyPageSponsorBox.Post_activity =
          channelStats.stylematePostCount;
        console.log("asdf", channelStats.stylemateBookingCount);
      } else {
        this.store.state.MyPageSponsorBox.sponsorship = 0;
        this.store.state.MyPageSponsorBox.Post_activity = 0;
      }
      this.store.state.MyPageSponsorBox.like =
        res.data.influence.influenceLikeCount;
      // this.store.state.MyPageSponsorBox.sponsorship =
      console.log("just", this.profileImg);
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