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
      <h1 class="title">BEST CONTENTS</h1>
      <br />
      <!-- Content row start -->
      <div>
        <ion-row>
          <ion-col
            sizeLg="4"
            sizeMd="4"
            sizeXs="6"
            v-for="image in img"
            :key="image"
          >
            <img :src="image.src" v-bind:alt="img" @click="openModal" />
          </ion-col>
        </ion-row>
      </div>
      <br />
      <!-- Content row Ends -->

      <div>
        <h1 class="title">NEW</h1>
        <br />
         <!-- New content start -->
        <ion-row>
          <ion-col
            sizeLg="4"
            sizeMd="4"
            sizeXs="6"
            v-for="image in img_new"
            :key="image"
          >
            <img :src="image.srci" v-bind:alt="img" @click="openModal" />
          </ion-col>
        </ion-row>
      </div>
      <!-- New content ends -->
    </ion-grid>
  </ion-content>
  <!-- End page content -->
</template>
<script>
import {
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
  modalController,
} from "@ionic/vue";
//import ExploreContainer from "@/components/ExploreContainer.vue";
//import TopNav from "@/components/TopNav.vue";
import ContentDetails from "@/components/ContentDetails.vue";
export default {
  name: "ContentPage",
  components: { IonContent, IonCol, IonGrid, IonRow },
  data() {
    return {
      img: [
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
        { src: "https://source.unsplash.com/random/800x400?i=1" },
      ],
      img_new: [
        {
          src: "@/assets/images/Rectanglen1.png",
          srci: "https://source.unsplash.com/random/800x400?i=1",
        },
        {
          src: "@/assets/images/Rectanglen2.png",
          srci: "https://source.unsplash.com/random/800x400?i=2",
        },
        {
          src: "@/assets/images/Rectanglen3.png",
          srci: "https://source.unsplash.com/random/800x400?i=1",
        },
        {
          src: "@/assets/images/Rectanglen4.png",
          srci: "https://source.unsplash.com/random/800x400?i=1",
        },
        {
          src: "@/assets/images/Rectanglen5.png",
          srci: "https://source.unsplash.com/random/800x400?i=1",
        },
        {
          src: "@/assets/images/Rectanglen6.png",
          srci: "https://source.unsplash.com/random/800x400?i=1",
        },
      ],
    };
  },
  methods: {
    async openModal() {
      const modal = await modalController.create({
        component: ContentDetails,
      });
      return modal.present();
    },
  },
};
</script>
<style>
.row1 {
  height: 200px;
  width: 100%;
}
.row2 {
  height: 200px;
  width: 100%;
}
.title {
  position: absolute;
  font-family: Europa-Bold;
  font-weight: bold;
  display: flex;
  font-size: 24px;
  line-height: 24px;
}
.newimage {
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
/* .img-wrapper{
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
} */
.io {
  width: 100%;
}
.imagesize {
  height: 100%;
  width: 100%;
}
</style>
