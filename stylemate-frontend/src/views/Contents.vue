<template>
  <ion-page>
    <!-- header -->
    <TopNav headerTitle="Contents"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap">
      <!-- <ExploreContainer name="Contents page" /> -->
      <div class="inner-container pad-t-40">
        <ContentPage />
      </div>
    </div>
    <!-- </ion-content> -->
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
//import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from "@/components/TopNav.vue";
import ContentPage from "./pages/ContentPage.vue";

export default {
  name: "Contents",
  components: { TopNav, IonPage, ContentPage },
};
</script>
