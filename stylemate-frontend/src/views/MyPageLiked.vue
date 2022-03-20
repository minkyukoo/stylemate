<template>
  <div class="mypage-liked">
    <!-- header -->
    <TopNav headerTitle="좋아요" />
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap">
      <!-- <h1>My page</h1> -->
      <MyTop :userDetails="userDetail" :status="status" :image="profileImg" />
      <!-- <Login/> -->
      <!-- <ion-button  @click="$router.push({name: 'LinkChannel'})">Link with</ion-button> -->
      <LikedTab />
      <LikedFilter v-if="store.state.likedTabState === 'item'" />
      <LikedItems />
    </div>
    <!-- </ion-content> -->
    <!-- End page content -->
  </div>
</template>

<script>
// import { IonPage, IonContent } from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from "@/components/TopNav.vue";
import MyTop from "@/components/MyPage/MyPageTop.vue";
import LikedItems from "@/components/MyPage/liked/likedItems.vue";
import LikedTab from "@/components/MyPage/liked/likedTab.vue";
import LikedFilter from "@/components/MyPage/liked/likedFilter.vue";
// import Login from '@/views/pages/Login.vue'
// Import Swiper styles
// import "swiper/css";

// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
// import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { inject } from "vue";
export default {
  name: "MypageLiked",
  components: {
    TopNav,
    // IonContent,
    // IonPage,
    MyTop,
    LikedItems,
    LikedTab,
    LikedFilter,
  },
  data() {
    return {
      tabstate: "item",
    };
  },
  setup() {
    const store = inject("store");

    return {
      store,
    };
  },
  methods: {
    // setLikeTab(tab) {
    //   this.tabState = tab;
    //   console.log(this.tabState);
    // },
  },
};
</script>
