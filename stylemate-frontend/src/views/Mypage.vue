<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">

      <Login/>





      <!-- <ExploreContainer name="My page" /> -->
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage,  IonContent } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from '@/components/TopNav.vue';
import Login from '@/views/pages/Login.vue'

export default {
  name: 'Mypage',
  components: { TopNav,  Login,  IonContent, IonPage, }
}
</script>