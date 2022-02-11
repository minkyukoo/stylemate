<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <!-- <ExploreContainer name="Contents page" /> -->
      <div class="inner-container pad-t-40">
        <ContentPage />
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from '@/components/TopNav.vue';
import ContentPage from './pages/ContentPage.vue';

export default {
  name: 'Contents',
  components: { TopNav, IonContent, IonPage, ContentPage }
}
</script>