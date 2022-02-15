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
        <MyPageDetails />

    </ion-content>
    <!-- End page content -->

    
  </ion-page>
</template>

<script>
import { IonPage,  IonContent, } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from '@/components/TopNav.vue';
import MyTop from '@/components/MyPageTop.vue';
import MyPageDetails from '@/components/MyPageDetails.vue';
// import Login from '@/views/pages/Login.vue'
// Import Swiper styles
// import "swiper/css";

// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
// import { FreeMode, Scrollbar, Mousewheel } from "swiper";

export default {
  name: 'Mypage',
  components: { TopNav,  IonContent, IonPage, MyTop, MyPageDetails },
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