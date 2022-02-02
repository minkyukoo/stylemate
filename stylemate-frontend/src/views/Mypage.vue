<template>
  <ion-page>
    <!-- header -->
    <TopNav headerTitle="My page"/>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">

      <Login/>

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
  components: { TopNav,  Login,  IonContent, IonPage, },
  // mounted() {
  //   var queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   var token = urlParams.get('token')
  //   localStorage.setItem('token', token);
  //   console.log(urlParams);
  //   console.log(token);
  // }
}
</script>