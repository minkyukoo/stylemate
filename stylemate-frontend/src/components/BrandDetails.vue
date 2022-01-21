<template>
<ion-page>
    <ion-content>
  <ion-slides >
    <ion-slide>
        <!-- <div v-for="slide in slides"
        :key="slide"> -->
<!-- <img src="@/assets/images/Rectangle1.png" /> -->
<!-- <img :src="slide" alt="Sample 1" />
</div> -->
        <img src="@/assets/images/Rectangle1.png" style=" width: 100%;" />
    </ion-slide>
    </ion-slides>
     <ion-card>
         <ion-card-header>
      <ion-card-title>Hotel Panama Garden  <ion-icon :icon="heart" /> 
          <!-- <ion-img src="@/assets/icons/Vector.svg"></ion-img> -->
          </ion-card-title></ion-card-header>
      <ion-card-content>ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.</ion-card-content>
      <ion-button color="dark">Brand Introduction</ion-button>
      <ion-button color="light">View items</ion-button>
     </ion-card>
    </ion-content>
    </ion-page>
</template>
<script>
import { IonButton } from '@ionic/vue';
export default {
name:'BrandDetails',
components: { IonButton },
data(){
    return{
slides: [
        'https://source.unsplash.com/random/800x400?i=1',
        'https://source.unsplash.com/random/800x400?i=2',
        'https://source.unsplash.com/random/800x400?i=3',
        'https://source.unsplash.com/random/800x400?i=4',
        'https://source.unsplash.com/random/800x400?i=5',
        'https://source.unsplash.com/random/800x400?i=6',
        'https://source.unsplash.com/random/800x400?i=1',
        'https://source.unsplash.com/random/800x400?i=2',
        'https://source.unsplash.com/random/800x400?i=3',
        'https://source.unsplash.com/random/800x400?i=4',
        'https://source.unsplash.com/random/800x400?i=5',
        'https://source.unsplash.com/random/800x400?i=6',
      ],
    }
}
}
</script>
<style>
/* ion-slides{
  height: 100%;
} */


ion-slide{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

/* ion-slide p{
  color: #888;
} */

img{
  width: 100% ;
  height: 80%; 
}
.content{
    font-family:Pretendard;
color: #C4C4C4;
font-size: 10px;
}
.title{
    font-family: Europa-Bold;
    font-weight: bold;
    display: flex;
    align-items: center
}
</style>