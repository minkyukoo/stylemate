<template>
  <!-- <ion-page class="main-container relative"> -->
  <div class="main-container relative">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar id="ionTabBar" :style="{visibility : `${store.state.hideBar? 'hidden' :''}`}">
        <ion-tab-button class="tab-button" tab="tab1" href="/home" key="tab1">
          <!-- <ion-icon src="../assets/icons/home.svg" /> -->
          <i class="icon icon-dft icon-home" />
          <i class="icon icon-hvr icon-home-white" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button class="tab-button" tab="tab2" href="/item" key="tab2">
          <!-- <ion-icon :src="require(`@/assets/icons/item.svg`)" /> -->
          <i class="icon icon-dft icon-item" />
          <i class="icon icon-hvr icon-item-white" />
          <ion-label>ITEM</ion-label>
        </ion-tab-button>

        <ion-tab-button class="tab-button" tab="tab3" href="/brands" key="tab3">
          <!-- <ion-icon :src="require(`@/assets/icons/brand.svg`)" /> -->
          <i class="icon icon-dft icon-brand" />
          <i class="icon icon-hvr icon-brand-white" />
          <ion-label>BRAND</ion-label>
        </ion-tab-button>

        <ion-tab-button
          class="tab-button"
          tab="tab4"
          href="/contents"
          key="tab4"
        >
          <!-- <ion-icon :src="require(`@/assets/icons/contents.svg`)" /> -->
          <i class="icon icon-dft icon-contents" />
          <i class="icon icon-hvr icon-contents-white" />
          <ion-label>CONTENTS</ion-label>
        </ion-tab-button>

        <ion-tab-button class="tab-button" tab="tab5" href="/mypage" key="tab5">
          <!-- <ion-icon :src="require(`@/assets/icons/mypage.svg`)" /> -->
          <i class="icon icon-dft icon-mypage" />
          <i class="icon icon-hvr icon-mypage-white" />
          <ion-label>MY PAGE</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
    <StickyBtn />
  </div>
  <!-- </ion-page> -->
</template>

<script>
import { inject } from "vue";
import { watch } from "vue";
import StickyBtn from "@/components/StickyBtn.vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  // IonIcon,
  // IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
// import { ellipse, square, triangle, heart } from "ionicons/icons";
// import TopNav from '@/components/TopNav.vue';
// import { inject, onMounted } from "vue";
// import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonRouterOutlet } from "@ionic/vue";
export default {
  name: "TabPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    // IonIcon,
    // IonPage,
    IonRouterOutlet,
    StickyBtn,
  },
  setup() {
    const store = inject("store");

    watch(store.state.isPostModalVisible, () => {
      document.querySelector("ion-tab-bar").classList.add = "remove-tabbar";
    });

    return {
      store,
      // setTab,
    };
  },

  data() {
    return {
      hover: true,
      activeId: "tab1",
    };
  },
};
</script>

<style scoped>
ion-tabs {
  background: #fff;
}
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
  height: 70px;
  margin: 0 10px 10px;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  position: absolute;
  left: auto;
  right: auto;
  bottom: 0;
  width: calc(100% - 20px);
}
ion-tab-button {
  /* background: black; */
  /* background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px); */
  background: transparent;
  overflow: hidden;
  --padding-start: 0;
  --padding-end: 0;
}
.button-native {
  background: transparent !important;
  padding: 0 !important;
  padding-inline-start: 0 !important;
  padding-inline-end: 0 !important;
}
ion-tab-button.tab-selected ion-label {
  color: #ffffff;
}
ion-tab-button .icon.icon-hvr {
  display: none;
}
ion-tab-button:hover .icon.icon-hvr {
  display: block;
}
ion-tab-button:hover .icon.icon-dft {
  display: none;
}
ion-tab-button.tab-selected .icon.icon-hvr {
  display: block;
}
ion-tab-button.tab-selected .icon.icon-dft {
  display: none;
}
ion-label {
  font-family: europa, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 9px;
  line-height: 9px;
  color: #797979;
  text-transform: uppercase;
  margin-top: 6px;
}
ion-tab-button:hover ion-label {
  color: #ffffff;
}
ion-tab-button.myactive ion-label {
  color: #ffffff;
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
