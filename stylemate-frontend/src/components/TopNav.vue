<template>
  <ion-header class="header main-header" v-if="$route.meta.mainHeader">
    <ion-toolbar>
      <div class="container">
        <div class="flex items-center justify-center relative">
          <img src="@/assets/images/logo-black.svg" class="siteLogo" alt="Logo" />
          <NotificationIcon notificationCount="24" />
        </div>
      </div>
    </ion-toolbar>
  </ion-header>

  <ion-header class="header inner-header" v-else-if="$route.meta.innerHeader">
    <ion-toolbar>
      <div class="container">
        <div class="flex items-center justify-center relative">
          <ion-buttons slot="start" class="back-btn-wrap">
            <button class="back-btn" @click="$router.go(-1)">
              <i class="icon-left-arrow"></i>
            </button>
          </ion-buttons>
          <h1 v-if="headerTitle" class="header-title text-center">{{ headerTitle }}</h1>
          <h1 v-else class="header-title text-center">Main Header</h1>
          <NotificationIcon notificationCount="24" />
        </div>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<script>
// import { IonHeader,IonIcon, IonToolbar, IonTitle,IonButtons } from '@ionic/vue';
import { IonButtons, IonHeader, IonToolbar } from '@ionic/vue';
import NotificationIcon from "./utilities/NotificationIcon.vue";
export default {
  name: 'TopNav',
  // components: { IonHeader, IonToolbar, IonTitle, NotificationIcon, IonButtons, IonIcon },
  components: { IonButtons, IonHeader, IonToolbar, NotificationIcon },
  props: {
    headerTitle: String,
  },
  data() {
    return {
      mainHeader: false,
      innerHeader: true,
      siteLogo: '@/assets/images/logo-black.svg',
    }
  }
}
</script>

<style scoped>
ion-toolbar,
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1;
}
.header-title {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
}
.back-btn-wrap {
  position: absolute;
  left: 0;
}
.back-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.siteLogo {
  max-width: 120px;
  width: 100%;
  height: auto;
}
</style>