<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="mainslide">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(slide, i) of bannerList" :key="i + 1">
            <div class="mainslide-banner-wrap">
              <img :src="slide.pcImagePath" alt />
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="overlapSlide">
        <button @click="getMyinfo">My Info</button>
        <div class="headerLine">
          <h4>NEW ITEM</h4>
        </div>

        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="multiSlideWrap">
              <div
                class="slideItem"
                v-for="(item, index) in newEvanItems"
                :key="index"
              >
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img :src="item.imageThumbnailPath" />
                <h4>{{ item.brand.engName }}</h4>
                <p>{{ item.name }}</p>
                <span>{{ setTags(item.tag) }}</span>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="multiSlideWrap">
              <div
                class="slideItem"
                v-for="(item, index) in newOddItems"
                :key="index"
              >
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img :src="item.imageThumbnailPath" />
                <h4>{{ item.brand.engName }}</h4>
                <p>{{ item.name }}</p>
                <span>{{ setTags(item.tag) }}</span>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="multiSlideWrap">
              <div
                class="slideItem"
                v-for="(item, index) in newStartItems"
                :key="index"
              >
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img :src="item.imageThumbnailPath" />
                <h4>{{ item.brand.engName }}</h4>
                <p>{{ item.name }}</p>
                <span>{{ setTags(item.tag) }}</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="brandSlider">
          <div class="headerLine">
            <h4>NEW BRAND</h4>
          </div>
          <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'1.3'"
            :coverflowEffect="{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }"
            :pagination="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              class="brandSliderimg"
              v-for="item in brandList"
              :key="item.id"
            >
              <div class="swiper-slide">
                <img :src="item.imageThumbnailPath" />
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="headerLine">
          <h4>LOOKBOOK</h4>
          <span>
            <img src="@/assets/icons/arrow-right.svg" />
          </span>
        </div>
        <div class="lookBookMain">
          <div class="bookLabel1 pattern1">
            <img src="@/assets/images/book1.png" />
          </div>
          <div class="bookLabel1 pattern2">
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
          </div>
        </div>

        <div class="lookBookMain">
          <div class="bookLabel2">
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
          </div>
        </div>

        <div class="lookBookMain">
          <div class="bookLabel1 pattern2">
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
            <div>
              <img src="@/assets/images/Rectanglec1.png" />
            </div>
          </div>
          <div class="bookLabel1 pattern1">
            <img src="@/assets/images/book1.png" />
          </div>
        </div>
        <div class="gotoFamily">
          <div class="gotofamilyList" :class="{ active: isActive }">
            <ul>
              <li>
                <a href="#"><img src="@/assets/images/logo-1.png" /></a>
              </li>
              <li>
                <a href="#"><img src="@/assets/images/logo-2.png" /></a>
              </li>
            </ul>
          </div>
          <button @click="myFilter">패밀리 사이트 바로가기</button>
        </div>
        <!-- <button class="outlineBtnFull mt-6">패밀리 사이트 바로가기</button> -->
        <button class="greyBtnFull">
          <span>중요</span> [알림] 서비스 점검 안내
        </button>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
