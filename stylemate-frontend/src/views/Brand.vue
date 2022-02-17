<template>
  <ion-page>
    <!-- header -->
    <TopNav headerTitle="Brand"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap">
      <BrandList />
      <!-- <router-view></router-view> -->
    </div>
    <!-- </ion-content> -->
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
//import ExploreContainer from '@/components/ExploreContainer.vue';
import BrandList from "./pages/BrandList.vue";
import TopNav from "@/components/TopNav.vue";

export default {
  name: "Brand",
  components: { TopNav, BrandList, IonPage },
};
</script>
