<template>
  <ion-page>
    <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true" part="scrollbarHide"> -->
    <div class="main-wrap">
      <!-- top slider section -->
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
      <!-- New item sectinon -->
      <div class="overlapSlide">
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
            <div class="multiSlideWrap product-list">
              <div
                class="slideItem product-list-item"
                v-for="(item, index) in newEvanItems"
                :key="index"
              >
                <div class="top-float-div">
                  <div class="social-icon">
                    <img src="@/assets/icons/instagram.svg" />
                  </div>
                  <div class="favorite">
                    <img src="@/assets/icons/heart-outline.svg" />
                  </div>
                </div>
                <figure @click="$router.push({ name: 'ItemDetails' })">
                  <img :src="item.imageThumbnailPath" />
                </figure>
                <div
                  class="details-wrap"
                  @click="$router.push({ name: 'ItemDetails' })"
                >
                  <h3>{{ item.brand.engName }}</h3>
                  <p>{{ item.name }}</p>
                  <div class="hashWrap">
                    <span>{{ setTags(item.tag) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="multiSlideWrap product-list">
              <div
                class="slideItem product-list-item"
                v-for="(item, index) in newOddItems"
                :key="index"
              >
                <div class="top-float-div">
                  <div class="social-icon">
                    <img src="@/assets/icons/instagram.svg" />
                  </div>
                  <div class="favorite">
                    <img src="@/assets/icons/heart-outline.svg" />
                  </div>
                </div>
                <figure @click="$router.push({ name: 'ItemDetails' })">
                  <img :src="item.imageThumbnailPath" />
                </figure>
                <div
                  class="details-wrap"
                  @click="$router.push({ name: 'ItemDetails' })"
                >
                  <h3>{{ item.brand.engName }}</h3>
                  <p>{{ item.name }}</p>
                  <div class="hashWrap">
                    <span>{{ setTags(item.tag) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="multiSlideWrap product-list">
              <div
                class="slideItem product-list-item"
                v-for="(item, index) in newStartItems"
                :key="index"
              >
                <div class="top-float-div">
                  <div class="social-icon">
                    <img src="@/assets/icons/instagram.svg" />
                  </div>
                  <div class="favorite">
                    <img src="@/assets/icons/heart-outline.svg" />
                  </div>
                </div>
                <figure @click="$router.push({ name: 'ItemDetails' })">
                  <img :src="item.imageThumbnailPath" />
                </figure>
                <div
                  class="details-wrap"
                  @click="$router.push({ name: 'ItemDetails' })"
                >
                  <h3>{{ item.brand.engName }}</h3>
                  <p>{{ item.name }}</p>
                  <div class="hashWrap">
                    <span>{{ setTags(item.tag) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- new Brand section -->
        <div class="brandSlider swiper-container">
          <div class="headerLine">
            <h4>NEW BRAND</h4>
          </div>
          <swiper
            :modules="modules"
            :centeredSlides="true"
            :centeredSlidesBounds="true"
            :slidesPerGroup="1"
            :watchSlidesProgress="true"
            :slidesPerView="1.5"
            :space-between="12"
            :pagination="{ clickable: true, dynamicBullets: true, }"
            @slideChange="onBrandSlideChange"
            class="newBrandSwiper"
          >
            <swiper-slide
              class="brandSliderimg"
              v-for="item in brandList"
              :key="item.id"
              @click="$router.push({ name: 'BrandDetails', params: { id: item.id } })"
            >
              <div class="carousel__item">
                <div class="nb-img-wrap">
                  <img :src="item.imageThumbnailPath" />
                </div>
                <div class="brandDetails">
                  <h3 v-if="item.engName">
                    {{ item.engName }}
                    <b>
                      <img src="@/assets/icons/arrow-right.svg" />
                    </b>
                  </h3>
                  <h3 v-else>
                    {{ item.korName }}
                    <b>
                      <img src="@/assets/icons/arrow-right.svg" />
                    </b>
                  </h3>
                  <p>{{ setTags(item.tag) }}</p>
                  <span>{{ truncate(item.description, 56) }}</span>
                </div>
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
            <img
              v-for="book in lookBooks.lineOne.big"
              :key="book.id"
              :src="book.brand.imageThumbnailPath"
            />
          </div>
          <div class="bookLabel1 pattern2">
            <div v-for="book in lookBooks.lineOne.normal" :key="book.id">
              <img :src="book.brand.imageThumbnailPath" />
            </div>
          </div>
        </div>

        <div class="lookBookMain">
          <div class="bookLabel2 pattern3">
            <div v-for="book in lookBooks.lineTwo.normal" :key="book.id">
              <img :src="book.brand.imageThumbnailPath" />
            </div>
          </div>
        </div>

        <div class="lookBookMain">
          <div class="bookLabel1 pattern2">
            <div v-for="book in lookBooks.lineThree.normal" :key="book.id">
              <img :src="book.brand.imageThumbnailPath" />
            </div>
          </div>
          <div class="bookLabel1 pattern1">
            <img
              v-for="book in lookBooks.lineThree.big"
              :key="book.id"
              :src="book.brand.imageThumbnailPath"
            />
          </div>
        </div>

        <div class="gotoFamily">
          <div class="gotofamilyList" :class="{ active: isActive }">
            <ul>
              <li>
                <a href="https://app.mediance.co.kr/">
                  <img src="@/assets/images/logo-1.png" />
                </a>
              </li>
              <li>
                <a href="http://influencer.mediance.co.kr/">
                  <img src="@/assets/images/logo-2.png" />
                </a>
              </li>
            </ul>
          </div>
          <button @click="myFilter">패밀리 사이트 바로가기</button>
        </div>

        <!-- <button class="outlineBtnFull mt-6">패밀리 사이트 바로가기</button> -->
        <button class="greyBtnFull" @click="getNotice">
          <span>중요</span> [알림] 서비스 점검 안내
        </button>
      </div>
    </div>
    <!-- </ion-content> -->
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
import { IonPage } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import BannerService from "@/services/BannerService";
import BrandService from "@/services/BrandService";
import ItemService from "@/services/ItemService";
import UserInfoService from "@/services/UserInfoService";

export default {
  name: "Home",
  components: {
    TopNav,
    IonPage,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const onBrandSlideChange = (swiper) => {
      console.log("brand slide change", swiper.slides);
      let slides = swiper.slides;
      slides.forEach((slide, index) => {
        if(index === swiper.activeIndex) {
          console.log("active index", slide);
          let src = slide.querySelector(".nb-img-wrap > img").getAttreibute("src");
          console.log('src', src);
        }
      });
    };
    return {
      onSwiper,
      onSlideChange,
      onBrandSlideChange,
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
      lookBooks: {
        lineOne: { big: [], normal: [] },
        lineTwo: { normal: [] },
        lineThree: { big: [], normal: [] },
      },
      newProItems: null,
      isActive: false,
      notificationLength: 0,
      // jdata: { "URL": "https://www.youtube.com", "id": "ABC", "product_URL": "http://stylemate.dvconsulting.org/contents", "product_id": "1", "type": "product" },
    };
  },
  created() {
    this.bannerService = new BannerService();
    this.brandService = new BrandService();
    this.itemService = new ItemService();
    this.userInfoService = new UserInfoService();
    // setTimeout(() => {
    //   this.pushNotification('http://stylemate.dvconsulting.org/product-details');
    // }, 5000);
  },

  mounted() {
    this.bannerService.getBannerList("home").then((res) => {
      this.bannerList = res;
    });
    this.getProductItemList();
    this.getLookBook();
    this.brandService.getBrandList().then((res) => {
      this.brandList = res;
    });

    window.callJsFunction = this.callJsFunction;
    window.pushNotification = this.pushNotification;
  },
  methods: {
    truncate(input, length) {
      if (input.length > length) {
        return input.substring(0, length) + '...';
      }
      return input;
    },

    getNotice() {
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("token") !== undefined &&
        localStorage.getItem("token") !== ""
      ) {
        this.$router.push({ name: "Notice" });
      } else this.$router.push({ name: "LoginPage" });
    },
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

    getLookBook() {
      this.brandService.lookBook().then((res) => {
        let i = { ob: 0, on: 0, tn: 0, thb: 0, thn: 0 };
        res.forEach((value, key) => {
          switch (true) {
            case key < 3:
              if (key === 0) {
                this.lookBooks.lineOne.big[i.ob++] = value;
              } else {
                this.lookBooks.lineOne.normal[i.on++] = value;
              }
              break;
            case key < 6:
              this.lookBooks.lineTwo.normal[i.tn++] = value;
              break;
            default:
              if (key === res.length - 1) {
                this.lookBooks.lineThree.big[i.thb++] = value;
              } else {
                this.lookBooks.lineThree.normal[i.thn++] = value;
              }
              break;
          }
        });
        // console.log(lookBooks);
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

    // for pushnotification
    pushNotification(res) {
      // const obj = JSON.parse(JSON.stringify(res));
      alert(res);
      console.log("res", res);
      if (res) {
        this.$router.push(res);
        // this.$router.push({name: 'products.index', params: { id: 1 }});
      }
    },

    // onMessage(res) {
    //   console.log("Data : " + res),
    //     alert(res)
    // },
    // sendMessage(res) {
    //   console.log(res);
    //   window.parent.postMessage({
    //     data: res
    //   }, "*");
    // },
    callJsFunction(res) {
      alert(res);
    },
  },
};
</script>

<style scoped>
.top-float-div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  padding: 7px;
}
.top-float-div .favorite {
  margin-right: 12px;
  cursor: pointer;
}
.product-list .product-list-item figure {
  margin-bottom: 12px;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  height: 156px;
}
.product-list .product-list-item figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-list .product-list-item h3 {
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
}
.product-list .product-list-item p {
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.product-list .product-list-item span {
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
}
.overlapSlide {
  background: rgb(222, 222, 222);
  background: linear-gradient(
    180deg,
    rgba(222, 222, 222, 1) 0%,
    rgba(255, 255, 255, 1) 2%
  );
}
.inner-scroll {
  margin-right: -20px !important;
}
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

/* .brandSliderimg {
  border-radius: 6px;
  overflow: hidden;
} */
.brandSliderimg img {
  width: 100%;
}
.nb-img-wrap {
  width: 100%;
  height: 260px;
  overflow: hidden;
}
.nb-img-wrap img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
}
.brandHeader p {
  font-size: 10px !important;
  color: #797979 !important;
}
.brandHeader span {
  font-size: 12px !important;
  color: #25282b !important;
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

.brandDetails {
  background: #fff;
  padding: 22px 16px;
  min-height: 150px;
}
.brandDetails h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 5px;
  color: #25282b;
  text-transform: uppercase;
}
.brandDetails p {
  font-size: 12px;
  font-weight: 400;
  color: #797979;
  margin-bottom: 10px;
}
.brandDetails span {
  font-size: 14px;
  font-weight: 400;
  color: #25282b;
}

.newBrandSwiper .swiper-slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
  border-radius: 6px;
  overflow: hidden;
}
.newBrandSwiper .swiper-slide-active > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.newBrandSwiper .swiper-slide-next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.newBrandSwiper .swiper-slide-prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.newBrandSwiper .swiper-slide-active > .carousel__item {
  transform: scale(1);
}
.swiper-horizontal>.swiper-pagination-bullets, 
.swiper-pagination-bullets.swiper-pagination-horizontal, 
.swiper-pagination-custom, .swiper-pagination-fraction {
  bottom: -100px !important;
}
</style>
