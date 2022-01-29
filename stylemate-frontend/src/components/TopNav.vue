<template>
  <ion-header class="header" v-if="mainHeader">
    <ion-toolbar>
      <div class="flex items-center justify-center relative">
        <img src="@/assets/images/logo-black.svg" class="siteLogo" alt="Logo" />
        <NotificationIcon notificationCount="24" />
      </div>
    </ion-toolbar>
  </ion-header>

  <ion-header class="header" v-else-if="innerHeader">
    <ion-toolbar>
      <div class="flex items-center justify-center relative">
        <ion-title>Main header</ion-title>
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
  data() {
    return {
      mainHeader: false,
      innerHeader: true,
      siteLogo: '@/assets/images/logo-black.svg',
    }
  }
}
</script>

<style lang="scss" scoped>
</style>