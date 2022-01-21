<template>
  <ion-page>
    <TopNav></TopNav>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1 Page</ion-title>
          <p class="text-2xl">The quick brown fox ...</p>
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
import TopNav from '@/components/TopNav.vue';

export default  {
  components: { TopNav,Tab1List, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>