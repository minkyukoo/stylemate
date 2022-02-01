<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
       <!-- <ion-button router-link="/mypage">mypage</ion-button> -->
      <!-- <ExploreContainer name="Home page" /> -->
      <!-- <Tab1List /> -->
      <ion-slides pager="true" :options="slideOpts" class="ma">
        <ion-slide>
          <img src="@/assets/images/main-banner-1.png">
          <!-- <h1>Slide 1</h1> -->
        </ion-slide>
        <ion-slide>
          <img src="@/assets/images/main-banner-1.png">
          <!-- <h1>Slide 2</h1> -->
        </ion-slide>
        <ion-slide>
          <img src="@/assets/images/main-banner-1.png">
          <!-- <h1>Slide 3</h1> -->
        </ion-slide>
      </ion-slides>

      <ion-slides pager="true" :options="multiSlideOpts">
        <ion-slide>
          <div class="multiSlideWrap">
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
          </div>
        </ion-slide>
        <ion-slide>
          <div class="multiSlideWrap">
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
          </div>
        </ion-slide>
        <ion-slide>
          <div class="multiSlideWrap">
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
          </div>
        </ion-slide>
      </ion-slides>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
// import ExploreContainer from "@/components/ExploreContainer.vue";
// import Tab1List from "@/components/Tab1List.vue";
import TopNav from "@/components/TopNav.vue";
import { IonSlides, IonSlide } from '@ionic/vue';
//import axios from 'axios';


export default {
  name: 'Home',
  components: { TopNav, IonContent, IonPage, IonSlides, IonSlide},
  // mounted() {
  //   var queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   var token = urlParams.get('token')
  //   console.log(token);
  // }
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    }; 
    return { slideOpts }
  }
};
</script>
