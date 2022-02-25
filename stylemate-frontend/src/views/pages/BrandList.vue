<template>
  <div class="inner-container listmain">
    <ion-searchbar
      @keyup="sreachWord($event.target.value)"
      v-model="searchValue"
      placeholder="브랜드 이름으로 검색해 보세요."
      @ionClear="sreachWordClear"
    ></ion-searchbar>
    <div class="history-keywords" v-if="history">
      <ul>
        <li v-for="(item, i) in searchKeywords" :key="i">
          <span @click="sreachWithHistory(item.searchKeyword)">{{
            item.searchKeyword
          }}</span>
        </li>
      </ul>
    </div>

    <div v-if="notFound" class="content-not-found">
      <p>We couldn't find any suitable brands. How about the brands below?</p>
    </div>

    <div class="main pad-b-40">
      <div
        class="maincard"
        v-for="info in brands"
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
          {{ info.description }}
        </ion-card-content>
        <ion-card-content class="subcontent">{{
          setTags(info.tag)
        }}</ion-card-content>
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
import BrandService from "@/services/BrandService";
import UserInfoService from "@/services/UserInfoService";
export default {
  name: "BrandList",
  components: { IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar },
  setup() {
    return { heart };
  },
  data() {
    return {
      brands: [],
      error: [],
      hashcontent: [],
      searchValue: "",
      searchKeywords: [],
      history: false,
      notFound: false,
      show_error: false,
      user: null,
    };
  },
  created() {
    this.brandService = new BrandService();
    this.userInfoService = new UserInfoService();
  },
  mounted() {
    // this.setUser();
    this.getBrandList();
  },

  methods: {
    setUser() {
      this.userInfoService.getUserInfo().then((res) => {
        console.log('errorstate', res.response.status);
        if(res.response.status == 401) {
          this.$router.push({ name: 'LoginPage' });
        } else if(res.response.status == 200) {
          this.user = res.data;
          this.setHistoryKeywords(res.data.uid);
        }
      });
    },

    getBrandList() {
      this.brandService.getBrandList().then((data) => {
        this.brands = data;
      });
    },

    setHistoryKeywords(uid) {
      this.brandService.brandSearchHistory(uid).then((res) => {
        this.history = res.length > 0 ? true : false;
        this.searchKeywords = res;
      });
    },

    sreachWord(keyword) {
      if (keyword.length > 0) {
        this.brandService.searchBrand(keyword).then((res) => {
          if (res.length > 0) {
            this.brands = res;
            this.notFound = false;
          } else {
            this.getBrandList();
            this.notFound = true;
          }
        });
      } else {
        this.notFound = false;
        this.getBrandList();
      }
    },

    sreachWithHistory(history) {
      this.searchValue = history;
      this.sreachWord(history);
    },

    sreachWordClear() {
      this.searchValue = null;
      this.getBrandList();
    },

    setTags(items) {
      var filterItems = [];
      items.forEach((value) => {
        if (value.status === "active") {
          filterItems.push("#" + value.tag);
        }
      });
      return filterItems.join(" ").toString();
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
  height: 24px;
  float: right;
}
.text-box > img{
  width: 24px;
}
.right-section {
  text-align: right;
  margin-top: 32px;
}
.content-not-found {
  text-align: center;
  font-family: Pretendard;
  /* position: absolute; */
  width: 50%;
  margin: auto;
  height: auto;
  padding-top: 10px;
  /* left: 67px; */
  /* top: 160px; */
}
</style>
