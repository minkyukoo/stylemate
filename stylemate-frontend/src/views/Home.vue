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
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="multiSlideWrap">
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- <ion-slides pager="true" :options="multiSlideOpts">
          <ion-slide>
            <div class="multiSlideWrap">
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="multiSlideWrap">
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="multiSlideWrap">
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="multiSlideWrap">
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
              <div class="slideItem">
                <div class="socialBLock">
                  <img src="@/assets/icons/instagram-small.svg" class="insta" />
                  <img src="@/assets/icons/wish.svg" class="wishList" />
                </div>
                <img src="@/assets/images/main-item1.jpg" />
                <h4>Areuban</h4>
                <p>리플렉 오버핏 조거 스웨...</p>
                <span>#street fashion #sufa #hoodie</span>
              </div>
            </div>
          </ion-slide>
        </ion-slides>-->

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
        <button class="outlineBtnFull mt-6">패밀리 사이트 바로가기</button>
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
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
// import { IonSlides, IonSlide } from "@ionic/vue";
import BannerService from "@/services/BannerService";
import ItemService from "@/services/ItemService";

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
      modules: [Pagination],
    };
  },
  data() {
    return {
      bannerList: null,
      newItems: null,
      newProItems: null,
    };
  },
  created() {
    this.bannerService = new BannerService();
    this.itemService = new ItemService();
  },
  mounted() {
    this.bannerService.getBannerList("home").then((res) => {
      console.log("bres", res);
      this.bannerList = res;
    });

    // this.itemService.getProductLsit().then((resp) => {
    //   console.log('newItems', resp);
    //   this.newItems = resp;
    //   const slicedArray = resp.slice(0, 12); //total items 12
    //   console.log('slicedArray', slicedArray);

    //   var perChunk = 4 // items per chunk
    //   var inputArray = slicedArray  //array to split
    //   var result = inputArray.reduce((resultArray, item, index) => {
    //     const chunkIndex = Math.floor(index / perChunk)
    //     if (!resultArray[chunkIndex]) {
    //       resultArray[chunkIndex] = [] // start a new chunk
    //     }
    //     resultArray[chunkIndex].push(item)
    //     return resultArray
    //   }, []);
    //   this.newProItems = result;
    //   console.log('newProItems', this.newProItems);
    // });
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
</style>

