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
          <ion-card-content class="maincontent">{{ info.description }}</ion-card-content>
          <!-- <ion-card-content
            class="subcontent" v-if="info.tag"
          > {{ data.hashconent }}</ion-card-content>-->
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
      brand_info: null,
      datas: [
        {
          id: 12,
          createdAt: "2022-02-03T18:30:18.000+09:00",
          updatedAt: "2022-02-03T18:33:14.000+09:00",
          deletedAt: null,
          status: "active",
          korName: "테스트",
          engName: null,
          isDisplay: true,
          description: "<p>123</p>",
          imageThumbnailPath:
            "https://alloo.s3.ap-northeast-2.amazonaws.com/brand/c/12/1643880610289_20220203063010.jpeg",
          imageMainPath:
            "https://alloo.s3.ap-northeast-2.amazonaws.com/brand/c/12/1643880616414_20220203063016.jpg",
          tag: [],
          isInfluenceLike: false,
        },

        {
          id: 13,
          createdAt: "2022-02-03T18:30:18.000+09:00",
          updatedAt: "2022-02-03T18:33:14.000+09:00",
          deletedAt: null,
          status: "active",
          korName: "테스트",
          engName: null,
          isDisplay: true,
          description: "<p>123</p>",
          imageThumbnailPath:
            "https://alloo.s3.ap-northeast-2.amazonaws.com/brand/c/12/1643880610289_20220203063010.jpeg",
          imageMainPath:
            "https://alloo.s3.ap-northeast-2.amazonaws.com/brand/c/12/1643880616414_20220203063016.jpg",
          tag: [],
          isInfluenceLike: false,
        },
        {
          src: "https://source.unsplash.com/random/800x400?i=1",
          title: "Hotel Panama",
          maincontent:
            "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          hashconent:
            "ipsum dolor sit amet, consectetur. Phasellus iaculis mollis ligula sed ultrices.",
        },
        {
          src: "https://source.unsplash.com/random/800x400?i=1",
          title: "Hotel Panama Garden value",
          maincontent:
            "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          hashconent:
            "ipsum dolor sit amet, consectetur adipiscing elit. iaculis mollis ligula sed ultrices.",
        },
        {
          src: "https://source.unsplash.com/random/800x400?i=1",
          title: "Hotel Panama Garden amet",
          maincontent:
            "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.",
          hashconent:
            "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ligula sed ultrices.",
        },
      ],
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
