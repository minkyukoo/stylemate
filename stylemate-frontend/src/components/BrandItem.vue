<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Brand Items</ion-title>
      </ion-toolbar>
    </ion-header> -->

    <ion-content :fullscreen="true">
      <div>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-card class="maincard" v-for="data in column" :key="data+1">
               <ion-item><img :src="data.src" class="imgsec" alt="ion" /></ion-item>
              <ion-card-header>
                <ion-card-title
                  >  {{ data.title }} <ion-icon :icon="heart"
                /></ion-card-title>
              </ion-card-header>
              <ion-card-content class="maincontent">
                {{ data.content }}
              </ion-card-content>
              <ion-card-content class="subcontent">
                {{ data.hashconent }}
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card class="maincard" v-for="data in column1" :key="data+1">
              <img
                :src="data.src"
                class="imgsec"
                alt="ion"
              />
              <ion-card-header>
                <ion-card-title
                  > {{ data.title }} <ion-icon :icon="heart"
                /></ion-card-title>
              </ion-card-header>
              <ion-card-content class="maincontent">
                 {{ data.content }}
              </ion-card-content>
              <ion-card-content class="subcontent">
               {{ data.hashconent }}
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { IonCol, IonGrid, IonRow, IonPage, IonContent } from "@ionic/vue";

export default {
  name:"BrandItems",
  components: { IonCol, IonGrid, IonRow, IonPage, IonContent },
    data() {
    return {
     column: [
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama Garden",
          "content": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "hashconent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Panama Garden",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "hashconent": "ipsum dolor, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "hashconent": "ipsum dolor sit amet, consectetur. Phasellus iaculis mollis ligula sed ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama Garden value",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "hashconent": "ipsum dolor sit amet, consectetur adipiscing elit. iaculis mollis ligula sed ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama Garden amet",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "hashconent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula sed ultrices.",
        }
      ],
      column1: [
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama Garden",
          "content": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "hashconent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Panama Garden",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "hashconent": "ipsum dolor, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "hashconent": "ipsum dolor sit amet, consectetur. Phasellus iaculis mollis ligula sed ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama Garden value",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "hashconent": "ipsum dolor sit amet, consectetur adipiscing elit. iaculis mollis ligula sed ultrices.",
        },
        {
          "src": 'https://source.unsplash.com/random/800x400?i=1',
          "title": "Hotel Panama Garden amet",
          "maincontent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          "hashconent": "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula sed ultrices.",
        }
      ]
    

  
    }

  }
};
</script>
<style></style>
