<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
    
      <ExploreContainer name="Home page" />
      <Tab1List/>


    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage,  IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Tab1List from '@/components/Tab1List.vue';
import TopNav from '@/components/TopNav.vue';
//import axios from 'axios';


export default  {
  name: 'Home',
  components: { ExploreContainer,TopNav,Tab1List,  IonContent, IonPage },
// mounted(){
// this.axios.get('https://elsa.beta.mediance.co.kr').then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
// }
}
</script>