<template>
  <ion-page class="main-container relative">
    <ion-tabs>
      <!-- <TopNav></TopNav> -->
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar >
        <ion-tab-button tab="tab1" href="/home">
           <!-- <ion-icon src="../assets/icons/home.svg" /> -->
           <i class="icon-home"/>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/item">
         <ion-icon :src="require(`@/assets/icons/item.svg`)" />
          <ion-label>ITEM</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/brand">
          <ion-icon :src="require(`@/assets/icons/brand.svg`)" />
          <ion-label>BRAND</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/contents">
          <ion-icon :src="require(`@/assets/icons/contents.svg`)" />
          <ion-label>CONTENTS</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/mypage">
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
// import TopNav from '@/components/TopNav.vue';

export default {
  name: 'TabPage',
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

<style scoped>
ion-icon {
  color: blue;
  --ionicon-stroke-width: 16px;
}

.main-container {
  max-width: 500px;
  min-width: 360px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
ion-tab-bar {
    background: black;
    border-radius: 8px;
}
ion-tab-button {
    background: black;
    overflow: hidden;
}
.page-tabs .tabs .tabbar {
    background: #121212;
    width: 90% !important;
    max-width: 400px !important;
    border-radius: 30px;
    margin: 0px 0px 20px 5% !important;
    max-height: 56px;
    height: 56px;
}

</style>