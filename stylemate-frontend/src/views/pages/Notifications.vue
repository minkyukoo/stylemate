<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="inner-container">

      <DropDown class="pad-t-32"/>

      <h1>Notifications</h1>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import {
  IonPage, IonContent,
} from '@ionic/vue';
import TopNav from '@/components/TopNav.vue';
import DropDown from '@/components/utilities/DropDown.vue';
export default {
  name: 'Notifications',
  components: { TopNav, IonContent, IonPage, DropDown }
}
</script>

<style>
.main-container {
  max-width: 500px;
  min-width: 360px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
</style>