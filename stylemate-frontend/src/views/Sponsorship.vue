<template>
  <div class="sponsership-page">
    <!-- header -->
    <TopNav headerTitle="Sponsorship" />
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap">
      <MyTop />
      <MyPageDetailsSponsorship />
    </div>
    <!-- </ion-content> -->
  </div>
</template>

<script>
// import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import MyTop from "@/components/MyPage/MyPageTop.vue";
import MyPageDetailsSponsorship from "@/components/MyPage/MyPageDetailsSponsorship.vue";
export default {
  name: "Sponsorship",
  components: { TopNav, MyTop, MyPageDetailsSponsorship },
};
</script>

<style>
</style>