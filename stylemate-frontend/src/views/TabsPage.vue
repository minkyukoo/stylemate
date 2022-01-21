<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar >
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon :icon="triangle" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Item</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>BRAND</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <!-- <ion-icon :icon="heart" /> -->
          <ion-icon :src="require(`@/assets/icons/home.svg`)" />
          <ion-label>CONTENTS</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, heart } from 'ionicons/icons';

export default {
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse,
      square,
      triangle,
      heart
    }
  }
}
</script>

<style lang="css" scoped>
page-tabs .tabs .tabbar {
    background: #121212;
    width: 90% !important;
    max-width: 400px !important;
    border-radius: 30px;
    margin: 0px 0px 20px 5% !important;
    max-height: 56px;
    height: 56px;
}
</style>