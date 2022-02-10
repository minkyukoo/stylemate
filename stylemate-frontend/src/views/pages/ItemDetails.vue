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
    
      <div class="mainslide">
        <ion-slides pager="true" :options="slideOpts">
          <ion-slide>
              <figure>
                  <img src="@/assets/images/product-details-banner.jpg">
                  <div class="top-social-icon">
                      <a href="#"><img src="@/assets/icons/instagram.svg"/></a>
                  </div>
              </figure>
          </ion-slide>
          <ion-slide>
            <figure>
                  <img src="@/assets/images/product-details-banner.jpg">
                  <div class="top-social-icon">
                      <a href="#"><img src="@/assets/icons/instagram.svg"/></a>
                  </div>
              </figure>
          </ion-slide>
          <ion-slide>
            <figure>
                  <img src="@/assets/images/product-details-banner.jpg">
                  <div class="top-social-icon">
                      <a href="#"><img src="@/assets/icons/instagram.svg"/></a>
                  </div>
              </figure>
          </ion-slide>
        </ion-slides>
      </div>
    

    <ion-infinite-scroll threshold="50px" id="infinite-scroll">
    <ion-infinite-scroll-content loading-spinner="bubbles">
      <div class="item-wrapper">
        <div class="top-section">
          <div class="left-section">
            left
          </div>
          <div class="right-section">
            right
          </div>
        </div>
        
      </div>
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
  </ion-page>
</template>
<script>
import {IonPage,IonHeader,IonToolbar,IonTitle,IonButtons,IonInfiniteScroll,IonInfiniteScrollContent,} from "@ionic/vue";
import { IonSlides, IonSlide } from '@ionic/vue';
export default {
  name: "BrandDetails",
  components: {IonPage,IonHeader,IonToolbar,IonTitle,IonButtons, IonSlides, IonSlide,IonInfiniteScroll,
    IonInfiniteScrollContent,},

  data() {
    return {
      
    };
  },
};
</script>
<style scoped>
.mainslide figure{
    position: relative;
    width: 100%;
}
.mainslide figure .top-social-icon{
    position: absolute;
    top: 13px;
    left: 13px;
}
.item-wrapper {
  padding: 20px 20px 60px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  top: 180px;
  /* background-image: linear-gradient(
    148.66deg,
    rgba(241, 241, 241, 0.5) 18.92%,
    rgba(255, 255, 255, 0.1) 80.41%
  ); */
  background: #ffffff;
  transition: all 0.5s ease-in-out;
  /* backdrop-filter: blur(30px); */
}
</style>
