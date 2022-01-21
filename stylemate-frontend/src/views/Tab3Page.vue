<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
          <h1></h1>
        </ion-toolbar>
      </ion-header>
      
      <!-- <ExploreContainer name="Tab 3 page" /> -->
      <ion-grid>
        <ion-row>
    <ion-col>
      <BrandList/>
    </ion-col>
    <ion-col>
<BrandDetails/>
    </ion-col>
    </ion-row>
      </ion-grid>
     

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';
import BrandList from './pages/BrandList.vue'
import BrandDetails from '@/components/BrandDetails.vue'

export default  {
  components: { BrandList, BrandDetails, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>