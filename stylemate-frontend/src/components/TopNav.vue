<template>
  <ion-header class="header" v-if="$route.meta.mainHeader">
    <ion-toolbar>
      <div class="container">
        <div class="flex items-center justify-center relative">
          <img src="@/assets/images/logo-black.svg" class="siteLogo" alt="Logo" />
          <NotificationIcon notificationCount="24" />
        </div>
      </div>
    </ion-toolbar>
  </ion-header>

  <ion-header class="header" v-else-if="$route.meta.innerHeader">
    <ion-toolbar>
      <ion-buttons slot="start">
         <Button @click="$router.go(-1)"><i class="icon-left-arrow"></i></Button>
      </ion-buttons>
      <div class="flex items-center justify-center relative">
        <ion-title v-if="headerTitle" class="text-center">{{ headerTitle }}</ion-title>
        <ion-title v-else class="text-center">Main Header</ion-title>
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
}
.siteLogo {
  max-width: 120px;
  width: 100%;
  height: auto;
}
</style>