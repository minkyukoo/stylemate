<template>
  <ion-page>
    <!-- header -->
    <TopNav headerTitle="Sponsorship" />
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <MyTop />
      <MyPageDetailsSponsorship />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import MyTop from "@/components/MyPage/MyPageTop.vue";
import MyPageDetailsSponsorship from "@/components/MyPage/MyPageDetailsSponsorship.vue";
export default {
  name: "Sponsorship",
  components: { TopNav, IonContent, IonPage, MyTop, MyPageDetailsSponsorship },
};
</script>

<style>
</style>