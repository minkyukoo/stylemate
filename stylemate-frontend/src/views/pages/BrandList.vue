<template>
  <div class="inner-container listmain">
    <!-- <div class="search-group">
      <input
        type="text"
        placeholder="브랜드 이름으로 검색해 보세요."
        class="search-field"
        v-model="searchValue"
        @ionClear="sreachWordClear"
        @ionBlur="$emit('searchInputBlur', $event)"
        @ionFocus="$emit('searchInputFocus', $event)"
        @keyup.enter="sreachWord($event.target.value)"
      />
      <button class="search-icon">
        <img src="@/assets/icons/search.png" alt="search" />
      </button>
    </div> -->
    <ion-searchbar
      @keyup="sreachWord($event.target.value)"
      v-model="searchValue"
      placeholder="브랜드 이름으로 검색해 보세요"
      @ionClear="sreachWordClear"
      @ionBlur="$emit('searchInputBlur', $event)"
      @ionFocus="$emit('searchInputFocus', $event)"
    ></ion-searchbar> -->
    <!-- <div class="search-wrapper">
        <input type="text" name="search" placeholder="브랜드 이름으로 검색해 보세요" />
    </div> -->
    <div class="history-keywords" v-if="history">
      <swiper
        class="main-menu"
        :slides-per-view="'auto'"
        :space-between="4"
        @swiper="onSwiper"
        @reachEnd="onSlideChange"
      >
        <swiper-slide v-for="(item, i) in searchKeywords" :key="i">
          <a @click="sreachWithHistory(item.searchKeyword)">{{ item.searchKeyword }}</a>
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
      <div class="maincard" v-for="(info, i) in brands" :key="info.id">
        <figure
          class="img-wrap"
          @click="
            $router.push({ name: 'BrandDetails', params: { id: info.id } })
          "
        >
          <img :src="info.imageThumbnailPath" class="imgsec" alt="ion" />
        </figure>

        <div class="text-wrap">
          <ion-card-header>
            <ion-card-title>
              <h3
                @click="
                  $router.push({
                    name: 'BrandDetails',
                    params: { id: info.id },
                  })
                "
              >{{ info.korName }}</h3>
              <div class="text-box" @click="likeBrand(info.id, i)">
                <img v-if="info.isInfluenceLike" src="@/assets/icons/heart-filled.svg" />
                <img v-else src="@/assets/icons/heart-outline.svg" />
              </div>
            </ion-card-title>
          </ion-card-header>
          <ion-card-content
            @click="
              $router.push({ name: 'BrandDetails', params: { id: info.id } })
            "
            class="maincontent"
          >{{ info.description }}</ion-card-content>
          <ion-card-content
            @click="
              $router.push({ name: 'BrandDetails', params: { id: info.id } })
            "
            class="subcontent"
          >{{ setTags(info.tag) }}</ion-card-content>
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
  // IonSearchbar,
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
  components: {
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    // IonSearchbar,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return { heart };
  },
  props: {
    windowScroll: { type: Number, default: 0 },
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
      defaultPage: 2,
    };
  },

  created() {
    this.brandService = new BrandService();
    this.userInfoService = new UserInfoService();
    this.tokenService = new TokenService();
  },
  mounted() {
    // window.keyboardHide = this.keyboardHide;
    // window.parent.postMessage(this.keyboardHide(), "*");
    this.setUser();
    this.getBrandList();
  },

  methods: {
    setUser() {
      this.userInfoService.getUserInfo().then((res) => {
        // console.log('errorstate', res.status);
        if (res.status == 401) {
          this.$router.push({ name: "LoginPage" });
        } else if (res.status == 200) {
          this.user = res.data;
          this.setHistoryKeywords(res.data.uid);
        }
      });
    },
    onSwiper() {
      // console.log("onSwiper");
    },
    onSlideChange() {
      // console.log("onSlideChange");
      var page = this.defaultPage++;
      // console.log(page);
      this.userInfoService.getUserInfo().then((res) => {
        this.brandService.brandSearchHistory(res.data.uid, page).then((res) => {
          if (res.data.length > 0) {
            this.searchKeywords.push(...res.data);
          }
          // console.log(res.data);
        });
      });
    },

    getBrandList() {
      // console.log("call from likeBrand");
      this.brandService.getBrandList().then((data) => {
        this.brands = data;
        // console.log('this.brands list', data);
      });
    },

    setHistoryKeywords(uid) {
      this.brandService.brandSearchHistory(uid, 1).then((res) => {
        this.history = res.data.length > 0 ? true : false;
        this.searchKeywords = res.data;
        // console.log(res);
      });
    },

    keyboardHide(e) {
      window.parent.postMessage( e, '*');
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
      this.keyboardHide('keyboardHide');
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
    async likeBrand(brandId, i) {
      // condition 1 login check
      let isLogedIn = await this.isLogedIn();
      if (!isLogedIn) {
        Toast.fire({ title: "회원 전용 서비스입니다. 로그인하세요." });
      } else {
        // eslint-disable-next-line no-unused-vars
        let uid;
        let selfItem = this.brands[i];
        await this.isUserid().then((res) => {
          uid = res;
          // console.log(brandId);
          if (selfItem.isInfluenceLike === false) {
            this.brandService
              .influencelikes(uid, "brand", brandId)
              // eslint-disable-next-line no-unused-vars
              .then((res) => {
                // console.log(res)
                selfItem.isInfluenceLike = true;
              });
          } else {
            this.brandService
              .influencedislikes(uid, "brand", brandId)
              // eslint-disable-next-line no-unused-vars
              .then((res) => {
                // console.log(res);
                selfItem.isInfluenceLike = false;
              });
          }
        });
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
.search-group {
  position: relative;
}
.search-field {
  height: 40px;
  padding: 10px 13px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  width: 100%;
  margin-top: 20px;
}
.search-icon {
  position: absolute;
  top: 46%;
  right: 10px;
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
.history-keywords {
  margin: 16px 0 20px;
}
.history-keywords .swiper-slide {
  width: auto;
}
.history-keywords .swiper-slide a {
  background: #f7f7f7;
  border-radius: 100px;
  font-size: 12px;
  line-height: 16px;
  color: #25282b;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.history-keywords .swiper-slide.swiper-slide-active a {
  border: 1px solid #090909;
  background: #090909;
  font-weight: bold;
  color: white;
  transition: all 0.3s;
}

.search-wrapper{
  width: 100%;
  margin: 20px 0 0 0;
}

.search-wrapper input{
  background: #fff url('@/assets/icons/search.png') no-repeat 97% center;
  padding: 10px 13px;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
  width: 100%;
}

</style>
