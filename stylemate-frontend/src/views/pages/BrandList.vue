<template>
  <div class="inner-container listmain">
    <ion-searchbar
      @keyup="sreachWord($event.target.value)"
      v-model="searchValue"
      placeholder="브랜드 이름으로 검색해 보세요."
      @ionClear="sreachWordClear"
    ></ion-searchbar>
    <div class="history-keywords" v-if="history">
      <!-- <ul>
        <li v-for="(item, i) in searchKeywords" :key="i">
          <span @click="sreachWithHistory(item.searchKeyword)">
            {{
              item.searchKeyword
            }}
          </span>
        </li>
      </ul> -->
      <swiper
      class="main-menu"
      :slides-per-view="'auto'"
      :space-between="4"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(item, i) in searchKeywords" :key="i">
        <a
          @click="sreachWithHistory(item.searchKeyword)"
          >{{item.searchKeyword}}</a
        >
      </swiper-slide>
    </swiper>
    </div>

    <div v-if="notFound" class="content-not-found">
      <p class="notfound-text">
        해당하는 브랜드를 찾지 못했어요.
        <br />아래 브랜드는 어떠세요?
      </p>
    </div>

    <div class="main pad-b-40">
      <div class="maincard" v-for="info in brands" :key="info.id">
        <figure
          class="img-wrap"
          @click="$router.push({ name: 'BrandDetails', params: { id: info.id } })"
        >
          <img :src="info.imageThumbnailPath" class="imgsec" alt="ion" />
        </figure>

        <div class="text-wrap">
          <ion-card-header>
            <ion-card-title>
              <h3
                @click="$router.push({ name: 'BrandDetails', params: { id: info.id } })"
              >{{ info.korName }}</h3>
              <div class="text-box" @click="likeBrand(info.id)">
                <!-- <img v-if="info.isInfluenceLike" src="@/assets/icons/heart-outline.svg" /> -->
                <img v-if="info.isInfluenceLike" src="@/assets/icons/heart-filled.svg" />
                <img v-else src="@/assets/icons/heart-outline.svg" />
              </div>
            </ion-card-title>
          </ion-card-header>
          <ion-card-content
            @click="$router.push({ name: 'BrandDetails', params: { id: info.id } })"
            class="maincontent"
          >{{ info.description }}</ion-card-content>
          <ion-card-content
            @click="$router.push({ name: 'BrandDetails', params: { id: info.id } })"
            class="subcontent"
          >
            {{
              setTags(info.tag)
            }}
          </ion-card-content>
        </div>
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
import Toast from "@/alert/alert";
import BrandService from "@/services/BrandService";
import UserInfoService from "@/services/UserInfoService";
import TokenService from "@/services/TokenService";
import { Swiper, SwiperSlide } from "swiper/vue";
// import { inject, onMounted } from "vue";
import "swiper/css";
import "swiper/css/scrollbar";

export default {
  name: "BrandList",
  components: { IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar, Swiper, SwiperSlide, },
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
    this.tokenService = new TokenService();
  },
  mounted() {
    this.setUser();
    this.getBrandList();
  },

  methods: {
    setUser() {
      this.userInfoService.getUserInfo().then((res) => {
        // console.log('errorstate', res.status);
        if (res.status == 401) {
          this.$router.push({ name: 'LoginPage' });
        } else if (res.status == 200) {
          this.user = res.data;
          this.setHistoryKeywords(res.data.uid);
        }
      });
    },

    getBrandList() {
      console.log('call from likeBrand');
      this.brandService.getBrandList().then((data) => {
        this.brands = data;
        // console.log('this.brands list', data);
      });
    },

    setHistoryKeywords(uid) {
      this.brandService.brandSearchHistory(uid).then((res) => {
        this.history = res.data.length > 0 ? true : false;
        this.searchKeywords = res.data;
        // console.log(this.searchKeywords);
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

    // isLogedIn
    async isLogedIn() {
      return await this.tokenService.isAuth();
    },
    //isUserid
    async isUserid() {
      let isLogedIn = await this.tokenService.isAuth();
      if (isLogedIn) {
        return await this.userInfoService.getUserInfo().then((res) => {
          return res.data.uid;
        });
      }
    },
    async likeBrand(brandId) {
      // condition 1 login check
      let isLogedIn = await this.isLogedIn();
      if (!isLogedIn) {
        Toast.fire({ title: "회원 전용 서비스입니다. 로그인하세요." });
      } else {
        let uid;
        await this.isUserid().then((res) => {
          uid = res;
          console.log('brand uid', uid);
          this.brandService.influencelikes(uid, 'brand', brandId).then((res) => {
            this.getBrandList();
            if (res.response.data.error) {
              Toast.fire({ title: res.response.data.error.message });
            }
          });
        });
      }
    }
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
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.maincard {
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
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
  /* background-color: #c4c4c4; */
  cursor: pointer;
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
.text-wrap {
  cursor: pointer;
}
ion-card-title {
  position: relative;
}
ion-card-title h3 {
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #25282b;
}
.text-box {
  /* display: flex;
  text-align: right; */
  height: 24px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
}
.text-box > img {
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
.notfound-text {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #c4c4c4;
  padding: 30px 0 20px 0;
}
.history-keywords{
  margin: 16px 0 20px;
}
.history-keywords .swiper-slide{
  width: auto;
}
.history-keywords .swiper-slide a{
  background: #F7F7F7;
  border-radius: 100px;
  font-size: 12px;
  line-height: 16px;
  color: #25282B;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.history-keywords .swiper-slide a.active{
  border: 1px solid #090909;
  background: #090909;
  font-weight: bold;
  color: white;
  transition: all 0.3s;
}
</style>
