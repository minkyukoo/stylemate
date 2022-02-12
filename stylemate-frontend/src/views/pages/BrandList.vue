<template>
  <div class="inner-container listmain">
    <ion-searchbar @ionChange="sreachWord()" v-model="searchValue" placeholder="브랜드 이름으로 검색해 보세요."></ion-searchbar>
    <div v-if="this.keywords == !this.brand_info" class="content-not-found">
      <p>We couldn't find any suitable brands. How about the brands below?</p>
      <div class="main"></div>
      <div
        class="maincard"
        v-for="info in brand_info"
        :key="info.id"
        @click="$router.push({ name: 'BrandDetails', params: { id: info.id } })"
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
        <ion-card-content class="maincontent">
          {{
            info.description
          }}
        </ion-card-content>
        <ion-card-content
          class="subcontent"
          v-for="tagdata in info.tag"
          :key="tagdata"
        ># {{ tagdata.tag }}</ion-card-content>
      </div>
    </div>

    <div class="right-section" v-else>
      <button>
        <img src="@/assets/icons/list-view.svg" />
      </button>
    </div>

    <div class="main">
      <div
        class="maincard"
        v-for="info in keywords"
        :key="info.id"
        @click="$router.push({ name: 'BrandDetails',  params: { id: info.id } })"
      >
        <figure class="img-wrap">
          <img :src="info.imageThumbnailPath" class="imgsec" alt="ion" />
        </figure>
        <ion-card-header>
          <ion-card-title>
            {{ info.korName }}
            <div class="text-box">
              <img src="@/assets/icons/heart-outline.svg"  />
            </div>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content class="maincontent">
          {{
            info.description
          }}
        </ion-card-content>
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
  IonSearchbar,
} from "@ionic/vue";
import { heart } from "ionicons/icons";
// import axios from "axios";
import BrandService from "@/services/BrandService";
export default {
  name: "BrandList",
  components: { IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar },
  setup() {
    return { heart };
  },
  data() {
    return {
      brand_info: [],
      error: [],
      hashcontent: [],
      searchValue: "",
      keywords: [],
      show_error: false,
    };
  },
  created() {
    this.brandService = new BrandService();
  },
  mounted() {
    this.brandService.getBrandList().then((data) => {
      console.log(data);
      this.brand_info = data;
      this.keywords = data;
    });
  },
  // computed: {
  //   sreachWord() {

  //     return this.brand_info.filter(p => {
  //       console.log("p",p);
  //       // return true if the product should be visible

  //       // in this example we just check if the search string
  //       // is a substring of the product name (case insensitive)
  //       return p.korName.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
  //     });
  //   }
  // },
  methods: {
    sreachWord() {
      if (this.searchValue) {
        this.keywords = this.brand_info.filter((word) => {
          //  console.log("wordss", word.korName);
          return word.korName
            .toUpperCase()
            .includes(this.searchValue.toUpperCase());
        });
        console.log("keywordresults", this.keywords);
      } else {
        this.keywords = this.brand_info;
        this.show_error = !this.show_error;
      }
    },
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
  /* display: flex;
  text-align: right; */
  height: 16px;
  float: right;
}
.right-section {
  text-align: right;
  margin-top: 32px;
}
.content-not-found {
  text-align: center;
  font-family: Pretendard;
  position: absolute;
  width: 227px;
  height: 40px;
  left: 67px;
  top: 160px;
}
</style>
