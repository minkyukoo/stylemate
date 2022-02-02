<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
       <ion-button router-link="/mypage">mypage</ion-button>
      <ExploreContainer name="Home page" />
      <div class="test">
        <h1>HEllo</h1>
        <i class="icon-notification"></i>
        </div>
      <Tab1List />
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import Tab1List from "@/components/Tab1List.vue";
import TopNav from "@/components/TopNav.vue";
//import axios from 'axios';


export default {
  name: 'Home',
  components: { ExploreContainer, TopNav, Tab1List, IonContent, IonPage, IonButton },
  mounted() {
    var queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var token = urlParams.get('token')
    localStorage.setItem('token', token);
    console.log(urlParams);
    console.log(token);
  }
}
</script>
