<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <BrandList />
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
//import ExploreContainer from '@/components/ExploreContainer.vue';
import BrandList from "./pages/BrandList.vue";
import TopNav from "@/components/TopNav.vue";

export default {
  name: "Brand",
  components: { TopNav, BrandList, IonContent, IonPage },
};
</script>
