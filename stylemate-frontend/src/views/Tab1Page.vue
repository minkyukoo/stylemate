<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1 page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1 Page</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <!-- <ExploreContainer name="Tab 1 page" /> -->
      <Tab1List/>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import Tab1List from '@/components/Tab1List.vue';

export default  {
  components: { Tab1List, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>