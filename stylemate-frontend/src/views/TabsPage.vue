<template>
  <!-- <ion-page class="main-container relative"> -->
  <div class="main-container relative">
    <ion-tabs>
      <!-- <TopNav></TopNav> -->
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button
          class="tab-button"
          :class="{ 'myactive': activeId === 'tab1' }"
          tab="tab1"
          href="/home"
          key="tab1"
          @click="onClickState('tab1')"
        >
          <!-- <ion-icon src="../assets/icons/home.svg" /> -->
          <i class="icon icon-dft icon-home" />
          <i class="icon icon-hvr icon-home-white" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button
          class="tab-button"
          :class="{ 'myactive': activeId === 'tab2' }"
          tab="tab2"
          href="/item"
          key="tab2"
          @click="onClickState('tab2')"
        >
          <!-- <ion-icon :src="require(`@/assets/icons/item.svg`)" /> -->
          <i class="icon icon-dft icon-item" />
          <i class="icon icon-hvr icon-item-white" />
          <ion-label>ITEM</ion-label>
        </ion-tab-button>

        <ion-tab-button
          class="tab-button"
          :class="{ 'myactive': activeId === 'tab3' }"
          tab="tab3"
          href="/brands"
          key="tab3"
          @click="onClickState('tab3')"
        >
          <!-- <ion-icon :src="require(`@/assets/icons/brand.svg`)" /> -->
          <i class="icon icon-dft icon-brand" />
          <i class="icon icon-hvr icon-brand-white" />
          <ion-label>BRAND</ion-label>
        </ion-tab-button>

        <ion-tab-button
          class="tab-button"
          :class="{ 'myactive': activeId === 'tab4' }"
          tab="tab4"
          href="/contents"
          key="tab4"
          @click="onClickState('tab4')"
        >
          <!-- <ion-icon :src="require(`@/assets/icons/contents.svg`)" /> -->
          <i class="icon icon-dft icon-contents" />
          <i class="icon icon-hvr icon-contents-white" />
          <ion-label>CONTENTS</ion-label>
        </ion-tab-button>

        <ion-tab-button
          class="tab-button"
          :class="{ 'myactive': activeId === 'tab5' }"
          tab="tab5"
          href="/mypage"
          key="tab5"
          @click="onClickState('tab5')"
        >
          <!-- <ion-icon :src="require(`@/assets/icons/mypage.svg`)" /> -->
          <i class="icon icon-dft icon-mypage" />
          <i class="icon icon-hvr icon-mypage-white" />
          <ion-label>MY PAGE</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
    <StickyBtn/>
  </div>
  <!-- </ion-page> -->
</template>

<script>

import StickyBtn from '@/components/StickyBtn.vue';
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
    StickyBtn
  },
  data() {
    return {
      hover: true,
      activeId: "tab1",
    };
  },
  // setup() {
  //   const userData = inject("userData");

  //   onMounted(() => {
  //     var currentTime = new Date().getTime();
  //     if(localStorage.token && localStorage.tokenexpiresAt && localStorage.tokenexpiresAt > currentTime) {
  //       userData.methods.getUserData();
  //     }
  //   });

  //   return { userData };
  // },
  methods: {
    // onHoverState(ev) {
    //   var target = ev.target;
    //   console.log('target', target);
    //   if (target) {
    //     for (let i = 0; i < target.children.length; i++) {
    //       console.log(target.children[0].tagName);
    //     }
    //   }
    // },
    onClickState(id) {
      this.activeId = id;
      console.log("this.activeId", this.activeId);
    },
  },
};
</script>

<style scoped>
ion-tabs{
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
  background: black;
  border-radius: 8px;
  height: 70px;
  margin: 0 10px 10px;
}
ion-tab-button {
  background: black;
  overflow: hidden;
}
ion-tab-button.myactive ion-label {
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
ion-label {
  /* font-family: Europa-Bold; */
  font-style: normal;
  font-weight: bold;
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
