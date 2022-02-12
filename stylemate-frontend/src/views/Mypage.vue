<template>
  <ion-page>
    <!-- header -->
    <TopNav headerTitle="My page"/>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
        <h1>My page</h1>
      <!-- <Login/> -->
      <ion-button  @click="$router.push({name: 'LinkChannel'})">Link with</ion-button>

    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage,  IonContent,  IonButton, } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from '@/components/TopNav.vue';
// import Login from '@/views/pages/Login.vue'

export default {
  name: 'Mypage',
  components: { TopNav,  IonContent, IonPage,  IonButton,},
  // mounted() {
  //   var queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   var token = urlParams.get('token')
  //   localStorage.setItem('token', token);
  //   console.log(urlParams);
  //   console.log(token);
  // }
  methods: {
  openlink(){
console.log("clivk");
  },
}
}

</script>