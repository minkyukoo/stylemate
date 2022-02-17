<template>
  <ion-page>
    <!-- header -->
    <TopNav headerTitle="like" />
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <!-- <h1>My page</h1> -->
      <MyTop />
      <!-- <Login/> -->
      <!-- <ion-button  @click="$router.push({name: 'LinkChannel'})">Link with</ion-button> -->
      <LikedTab />
      <LikedFilter />
      <LikedItems />
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
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

export default {
  name: "MypageLiked",
  components: {
    TopNav,
    IonContent,
    IonPage,
    MyTop,
    LikedItems,
    LikedTab,
    LikedFilter,
  },
  // mounted() {
  //   var queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   var token = urlParams.get('token')
  //   localStorage.setItem('token', token);
  //   console.log(urlParams);
  //   console.log(token);
  // }
  methods: {
    openlink() {
      console.log("clivk");
    },
  },
};
</script>