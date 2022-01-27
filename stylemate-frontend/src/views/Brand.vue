<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <BrandList />
          </ion-col>
          <ion-col>
            <BrandDetails />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';
import BrandList from './pages/BrandList.vue'
import BrandDetails from '@/components/BrandDetails.vue'
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'Brand',
  components: { TopNav, BrandList, BrandDetails, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>