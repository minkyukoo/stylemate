<template>
  <!-- <ion-page>
  <ion-content :fullscreen="true">-->
  <div>
    <!-- Product details start  -->
    <ion-grid>
      {{ brandItem }}
      <ion-row>
        <ion-col sizeLg="4" sizeMd="4" sizeXs="6" v-for="product in brandItem" :key="product">
          <ion-card class="maincard" v-for="data in column" :key="data + 1">
            <ion-item>
              <img :src="product.imageThumbnailPath" class="imgsec" alt="ion" />
            </ion-item>
            <ion-card-header>
              <ion-card-title>
                {{ product.name }}
                {{brandItem}}
                <ion-icon class="float-right" :icon="heart" />
              </ion-card-title>
            </ion-card-header>
            <ion-card-content class="maincontent">{{ product.description }}</ion-card-content>
            <ion-card-content
              class="subcontent"
              v-for="tagdata in  product.tag"
              :key="tagdata"
            >{{ tagdata.tag }}</ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
    <!--  Product details end  -->
  </div>
  <!-- </ion-content>
  </ion-page>-->
</template>
<script>
import { IonCol, IonGrid, IonRow } from "@ionic/vue";
export default {
  name: "BrandItems",
  components: { IonCol, IonGrid, IonRow },
  props: {
    brandItem: {
      type: Array,
    },
  },
  data() {
    return {
      products: null,
    };
  },
};
</script>
<style></style>
