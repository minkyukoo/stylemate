<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <h1>Notifications</h1>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent, } from '@ionic/vue';
import TopNav from '@/components/TopNav.vue';
export default {
  name: 'Notifications',
  components: { TopNav, IonContent, IonPage }
}
</script>

<style lang="scss" scoped>
</style>