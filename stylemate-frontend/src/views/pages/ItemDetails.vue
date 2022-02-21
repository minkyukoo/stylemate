<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="상세보기"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="mainslide">
        <!-- <ion-slides pager="true" :options="slideOpts">
          <ion-slide v-for="(item, index) in productDetails.productImageFile" :key="index">
            <figure>
              <img src="@/assets/images/product-details-banner.jpg" />
              <img :src="item.productImagePath" />
              <div class="top-social-icon">
                <a href="#">
                  <img src="@/assets/icons/instagram.svg" />
                </a>
              </div>
            </figure>
          </ion-slide>
          <ion-slide>
            <figure>
              <img src="@/assets/images/product-details-banner.jpg" />
              <div class="top-social-icon">
                <a href="#">
                  <img src="@/assets/icons/instagram.svg" />
                </a>
              </div>
            </figure>
          </ion-slide>
          <ion-slide>
            <figure>
              <img src="@/assets/images/product-details-banner.jpg" />
              <div class="top-social-icon">
                <a href="#">
                  <img src="@/assets/icons/instagram.svg" />
                </a>
              </div>
            </figure>
          </ion-slide>
        </ion-slides> -->
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(slide, i) of productDetails.productImageFile" :key="i + 1">
            <div class="mainslide-banner-wrap">
              <img :src="slide.productImagePath" alt />
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <ion-infinite-scroll threshold="50px" id="infinite-scroll">
        <ion-infinite-scroll-content loading-spinner="bubbles">
          <div class="item-wrapper">
            <div class="top-section">
              <div class="left-section">
                <h3>{{ productDetails.name }}</h3>
                <span>
                  <img src="@/assets/icons/arrow-left.svg" />
                </span>
              </div>
              <div class="right-section">
                <button @click="showModal">
                  <img src="@/assets/icons/share.svg" />
                </button>
              </div>
            </div>
            <div class="product-description">
              <h2>{{ productDetails.description }}</h2>

              <div class="hashwrap">
                <!-- <span v-for="hash in hashtag" :key="hash">{{ hash.name }}</span> -->
                <span v-for="(hash, index) in productDetails.tag" :key="index">
                  {{
                    '#' + hash.tag
                  }}
                </span>
                <!-- <span>hi</span> -->
              </div>

              <p>
                <span>
                  <img src="@/assets/icons/calendar.svg" />
                </span>
                2021.11.11 ~ 2021.12.25
              </p>
            </div>

            <CustomModal v-show="isModalVisible" @close="closeModal">
              <template v-slot:header>
                <h2>회원님은 미승인 회원입니다.</h2>
              </template>

              <template v-slot:body>
                <div class="modal-content">
                  <!-- <ul class="shareList">
                    <li>
                      <a href="#">
                        <img src="@/assets/icons/icon-fb.svg" />
                        <span>페이스북</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="@/assets/icons/icon-kakaotalk.svg" />
                        <span>카카오톡</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="@/assets/icons/icon-url.svg" />
                        <span>URL</span>
                      </a>
                    </li>
                  </ul>-->
                  <p>
                    스타일 메이트는 승인된 회원만
                    <br />이용할 수 있는 서비스 입니다.
                  </p>
                </div>
              </template>

              <template v-slot:footer></template>
            </CustomModal>

            <TabProductDetails />
          </div>
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
      <div class="subscribe-wrap">
        <figure>
          <img src="@/assets/icons/heart-filled.svg" />
        </figure>
        <button @click="hideSponserButton" class="black-btn">협찬 신청</button>
        <!-- use 'white-btn' class for white outline button & 'grey-btn' class for grey button -->
      </div>

      <DrawerBottom class="bottomDrawer" :class="{ active: isActive }" />
      <div class="overlay" :class="{ active: isActive }"></div>
    </ion-content>

    <!-- End page content -->
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/vue";
// Import Swiper Vue.js components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { IonSlides, IonSlide } from "@ionic/vue";
import TabProductDetails from "@/components/Tab.vue";
import CustomModal from "@/components/Modal.vue";
import TopNav from "@/components/TopNav.vue";
import DrawerBottom from "@/components/DrawerBottom.vue";
import ItemService from "@/services/ItemService";

