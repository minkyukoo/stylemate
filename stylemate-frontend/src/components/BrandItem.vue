<template>
  <!-- <ion-page>
    <ion-content :fullscreen="true"> -->
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
                    {{ product.name }} <ion-icon class="float-right" :icon="heart"
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
    <!-- </ion-content>
  </ion-page> -->
</template>
<script>
import { IonCol, IonGrid, IonRow} from "@ionic/vue";
import axios from "axios";
export default {
  name: "BrandItems",
  components: { IonCol, IonGrid, IonRow },
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    axios
      .get("https://elsa.beta.mediance.co.kr/stylemates/brands/9")
      .then((response) => {
        this.products = response.data.product;
      });
  },
};
</script>
<style scoped>

</style>
