<template>
  <ion-page class="main-container relative">
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title style="text-align: center">View details</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="mainslide">
        <ion-slides pager="true" :options="slideOpts">
          <ion-slide>
            <img src="@/assets/images/product-details-banner.jpg">
          </ion-slide>
          <ion-slide>
            <img src="@/assets/images/product-details-banner.jpg">
          </ion-slide>
          <ion-slide>
            <img src="@/assets/images/product-details-banner.jpg">
          </ion-slide>
        </ion-slides>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,} from "@ionic/vue";
import { IonSlides, IonSlide } from '@ionic/vue';
export default {
  name: "BrandDetails",
  components: {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonButtons, IonSlides, IonSlide},

  data() {
    return {
      
    };
  },
};
</script>
<style>

</style>
