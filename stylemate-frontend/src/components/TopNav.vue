<template>
  <ion-header class="header" v-if="mainHeader">
    <ion-toolbar>
      <div class="container">
        <div class="flex items-center justify-center relative">
          <img src="@/assets/images/logo-black.svg" class="siteLogo" alt="Logo" />
          <NotificationIcon notificationCount="24" />
        </div>
      </div>
    </ion-toolbar>
  </ion-header>

  <ion-header class="header" v-else-if="innerHeader">
    <ion-toolbar>
      <div class="flex items-center justify-center relative">
        <ion-title v-if="headerTitle" class="text-center">{{ headerTitle }}</ion-title>
        <ion-title v-else class="text-center">Main Header</ion-title>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import NotificationIcon from "./utilities/NotificationIcon.vue";
export default {
  name: 'TopNav',
  components: { IonHeader, IonToolbar, IonTitle, NotificationIcon },
  props: {
    headerTitle: String,
  },
  data() {
    return {
      mainHeader: true,
      innerHeader: false,
      siteLogo: '@/assets/images/logo-black.svg',
    }
  }
}
</script>

<style scoped>
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
}
</style>