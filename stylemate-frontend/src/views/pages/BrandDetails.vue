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
      <div class="product-main-banner">
        <img src="@/assets/images/product-banner.jpg" />
      </div>
      <div class="item-wrapper">
        <div class="itemMain">
          <div class="itemHeader">
            <h2>BEMUSE MANSION</h2>
            <img src="@/assets/icons/Vector.svg" alt="img" style="height: 20px" />
          </div>
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis
            mollis ligula sed ultrices.
          </p>
        </div>
        <div class="brandTab">
          <ion-button v-on:click="show()" :class="{ active: display == 'bnt1' }">Brand Introduction</ion-button>
          <ion-button v-on:click="showItems()" :class="{ active: visible == 'bnt1'}">View items</ion-button>
            <div>
              <div v-if="display" id="bnt1"><BrandIntroduction /></div>
              <div v-if="visible" id="bnt2"><BrandItem /></div>
            </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
} from "@ionic/vue";
import BrandIntroduction from "@/components/BrandIntroduction.vue";
import BrandItem from "@/components/BrandItem.vue";
import axios from "axios";
export default {
  name: "BrandDetails",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    BrandIntroduction,
    BrandItem,
  },

  data() {
    return {
      // slides: [
      //   "https://source.unsplash.com/random/800x400?i=1",
      //   "https://source.unsplash.com/random/800x400?i=2",
      //   "https://source.unsplash.com/random/800x400?i=3",
      //   "https://source.unsplash.com/random/800x400?i=4",
      //   "https://source.unsplash.com/random/800x400?i=5",
      //   "https://source.unsplash.com/random/800x400?i=6",
      //   "https://source.unsplash.com/random/800x400?i=1",
      //   "https://source.unsplash.com/random/800x400?i=2",
      //   "https://source.unsplash.com/random/800x400?i=3",
      //   "https://source.unsplash.com/random/800x400?i=4",
      //   "https://source.unsplash.com/random/800x400?i=5",
      //   "https://source.unsplash.com/random/800x400?i=6",
      // ],

      display: false,
      visible: false,
    };
  },
  mounted() {
    axios
      .get("https://elsa.beta.mediance.co.kr/stylemates/brands")
      .then((response) => {
        this.brand_info = response.data.data;
      })
      .catch((e) => {
        this.error.push(e);
      });
  },
  methods: {
    show() {
      this.display = true;
    },
    showItems() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style>
.parallax {
  /* The image used */
  background-image: url("https://source.unsplash.com/random/800x400?i=1");
  min-height: 500px;
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
.scrolldiv {
  height: 1000px;
  max-width: 500px;
  min-width: 500px;
  background-color: rgb(238, 230, 230);
  font-size: 36px;
}
.miancard {
  display: flex;
  flex-direction: column;
  margin: 0 !important;

  width: 500px;
  background-color: rgb(238, 230, 230);
  font-size: 36px;
}
img {
  width: 100%;
  height: 300px;
  object-fit: fill;
}

.product-main-banner {
  position: fixed;
  top: 55px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.product-main-banner img {
  width: 100%;
}
.item-wrapper {
  padding: 40px 20px 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  top: 280px;
  background: #ffffff;
  min-height: 600px;
}
.item-wrapper .product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
}
.item-wrapper .product-list .product-list-item {
  width: 50%;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 4px;
  margin-bottom: 24px;
}
.item-wrapper .product-list .product-list-item figure {
  margin-bottom: 12px;
}
.item-wrapper .product-list .product-list-item figure img {
  width: 100%;
}
.item-wrapper .product-list .product-list-item h3 {
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
}
.item-wrapper .product-list .product-list-item p {
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-wrapper .product-list .product-list-item span {
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
}
</style>
