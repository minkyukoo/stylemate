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
       <!-- Product details start  -->
        <ion-grid>
          <ion-row>
            <ion-col sizeLg="4" sizeMd="4" sizeXs="6" v-for="product in products" :key="product">
              <ion-card class="maincard" v-for="data in column" :key="data + 1">
                <ion-item
                  ><img :src="product.imageThumbnailPath" class="imgsec" alt="ion"
                /></ion-item>
                <ion-card-header>
                  <ion-card-title>
                    {{ product.name }} <ion-icon :icon="heart"
                  /></ion-card-title>
                </ion-card-header>
                <ion-card-content class="maincontent">
                  {{ product.description }}
                </ion-card-content>
                <ion-card-content class="subcontent" v-for="tagdata in  product.tag" :key="tagdata">
                  {{ tagdata.tag }}
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
        <!--  Product details end  --> 
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { IonCol, IonGrid, IonRow, IonPage, IonContent } from "@ionic/vue";
import axios from "axios";
export default {
  name: "BrandItems",
  components: { IonCol, IonGrid, IonRow, IonPage, IonContent },
  data() {
    return {
      products: [],
      // column: [
      //   {
      //     src: "https://source.unsplash.com/random/800x400?i=1",
      //     title: "Hotel Panama Garden",
      //     content:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //     hashconent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ultrices.",
      //   },
      //   {
      //     src: "https://source.unsplash.com/random/800x400?i=1",
      //     title: "Panama Garden",
      //     maincontent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //     hashconent:
      //       "ipsum dolor, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //   },
      //   {
      //     src: "https://source.unsplash.com/random/800x400?i=1",
      //     title: "Hotel Panama",
      //     maincontent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //     hashconent:
      //       "ipsum dolor sit amet, consectetur. Phasellus iaculis mollis ligula sed ultrices.",
      //   },
      //   {
      //     src: "https://source.unsplash.com/random/800x400?i=1",
      //     title: "Hotel Panama Garden value",
      //     maincontent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //     hashconent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. iaculis mollis ligula sed ultrices.",
      //   },
      //   {
      //     src: "https://source.unsplash.com/random/800x400?i=1",
      //     title: "Hotel Panama Garden amet",
      //     maincontent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //     hashconent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula sed ultrices.",
      //   },
      // ],
      // column1: [
      //   {
      //     src: "https://source.unsplash.com/random/800x400?i=1",
      //     title: "Hotel Panama Garden",
      //     content:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //     hashconent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ultrices.",
      //   },
      //   {
      //     src: "https://source.unsplash.com/random/800x400?i=1",
      //     title: "Panama Garden",
      //     maincontent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //     hashconent:
      //       "ipsum dolor, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //   },
      //   {
      //     src: "https://source.unsplash.com/random/800x400?i=1",
      //     title: "Hotel Panama",
      //     maincontent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //     hashconent:
      //       "ipsum dolor sit amet, consectetur. Phasellus iaculis mollis ligula sed ultrices.",
      //   },
      //   {
      //     src: "https://source.unsplash.com/random/800x400?i=1",
      //     title: "Hotel Panama Garden value",
      //     maincontent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //     hashconent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. iaculis mollis ligula sed ultrices.",
      //   },
      //   {
      //     src: "https://source.unsplash.com/random/800x400?i=1",
      //     title: "Hotel Panama Garden amet",
      //     maincontent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
      //     hashconent:
      //       "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula sed ultrices.",
      //   },
      // ],
    };
  },
  mounted() {
    axios
      .get("https://elsa.beta.mediance.co.kr/stylemates/brands/9")
      .then((response) => {
        this.products = response.data.product;
        console.log("aaaoooo", response);
      });
  },
};
</script>
<style></style>