export default {
  name: "BrandDetails",
  components: {
    IonPage,
    // IonSlides,
    // IonSlide,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    TabProductDetails,
    CustomModal,
    TopNav,
    DrawerBottom,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      hashtag: [
        { name: "#스트릿패션" },
        { name: "#스우파" },
        { name: "#후디" },
        { name: "#스트릿패션" },
        { name: "#스우파" },
        { name: "#후디" },
        { name: "#스트릿패션" },
        { name: "#스우파" },
        { name: "#후디" },
      ],
      isModalVisible: false,
      isActive: false,
      productDetails: '',
    };
  },

  setup() {
    return {
      modules: [Pagination],
    };
  },

  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    hideSponserButton() {
      this.isActive = !this.isActive;
    }
  },
  created() {
    this.itemService = new ItemService();

    var proId = this.$route.params.id;
    this.itemService.getProductDetails(proId).then((res) => {
      // catch error
      if (res.response) {
        if (res.response.status == 404) {
          alert(res.response.data.error.message);
          this.$router.push('/item');
        }
      }
      // success
      else {
        console.log('producrt res', res);
        this.productDetails = res;
      }
    });
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(9, 9, 9, 0.75);
  z-index: 1;
  display: none;
}
.bottomDrawer {
  display: none;
}
.bottomDrawer.active,
.overlay.active {
  display: block;
}
.mainslide figure {
  position: relative;
  width: 100%;
}
.mainslide figure .top-social-icon {
  position: absolute;
  top: 13px;
  left: 13px;
}
.item-wrapper {
  padding: 40px 20px 60px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  z-index: 1;
  top: 490px;
  /* background-image: linear-gradient(
    148.66deg,
    rgba(241, 241, 241, 0.5) 18.92%,
    rgba(255, 255, 255, 0.1) 80.41%
  ); */
  background: #ffffff;
  transition: all 0.5s ease-in-out;
  /* backdrop-filter: blur(30px); */
}
.top-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left-section {
  display: flex;
  align-items: center;
}
.left-section h3 {
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #090909;
}
.left-section > span {
  margin-right: 4px;
}
.product-description {
  margin-top: 19px;
  margin-bottom: 42px;
  text-align: left;
}
.product-description h2 {
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #595959;
}
.hashwrap {
  margin: 12px 0 15px;
}
.hashwrap span {
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
}
.product-description {
  margin-top: 12px;
}
.product-description p {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 14px;
  color: #797979;
}
.product-description p span {
  margin-right: 7px;
}
.shareList {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0 35px;
}
.shareList li {
  margin-left: 20px;
}
.shareList li:first-child {
  margin-left: 0;
}
.shareList li a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.shareList li a img {
  width: 52px;
  height: 52px;
}
.shareList li a span {
  font-size: 10px;
  line-height: 12px;
  color: #595959;
  margin-top: 4px;
}
.subscribe-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 21px;
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  padding: 8px;
  border: 1px solid #f7f7f7;
  background: #ffffff;
}
.subscribe-wrap figure {
  margin-right: 10px;
}
.subscribe-wrap .black-btn {
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #090909;
  border-radius: 6px;
  padding: 24px;
  width: calc(100% - 30px);
}
.subscribe-wrap .white-btn {
  font-size: 14px;
  line-height: 18px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #090909;
  border-radius: 6px;
  padding: 24px;
  width: calc(100% - 30px);
  border: 1px solid #595959;
}
.subscribe-wrap .grey-btn {
  font-size: 14px;
  line-height: 18px;
  background: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #797979;
  border-radius: 6px;
  padding: 24px;
  width: calc(100% - 30px);
  border: 1px solid #c4c4c4;
}
</style>
