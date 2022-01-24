<template>
  <ion-page class="main-container relative">
    <ion-tabs>
      <TopNav></TopNav>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :src="require(`@/assets/icons/home.svg`)" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
         <ion-icon :src="require(`@/assets/icons/item.svg`)" />
          <ion-label>ITEM</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :src="require(`@/assets/icons/brand.svg`)" />
          <ion-label>BRAND</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :src="require(`@/assets/icons/contents.svg`)" />
          <ion-label>CONTENTS</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :src="require(`@/assets/icons/mypage.svg`)" />
          <ion-label>MY PAGE</ion-label>
        </ion-tab-button>

        
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, heart } from 'ionicons/icons';
import TopNav from '@/components/TopNav.vue';

export default {
  components: { TopNav, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
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

<style lang="scss" scoped>
.main-container {
  max-width: 500px;
  min-width: 360px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
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