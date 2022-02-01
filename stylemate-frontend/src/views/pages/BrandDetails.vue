<template>
  <ion-page class="main-container relative">
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title style="text-align:center">View details</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
     <div class="parallax"></div>

<div  class="scrolldiv">
 <ion-card class="maincard">
          <ion-card-header>
            <ion-card-title>
              Hotel Panama Garden
              <!-- <ion-icon :icon="heart" /> -->
              <img src="@/assets/icons/Vector.svg" alt="img" style="height:20px">
            </ion-card-title>
          </ion-card-header>
          <ion-card-content
            class="subcontent"
          >ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices. 
          </ion-card-content>
           <div>
            <ion-button
              v-on:click="show()"
              :class="{ active: display == 'bnt1' }"
              >Brand Introduction</ion-button
            >
            <ion-button
              v-on:click="showItems()"
              :class="{ active: visible == 'bnt1' }"
              >View items</ion-button
            >{{visible}}
            <div>
                  <div v-if="display" id="bnt1"><BrandIntroduction /></div>
            <div v-if="visible" id="bnt2"><BrandItem /></div>
            </div>
          </div>
        </ion-card>
       
</div>
    </ion-content>
  </ion-page>
</template>
<script>
import {   IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons, } from "@ionic/vue";
import BrandIntroduction from "@/components/BrandIntroduction.vue";
import BrandItem from "@/components/BrandItem.vue";
export default {
  name: "BrandDetails",
  components: {   IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  BrandIntroduction,
  BrandItem
 },

  data() {
    return {
      slides: [
        "https://source.unsplash.com/random/800x400?i=1",
        "https://source.unsplash.com/random/800x400?i=2",
        "https://source.unsplash.com/random/800x400?i=3",
        "https://source.unsplash.com/random/800x400?i=4",
        "https://source.unsplash.com/random/800x400?i=5",
        "https://source.unsplash.com/random/800x400?i=6",
        "https://source.unsplash.com/random/800x400?i=1",
        "https://source.unsplash.com/random/800x400?i=2",
        "https://source.unsplash.com/random/800x400?i=3",
        "https://source.unsplash.com/random/800x400?i=4",
        "https://source.unsplash.com/random/800x400?i=5",
        "https://source.unsplash.com/random/800x400?i=6",
      ],

      display: false,
      visible: false,
    };
  },
  methods: {
    show() {
      this.display = true;
    },
    showItems(){
      this.visible=!this.visible
    }
  },
};
</script>
<style>
.parallax { 
  /* The image used */
 background-image: url("https://source.unsplash.com/random/800x400?i=1"); 

  /* Set a specific height */
  min-height: 500px;  

  /* Create the parallax scrolling effect */
   background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
 } 
.main-container {
  max-width: 500px;
  min-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
.scrolldiv{
  height:1000px;
   max-width: 500px;
  min-width: 500px;
  background-color:rgb(238, 230, 230);
  font-size:36px
}
.subcontent {
  font-family: Pretendard;
  color: #c4c4c4;
  font-size: 10px;
}
.miancard {
 display: flex;
        flex-direction: column;
        margin: 0 !important;
       
        width: 500px;
   /* max-width: 500px;
  min-width: 500px; */
  background-color:rgb(238, 230, 230);
  font-size:36px
}
/* .mainslide {
  background-color: #c4c4c4;
} */
img {
  width: 100%;
  height: 300px;
  object-fit: fill;
}
</style>
