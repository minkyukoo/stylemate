<template>

    <!-- header -->
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>ContentPage</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
       <ion-grid>
         <ion-row class="row1">
           <h1 class="title">BEST CONTENTS</h1><br/>
           <ion-col>
                <h1>col1</h1>
             <div v-for="image in img" :key="image">
               <img :src="image.src" alt="">
             </div>       
           </ion-col>
           <ion-col>
             <h1>col2</h1>
           <div v-for="image2 in img" :key="image2">
               <img :src="image2.src" alt="">
             </div>  
           </ion-col>
         </ion-row>


         <ion-row class="row2">
           <h1 class="title">NEW</h1><br/>
           <ion-col>
             <h2>col1</h2>
              <div v-for="image3 in img" :key="image3">
               <img :src="image3.src" alt="">
             </div>  
           </ion-col>
           <ion-col>
             <h1>col2</h1>
              <div v-for="image4 in img" :key="image4">
               <img :src="image4.src" alt="">
             </div>  
           </ion-col>
         </ion-row>
       </ion-grid>
    </ion-content>
    <!-- End page content -->
 
</template>
<script>
import {  IonContent,IonCol, IonGrid, IonRow } from "@ionic/vue";
//import ExploreContainer from "@/components/ExploreContainer.vue";
//import TopNav from "@/components/TopNav.vue";
export default {
  name: 'ContentPage',
  components: {  IonContent,  IonCol, IonGrid, IonRow },
  data(){
    return{
      img:[
        {"src": 'https://source.unsplash.com/random/800x400?i=1'},
        {"src": 'https://source.unsplash.com/random/800x400?i=1'},
        {"src": 'https://source.unsplash.com/random/800x400?i=1'},
        {"src": 'https://source.unsplash.com/random/800x400?i=1'},
        {"src": 'https://source.unsplash.com/random/800x400?i=1'},
        {"src": 'https://source.unsplash.com/random/800x400?i=1'},
        {"src": 'https://source.unsplash.com/random/800x400?i=1'},
       {"src": 'https://source.unsplash.com/random/800x400?i=1'},
      ],
      img_new:[
         {"src": 'https://source.unsplash.com/random/800x400?i=1'},
         {"src": 'https://source.unsplash.com/random/800x400?i=1'},
         {"src": 'https://source.unsplash.com/random/800x400?i=1'},
         {"src": 'https://source.unsplash.com/random/800x400?i=1'},
         {"src": 'https://source.unsplash.com/random/800x400?i=1'},
         {"src": 'https://source.unsplash.com/random/800x400?i=1'},
      ]
    }
  }
};
</script>
<style>
.row1{
  height: 200px;
  width: 100%;
}
.row2{
  height: 200px;
  width: 100%;
}
.title{
  position: absolute;
  font-family: Europa-Bold;
  font-weight: bold;
  display: flex;
  font-size: 24px;
line-height: 24px;
}
</style>