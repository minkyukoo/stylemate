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
    <!-- <ion-button class="button1" >BrandIntroduction</ion-button>
      <ion-button class="button2">View items</ion-button> -->
      <!-- <ion-toolbar>
    <ion-segment>
      <ion-segment-button value="Brand Introduction">
       Brand Introduction
      </ion-segment-button>
      <ion-segment-button value=" View items">
       View items
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar> -->


        <!-- <ion-tab-button tab="Brand Introduction">
          <ion-icon :icon="square" />
          <ion-label >Brand Introduction</ion-label>
          <div><BrandIntroduction/></div>
        </ion-tab-button> -->

        <ion-button  (click)="dispaly=!display">Brand Introduction</ion-button>
        {{display}}
<div v-if="display"><BrandIntroduction /></div>


  <!-- <ion-content v-if="display">
        <h3>‘Nike’ starts with having faith and confidence in my own abilities and values.<br/>

It has the meaning of French 'amour propre' which contains the meaning of self-esteem and self-respect. We pursue a sensible everyday look so that the wearer can have a natural look of their own with minimal and neat details and a snug fit that fits the body type.</h3>

<div>
    <ion-img src="@/assets/icon/Rectangle7.jpg"></ion-img>
</div>
    </ion-content> -->

        <!-- <ion-tab-button tab="tab1">
          <ion-icon :icon="square" />
          <ion-label> View items</ion-label>
          <div> <BrandItem/></div> 
        </ion-tab-button>-->
       


 
     </ion-card>
    </ion-content>
    </ion-page>
    <!-- <div class="container">
  <h2>Simple Collapsible</h2>
  <p>Click on the button to toggle between showing and hiding content.</p>
  <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
  <div id="demo" class="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
</div> -->
</template>
<script>
import { IonIcon, IonPage,} from '@ionic/vue';
//import BrandIntroduction from './BrandIntroduction.vue'
//import BrandItem from './BrandItem.vue'
export default {
name:'BrandDetails',
components: {  IonIcon, IonPage,},

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
      display:false
    }
},

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

ion-segment-button{
background: #f0eaea;
border-radius: 8px;
 
/* background-activated: #ffffff;
background-checked: #ffffff;
background-hover: #ffffff; */
}

</style>