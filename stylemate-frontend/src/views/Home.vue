<template>
  <div class="home-page">
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
          :space-between="0"
          :pagination="{ clickable: true }"
          :autoplay="autoplay"
          :loop="dynamicLoop"
          :initialSlide="0"
          :centeredSlides="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(slide, i) of bannerList" :key="i + 1">
            <router-link
              to
              class="mainslide-banner-wrap"
              @click="bannerRedirect(slide.mobileLink)"
            >
              <img :src="slide.mobileImagePath" alt="Banner" />
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
      <!-- New item sectinon -->
      <div class="overlapSlide">
        <div class="fixed-container new-item-wrap">
          <div class="newItemWrap">
            <div class="headerLine">
              <h4>NEW ITEM</h4>
            </div>
            <swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="0"
              :loop="loop"
              :pagination="{ clickable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide>
                <div class="multiSlideWrap product-list">
                  <div
                    class="slideItem product-list-item cursor-pointer"
                    v-for="(item, index) in newStartItems"
                    :key="index"
                  >
                    <div class="top-float-div">
                      <div class="social-icon">
                        <img
                          v-if="isChannelIg(item.campaign)"
                          src="@/assets/icons/instagram.svg"
                        />
                      </div>
                      <div
                        class="favorite"
                        @click="likeProduct(item.id, index, 's')"
                      >
                        <!-- <img src="@/assets/icons/heart-outline.svg" /> -->
                        <img
                          v-if="item.influenceLike?.length > 0"
                          src="@/assets/icons/heart-filled.svg"
                        />
                        <img v-else src="@/assets/icons/heart-outline.svg" />
                      </div>
                    </div>
                    <figure
                      @click="
                        $router.push({
                          name: 'ItemDetails',
                          params: { id: item.id },
                        })
                      "
                    >
                      <img :src="item.imageThumbnailPath" />
                    </figure>
                    <div
                      class="details-wrap"
                      @click="
                        $router.push({
                          name: 'ItemDetails',
                          params: { id: item.id },
                        })
                      "
                    >
                      <h3>{{ item.brand.korName }}</h3>
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
                    class="slideItem product-list-item cursor-pointer"
                    v-for="(item, index) in newOddItems"
                    :key="index"
                  >
                    <div class="top-float-div">
                      <div class="social-icon">
                        <img
                          v-if="isChannelIg(item.campaign)"
                          src="@/assets/icons/instagram.svg"
                        />
                      </div>
                      <div
                        class="favorite"
                        @click="likeProduct(item.id, index, 'o')"
                      >
                        <!-- <img src="@/assets/icons/heart-outline.svg" /> -->
                        <img
                          v-if="item.influenceLike?.length > 0"
                          src="@/assets/icons/heart-filled.svg"
                        />
                        <img v-else src="@/assets/icons/heart-outline.svg" />
                      </div>
                    </div>
                    <figure
                      @click="
                        $router.push({
                          name: 'ItemDetails',
                          params: { id: item.id },
                        })
                      "
                    >
                      <img :src="item.imageThumbnailPath" />
                    </figure>
                    <div
                      class="details-wrap"
                      @click="
                        $router.push({
                          name: 'ItemDetails',
                          params: { id: item.id },
                        })
                      "
                    >
                      <h3>{{ item.brand.korName }}</h3>
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
                    class="slideItem product-list-item cursor-pointer"
                    v-for="(item, index) in newEvanItems"
                    :key="index"
                  >
                    <div class="top-float-div">
                      <div class="social-icon">
                        <img
                          v-if="isChannelIg(item.campaign)"
                          src="@/assets/icons/instagram.svg"
                        />
                      </div>
                      <div
                        class="favorite"
                        @click="likeProduct(item.id, index, 'n')"
                      >
                        <!-- <img src="@/assets/icons/heart-outline.svg" /> -->
                        <img
                          v-if="item.influenceLike?.length > 0"
                          src="@/assets/icons/heart-filled.svg"
                        />
                        <img v-else src="@/assets/icons/heart-outline.svg" />
                      </div>
                    </div>
                    <figure
                      @click="
                        $router.push({
                          name: 'ItemDetails',
                          params: { id: item.id },
                        })
                      "
                    >
                      <img :src="item.imageThumbnailPath" />
                    </figure>
                    <div
                      class="details-wrap"
                      @click="
                        $router.push({
                          name: 'ItemDetails',
                          params: { id: item.id },
                        })
                      "
                    >
                      <h3>{{ item.brand.korName }}</h3>
                      <p>{{ item.name }}</p>
                      <div class="hashWrap">
                        <span>{{ setTags(item.tag) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- new Brand section -->
        <div
          class="brandSlider swiper-container newBrandSec"
          :style="{ 'background-image': 'url(' + image + ')' }"
        >
          <div class="headerLine">
            <h4>NEW BRAND</h4>
          </div>
          <swiper
            :modules="modules"
            :centeredSlides="true"
            :loop="true"
            :centerInsufficientSlides="true"
            :initialSlide="6"
            :watchSlidesProgress="true"
            :loopFillGroupWithBlank="true"
            :autoplay="autoplay"
            :slidesPerView="1.5"
            :space-between="12"
            :init="true"
            :pagination="{
              clickable: true,
            }"
            @slideChange="onBrandSlideChange"
            @swiper="onBrandSwiper"
            class="newBrandSwiper"
          >
            <!-- @afterInit="mountRun" -->
            <!-- :autoplay="autoplay" -->

            <swiper-slide
              class="brandSliderimg"
              v-for="(item, index) in brandList"
              ref="items"
              v-slot="{ isActive }"
              :key="item.id || index"
              @click="
                $router.push({ name: 'BrandDetails', params: { id: item.id } })
              "
            >
              <div class="carousel__item">
                <div class="nb-img-wrap">
                  <img
                    :src="item.imageThumbnailPath"
                    ref="itemImg"
                    :id="[isActive ? 'activeImg' : 'inactive']"
                  />
                </div>
                <div class="brandDetails">
                  <h3 v-if="item.korName">
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
                  <span>{{ truncate(item.description, 36) }}</span>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- lookbook -->
        <div class="lookBokkWrap">
          <div class="fixed-container lookbook">
            <div class="headerLine" @click="$router.push({ name: 'Contents' })">
              <h4>LOOKBOOK</h4>
              <span>
                <img src="@/assets/icons/arrow-right.svg" />
              </span>
            </div>

            <div class="lookBookMain">
              <div class="bookLabel1 pattern1">
                <img
                  class="cursor-pointer"
                  v-for="book in lookBooks.lineOne.big"
                  :key="book.id"
                  :src="
                    !book.post
                      ? ''
                      : book.post.instagramPost.thumbnailUrl
                      ? book.post.instagramPost.thumbnailUrl
                      : book.post.instagramPost.thumbnailOriginalUrl
                  "
                  @click="
                    store.methods.setContentsDetailsModal(book.post.id, true)
                  "
                />
              </div>
              <div class="bookLabel1 pattern2">
                <div v-for="book in lookBooks.lineOne.normal" :key="book.id">
                  <img
                    class="cursor-pointer"
                    :src="
                      !book.post
                        ? ''
                        : book.post.instagramPost.thumbnailUrl
                        ? book.post.instagramPost.thumbnailUrl
                        : book.post.instagramPost.thumbnailOriginalUrl
                    "
                    @click="
                      store.methods.setContentsDetailsModal(book.post.id, true)
                    "
                  />
                </div>
              </div>
            </div>

            <div class="lookBookMain">
              <div class="bookLabel2 pattern3">
                <div v-for="book in lookBooks.lineTwo.normal" :key="book.id">
                  <img
                    class="cursor-pointer"
                    :src="
                      !book.post
                        ? ''
                        : book.post.instagramPost.thumbnailUrl
                        ? book.post.instagramPost.thumbnailUrl
                        : book.post.instagramPost.thumbnailOriginalUrl
                    "
                    @click="
                      store.methods.setContentsDetailsModal(book.post.id, true)
                    "
                  />
                </div>
              </div>
            </div>

            <div
              v-if="lookBooks.lineThree.normal.length !== 0"
              class="lookBookMain"
            >
              <div class="bookLabel1 pattern2">
                <div v-for="book in lookBooks.lineThree.normal" :key="book.id">
                  <img
                    class="cursor-pointer"
                    :src="
                      !book.post
                        ? ''
                        : book.post.instagramPost.thumbnailUrl
                        ? book.post.instagramPost.thumbnailUrl
                        : book.post.instagramPost.thumbnailOriginalUrl
                    "
                    @click="
                      store.methods.setContentsDetailsModal(book.post.id, true)
                    "
                  />
                </div>
              </div>
              <div class="bookLabel1 pattern1">
                <img
                  class="cursor-pointer"
                  v-for="book in lookBooks.lineThree.big"
                  :key="book.id"
                  :src="
                    !book.post
                      ? ''
                      : book.post.instagramPost.thumbnailUrl
                      ? book.post.instagramPost.thumbnailUrl
                      : book.post.instagramPost.thumbnailOriginalUrl
                  "
                  @click="
                    store.methods.setContentsDetailsModal(book.post.id, true)
                  "
                />
              </div>
            </div>

            <div class="gotoFamily">
              <div class="gotofamilyList" :class="{ active: isActive }">
                <ul>
                  <li>
                    <a href="https://app.mediance.co.kr/" target="_blank">
                      <img src="@/assets/images/logo-2.png" />
                    </a>
                  </li>
                  <li>
                    <a href="http://influencer.mediance.co.kr/" target="_blank">
                      <img src="@/assets/images/logo-1.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <button @click="myFilter">패밀리 사이트 바로가기</button>
            </div>

            <!-- <button class="outlineBtnFull mt-6">패밀리 사이트 바로가기</button> -->
            <button
              class="greyBtnFull"
              @click="
                $router.push({ name: 'NoticeDetails', params: { id: id } })
              "
            >
              <span>중요</span>
              {{ notice }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- </ion-content> -->
    <!-- End page content -->
    <ContentDetails v-if="store.state.contentDetailsModal" />
  </div>
</template>

<script>
// Import Swiper Vue.js components
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import { IonPage } from "@ionic/vue";
import Toast from "@/alert/alert";
import TopNav from "@/components/TopNav.vue";
import BannerService from "@/services/BannerService";
import BrandService from "@/services/BrandService";
import ItemService from "@/services/ItemService";
import UserInfoService from "@/services/UserInfoService";
import ContentDetails from "@/components/ContentDetails.vue";
import TokenService from "@/services/TokenService";
// import ContentDetails from "@/components/ContentDetails.vue";
import { inject, ref } from "vue";
import FrontManage from "@/services/FrontManage";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
export default {
  name: "Home",
  components: {
    TopNav,
    // IonPage,
    Swiper,
    SwiperSlide,
    ContentDetails,
  },
  setup() {
    const store = inject("store");
    const linkedChannel = inject("linkedChannel");
    const img = ref("");
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    // onMounted(() => {

    // });

    // onBeforeUpdate(() => {
    //   img.value = "";
    // });

    // const onBrandSlideChange = (e) => {
    //   console.log("slider change", e);
    //   img.value = document.getElementById("activeImg").src;
    //   console.log(img.value);
    // };
    const onBrandSwiper = (event) => {
      console.log("brand swiper", event);
    };
    return {
      onSwiper,
      onSlideChange,
      // onBrandSlideChange,
      onBrandSwiper,
      img,
      modules: [Pagination, EffectCoverflow],
      // modules: [EffectCoverflow, Pagination],
      store,
      linkedChannel,
    };
  },
  data() {
    return {
      id: null,
      notice: null,
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
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      newProItems: null,
      isActive: false,
      activeId: null,
      notificationLength: 0,
      image: "",
      isMobile: false,
      dynamicLoop: false,
      // jdata: { "URL": "https://www.youtube.com", "id": "ABC", "product_URL": "http://stylemate.dvconsulting.org/contents", "product_id": "1", "type": "product" },
    };
  },
  created() {
    this.bannerService = new BannerService();
    this.frontManage = new FrontManage();
    this.brandService = new BrandService();
    this.itemService = new ItemService();
    this.userInfoService = new UserInfoService();
    this.tokenService = new TokenService();
    this.bannerService.getBannerList("home").then((res) => {
      this.dynamicLoop = res.length > 1 ? true : false;

      this.bannerList = res;
      if (this.bannerList.length > 0) {
        this.mountRun();
        // if (this.bannerList.length <= 1) {
        //   this.dynamicLoop = false;
        // }
        // else {
        //   this.dynamicLoop = true;
        // }
      }

      // console.log("bannerList", this.bannerList, this.dynamicLoop);
    });
    // setTimeout(() => {
    //   this.pushNotification('http://stylemate.dvconsulting.org/product-details');
    // }, 5000);
  },

  watch: {
    bannerList: function () {
      setTimeout(() => {
        this.image = document.getElementById("activeImg").src;
        console.log(this.image);
      }, 1000);
    },
  },

  async mounted() {
    // this.bannerService.getBannerList("home").then((res) => {
    //   this.bannerList = res;
    //   console.log("bannerList", this.bannerList);

    // });
    this.getProductItemList();
    this.isFromApp();
    
    this.getLookBook();
    // this.brandService.getBrandList(10, "latest").then((res) => {
    //   this.brandList = res;
    // });

    this.frontManage.newBrands(await this.tokenService.isAuth()).then((res) => {
      this.brandList = res.map((m) => m.brand);
      console.log("frontManage -------- BRAND", this.brandList);
    });

    this.getNoticeIsAuth();
    let isLogedIn = await this.tokenService.isAuth();
    if (isLogedIn) {
      window.parent.postMessage("loginCompleted", "*");
    }
    // let lengthArr = (this.brandList.length)/2;
    // let xyz = this.brandList[lengthArr];
    // console.log(xyz);
    // setTimeout(() => {
    //   if (document.getElementById("activeImg")) {
    //     console.log("something", document.getElementById("activeImg").src);
    //   }
    // }, 100);
  },
  methods: {
    // check if it's from APP

    isFromApp() {
      var queryString = window.location.search;
      console.log("queryString", queryString);
      const urlParams = new URLSearchParams(queryString);
      var mobile = urlParams.get("mobile");
      if (mobile) {
        this.isMobile = true;
        this.linkedChannel.state.isMobile = true;
        localStorage.setItem("isMobile", true);
      }

      setTimeout(() => {
        console.log(
          "this.linkedChannel.state.isMobile",
          this.linkedChannel.state.isMobile
        );
      }, 4000);
    },

    // ENdx check if it's from APP

    mountRun() {
      if (document.getElementById("activeImg")) {
        console.log("something", document.getElementById("activeImg").src);
      }
      console.log("mounted");
    },
    onBrandSlideChange(e) {
      // console.log("slider change", e);
      this.image = "";
      this.activeId = e.activeIndex;
      // console.log(this.activeId);
      setTimeout(() => {
        this.image = document.getElementById("activeImg").src;
        // console.log(this.image);
      }, 100);
      // if (document.getElementById("activeImg")) {
      //   this.image = document.getElementById("activeImg").src;
      // }
      // console.log(this.image);
    },

    truncate(input, length) {
      if (input.length > length) {
        return input.substring(0, length) + "...";
      }
      return input;
    },

    bannerRedirect(url) {
      // alert(url);
      window.location.href = url;
    },

    async getNoticeIsAuth() {
      let isLogedIn = await this.tokenService.isAuth();
      if (isLogedIn) {
        this.userInfoService.Notice().then((res) => {
          this.notice = res.data[0].title;
          this.id = res.data[0].id;
        });
      } else {
        this.notice = "[알림] 서비스 점검 안내";
      }
    },

    // async getNotice() {
    //   let isLogedIn = await this.tokenService.isAuth();
    //   if (isLogedIn) {
    //     this.$router.push({ name: "Notice" });
    //   } else this.$router.push({ name: "LoginPage" });
    // },
    
    async getProductItemList() {
      this.frontManage
        .newItems(await this.tokenService.isAuth())
        .then((res) => {
          console.log(
            "frontManage -------- ITEM",
            res.map((m) => m.product)
          );
          let items = res.map((m) => m.product);
          let startArray = [];
          let OddArray = [];
          let EvanArray = [];
          let newStartArray = 0;
          let newOddIndex = 0;
          let newEvanIndex = 0;
          items.forEach((value, i) => {
            if (i <= 3) {
              // if (i % 3 === 0) {
              startArray[newStartArray] = value;
              newStartArray++;
              // } else if (i % 2 === 0) {
            } else if (i <= 7) {
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

          console.log("this.newStartItems", startArray);
          console.log("this.newOddItems", OddArray);
          console.log("this.newEvanItems", EvanArray);
        });
    },

    getLookBook() {
      this.brandService.lookBook().then((res) => {
        console.log("lookbook", res);
        let lookbookData = res;
        let fltd = lookbookData.filter((value) => {
          console.log("v----", value.post);
        });
        console.log("fltd---", fltd);
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
    async likeProduct(productId, i, a) {
      // condition 1 login check
      let isLogedIn = await this.isLogedIn();
      if (!isLogedIn) {
        Toast.fire({ title: "회원 전용 서비스입니다. 로그인하세요." });
      } else {
        let uid;
        await this.isUserid().then((res) => {
          uid = res;

          if (a === "n") {
            // eslint-disable-next-line no-redeclare
            var selfItem = this.newEvanItems[i];
          } else if (a === "o") {
            // eslint-disable-next-line no-redeclare
            var selfItem = this.newOddItems[i];
          } else if (a === "s") {
            // eslint-disable-next-line no-redeclare
            var selfItem = this.newStartItems[i];
          }

          if (selfItem.influenceLike.length > 0) {
            selfItem.influenceLike.length = 0;
            this.itemService
              .influencedislikes(uid, "product", productId)
              // eslint-disable-next-line no-unused-vars
              .then((res) => {
                // console.log(res);
              });
          } else {
            selfItem.influenceLike.push(selfItem);
            this.itemService
              .influencelikes(uid, "product", productId)
              // eslint-disable-next-line no-unused-vars
              .then((res) => {});
          }
        });
      }
      // console.log("likeProduct");
    },


    // isChannelIg
    isChannelIg(pdata) {
      let isProductCamp = false;
      if (!pdata) return isProductCamp;
      pdata.forEach((item) => {
        if (
          item.processStatus === "progress" &&
          item.channelType === "instagram"
        ) {
          isProductCamp = true;
          return isProductCamp;
        }
      });
      return isProductCamp;
    },

    // // for pushnotification
    // pushNotification(res) {
    //   // const obj = JSON.parse(JSON.stringify(res));
    //   alert(res);
    //   console.log("res", res);
    //   if (res) {
    //     this.$router.push(res);
    //     // this.$router.push({name: 'products.index', params: { id: 1 }});
    //   }
    // },

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
    // callJsFunction(res) {
    //   // alert(res);
    // },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
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
  margin-right: 5px;
  cursor: pointer;
}
.top-float-div .favorite img {
  width: 20px;
  height: 20px;
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
.brandSlider .swiper .swiper-pagination-bullets {
  transform: scale(1);
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
.nb-img-wrap {
  width: 100%;
  height: 260px;
  overflow: hidden;
  cursor: pointer;
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
  width: 100%;
  margin-top: 60px;
  margin: 60px 0 0;
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
  bottom: 98%;
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
  padding: 22px 16px 24px 16px;
  min-height: 150px;
  cursor: pointer;
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
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: -100px !important;
}

.lookbook .headerLine,
.lookbook .lookBookMain {
  padding-left: 0;
  padding-right: 0;
}
.newBrandSec {
  padding-left: 0;
  padding-right: 0;
  margin: 0;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.newBrandSec::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(10px);
  z-index: 1;
}
.newBrandSec .headerLine {
  position: relative;
  z-index: 2;
  max-width: 320px;
  margin: 0 auto;
  padding-left: 0;
  padding-right: 0;
}
.newBrandSec .swiper {
  z-index: 2;
}
.greyBtnFull {
  padding: 12px 15px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.newItemWrap {
  margin-bottom: 34px;
}
.lookBokkWrap {
  background: #ffffff;
  padding-bottom: 40px;
}

.new-item-wrap .multiSlideWrap {
  padding: 0 calc(100% - 410px) 45px;
  margin: 0 -4px;
  justify-content: center;
}
.new-item-wrap .multiSlideWrap .slideItem {
  width: 164px;
  padding: 0 4px;
}
.new-item-wrap .headerLine {
  max-width: 320px;
  margin: 0 auto;
  /* padding-left: 8px; */
}
</style>
