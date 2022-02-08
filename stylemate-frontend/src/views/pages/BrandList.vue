<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="main">
        <ion-card
          class="maincard"
          v-for="info in brand_info"
          :key="info"
          @click="$router.push({ name: 'BrandDetails' })"
        >
          <ion-item>
            <img :src="info.imageThumbnailPath" class="imgsec" alt="ion" />
          </ion-item>
          <ion-card-header>
            <ion-card-title>
              {{ info.korName }}
              <ion-icon :icon="heart" />
              <!-- <img src="@/assets/icons/Vector.svg" alt="" slot="end"> -->
            </ion-card-title>
          </ion-card-header>
          <ion-card-content class="maincontent">
            {{ info.description }}</ion-card-content
          >
          <ion-card-content
            class="subcontent" v-for="tagdata in info.tag" :key="tagdata" 
          > # {{ tagdata.tag }}</ion-card-content>
        </ion-card>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>
<script>
import {
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
} from "@ionic/vue";
import { heart } from "ionicons/icons";
// import axios from "axios";
import BrandService from '@/services/BrandService';
export default {
  name: "BrandList",
  components: { IonCardContent, IonCardHeader, IonCardTitle, IonItem },
  setup() {
    return { heart };
  },
  data() {
    return {
      brand_info:[],
      error:[],
      hashcontent:[]
    };
  },
  created() {
    this.brandService = new BrandService();
  },
  mounted() {
    this.brandService.getBrandList().then((data) => {
      console.log(data)
      this.brand_info = data;
    });
  },
};
</script>
<style scoped>
.subcontent {
  font-family: Pretendard;
  color: #c4c4c4;
  font-size: 10px;
}
.maincontent {
  font-size: 14px;
  color: #25282b;
}
.miancard {
  width: 0px;
  height: 150px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  cursor: pointer;
}
.main {
  width: fit-content;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  padding: center;
}
.imgsec {
  width: 100%;
}
img:hover {
  background-color: rgb(36, 29, 29);
  border-color: rgb(63, 13, 110);
  border: #25282b;
}
</style>
