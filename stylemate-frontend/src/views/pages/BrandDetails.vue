<template>
<ion-card class="main">
  <!-- Slide of image start -->
   
  <ion-item class="mainslide"> 
     <ion-slides >
    <ion-slide>
        <!-- <div v-for="slide in slides"
        :key="slide"> 
<img :src="slide" alt="Sample 1" />
</div> -->
        <img src="@/assets/images/Rectangle1.png"/>
    </ion-slide>
    </ion-slides>
    </ion-item>
<!-- Slide of image End -->

<!-- Content card start -->
    <ion-card class="maincard" >
  <ion-card-header>
    <ion-card-title>Hotel Panama Garden  <ion-icon :icon="heart" /> 
    <!-- <img src="@/assets/icons/Vector.svg" alt="" slot="end"> -->
    </ion-card-title>
  </ion-card-header>
   <ion-card-content class="subcontent">
    ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices. 
  </ion-card-content>
     <div>
       <ion-button v-on:click='show()' :class="{active:display=='bnt1'}">Brand Introduction</ion-button>{{ display}}
       <ion-button v-on:click='show()' :class="{active:display=='bnt2'}">View items</ion-button>{{ display}}
<div v-if="display" id="bnt1"> <BrandIntroduction/> </div>
<div v-else id="bnt2"> <BrandItem/></div>
    </div>
</ion-card>
<!-- Content card end -->
</ion-card>
</template>
<script>
import { IonIcon,} from '@ionic/vue';
import BrandIntroduction from '@/components/BrandIntroduction.vue'
import BrandItem from '@/components/BrandItem.vue';
export default {
name:'BrandDetails',
components: {  IonIcon,BrandIntroduction ,BrandItem},

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
      display:false,
      visible:false
    }
},
methods:{
show(){
  this.display=!this.display;
}
}
}
</script>
<style>
.subcontent{
font-family:Pretendard;
color: #C4C4C4;
font-size: 10px;
}
.maincontent{
  font-size: 14px;
  color: #25282B;
}
.miancard{
 width: 0px;
  height: 150px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
}
.main{
  width: fit-content;
display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  padding: center;
}
.mainslide{
 background-color: #C4C4C4;
}
img{
  width: 100%;
  height: 300px;
  object-fit: fill;
}

</style>