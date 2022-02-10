<template>
  <div class="inner-container">
    <div class="main">
      <div
        class="maincard"
        v-for="info in brand_info"
        :key="info"
        @click="$router.push({ name: 'BrandDetails' })"
      >
        <figure class="img-wrap">
          <img :src="info.imageThumbnailPath" class="imgsec" alt="ion" />
        </figure>
        <ion-card-header>
          <ion-card-title>
            {{ info.korName }}
            <div class="text-box">
 <img src="@/assets/icons/heart-outline.svg" />
            </div>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content class="maincontent">{{ info.description }}</ion-card-content>
        <ion-card-content
          class="subcontent"
          v-for="tagdata in info.tag"
          :key="tagdata"
        ># {{ tagdata.tag }}</ion-card-content>
      </div>
    </div>
  </div>
</template>
<script>
import {
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";
import { heart } from "ionicons/icons";
// import axios from "axios";
import BrandService from '@/services/BrandService';
export default {
  name: "BrandList",
  components: { IonCardContent, IonCardHeader, IonCardTitle },
  setup() {
    return { heart };
  },
  data() {
    return {
      brand_info: [],
      error: [],
      hashcontent: []
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
  width: 100%;
  min-height: 150px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  cursor: pointer;
}
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.img-wrap {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 6px;
  overflow: hidden;
  background-color: #c4c4c4;
}
.imgsec {
  width: 100%;
  object-fit: cover;
}
img:hover {
  background-color: rgb(36, 29, 29);
  border-color: rgb(63, 13, 110);
  border: #25282b;
}

 .text-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