// Import Swiper Vue.js components
import { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
// import { IonSlides, IonSlide } from "@ionic/vue";
import BannerService from "@/services/BannerService";
import BrandService from "@/services/BrandService";
import ItemService from "@/services/ItemService";
import UserInfoService from "@/services/UserInfoService";

export default {
  name: "Home",
  components: {
    TopNav,
    IonContent,
    IonPage,
    // IonSlides,
    // IonSlide,
    Swiper,
    SwiperSlide,
  },
  setup() {
    // const slideOpts = {
    //   initialSlide: 1,
    //   speed: 400,
    //   loop: true,
    //   autoplay:true
    // };
    // return { slideOpts }

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, EffectCoverflow, Pagination],
      // modules: [EffectCoverflow, Pagination],
    };
  },
  data() {
    return {
      bannerList: null,
      brandList: [],
      newStartItems: [],
      newOddItems: [],
      newEvanItems: [],
      newProItems: null,
      isActive: false,
    };
  },
  created() {
    this.bannerService = new BannerService();
    this.brandService = new BrandService();
    this.itemService = new ItemService();
    this.userInfoService = new UserInfoService();
  },

  mounted() {
    this.bannerService.getBannerList("home").then((res) => {
      this.bannerList = res;
    });
    this.getProductItemList();
    this.brandService.getBrandList().then((res) => {
      this.brandList = res;
      console.log(res);
    });
  },
  methods: {
    getProductItemList() {
      let perPage = 12;
      this.bannerService.getProductItemList(perPage).then((res) => {
        let startArray = [];
        let OddArray = [];
        let EvanArray = [];
        let newStartArray = 0;
        let newOddIndex = 0;
        let newEvanIndex = 0;
        res.forEach((value, i) => {
          if (i % 3 === 0) {
            startArray[newStartArray] = value;
            newStartArray++;
          } else if (i % 2 === 0) {
            OddArray[newOddIndex] = value;
            newOddIndex++;
          } else {
            EvanArray[newEvanIndex] = value;
            newEvanIndex++;
          }
        });
        this.newStartItems = startArray;
        this.newOddItems = OddArray;
        this.newEvanItems = EvanArray;
      });
    },

    getMyinfo() {
      this.userInfoService.getUserInfo().then((res) => {
        if (res.response) {
          if (res.response.status == 401) {
            this.$router.push("/login");
          }
        } else {
          console.log(res.data);
        }
      });
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
    myFilter: function () {
      this.isActive = !this.isActive;
      // some code to filter users
    },
  },
};
</script>

<style scoped>
.mainslide-banner-wrap {
  max-height: 380px;
  height: 380px;
  background: #c4c4c4;
  overflow: hidden;
}
.mainslide-banner-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.brandSlider {
  background: rgba(0, 0, 0, 0.5);
  padding: 60px 20px 110px;
  margin-left: -20px;
  margin-right: -20px;
}
.brandSlider .swiper {
  overflow: inherit;
}
/* .brandSlider .swiper .swiper-paginationl{
  bottom: -100px !important;
} */

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: -100px !important;
}
.brandSlider .headerLine {
  padding: 0 20px 20px;
}
.brandSlider .headerLine h4 {
  color: #f6f6f6;
}
.brandSlider .multiSlideWrap {
  display: inherit;
  justify-content: inherit;
}
.brandSlider .multiSlideWrap .slideItem {
  width: auto;
}
.brandHeader {
  background: #fff;
  /* border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px; */
  padding: 24px 16px;
}

.brandHeader .headerLine {
  padding: 0;
}
.brandHeader .headerLine h4 {
  color: #25282b;
  font-size: 20px;
}

.brandSliderimg img {
  width: 100%;
}
.brandHeader p {
  font-size: 10px !important;
  color: #797979 !important;
}
.brandHeader span {
  font-size: 12px !important;
  color: #25282b !important;
}
.swiper-slide {
  border-radius: 10px;
  overflow: hidden;
}
.gotoFamily {
  position: relative;
  width: calc(100% - 40px);
  margin-top: 60px;
  margin: 60px 20px 0;
}
.gotoFamily button {
  padding: 21px 0;
  font-size: 14px;
  font-weight: 400;
  color: #797979;
  line-height: 150%;
  cursor: pointer;
  text-align: center;
  border: 1px solid #c4c4c4;
  background: none;
  display: block;
  border-radius: 5px;
  width: 100%;
}
.gotofamilyList {
  position: absolute;
  bottom: 100%;
  width: 100%;
  display: none;
}
.gotofamilyList.active {
  display: block;
}
.gotofamilyList ul {
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  padding: 0 20px;
}
.gotofamilyList ul li {
  border-top: 1px solid #f7f7f7;
}
.gotofamilyList ul li:first-child {
  border-top: none;
}
.gotofamilyList ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}
</style>

