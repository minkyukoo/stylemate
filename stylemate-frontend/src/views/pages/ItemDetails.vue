<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="상세보기"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <div class="scrollDiv">
      <div class="mainslide">
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
              <figure>
                <img :src="slide.productImagePath" alt />
                <div class="top-social-icon">
                  <img
                    v-if="isChannelIg(productDetails.campaign)"
                    src="@/assets/icons/instagram.svg"
                  />
                </div>
              </figure>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- <ion-infinite-scroll threshold="50px" id="infinite-scroll">
      <ion-infinite-scroll-content loading-spinner="bubbles">-->
      <div class="main-wrap">
        <div class="item-wrapper">
          <div class="top-section">
            <div class="left-section">
              <h3>{{ productBrand.korName }}</h3>
              <!-- <h3>{{ productDetails.name }}</h3> -->
              <span>
                <img src="@/assets/icons/arrow-left.svg" />
              </span>
            </div>
            <div class="right-section" v-if="!platform == 'other'">
              <button @click="showModal">
                <img src="@/assets/icons/share.svg" />
              </button>
            </div>
          </div>

          <div class="product-description">
            <!-- <h2>{{ productDetails.description }}</h2> -->
            <h2>{{productDetails.name}}</h2>

            <div class="hashwrap">
              <!-- <span v-for="hash in hashtag" :key="hash">{{ hash.name }}</span> -->
              <span v-for="(hash, index) in productDetails.tag" :key="index">{{ "#" + hash.tag }}</span>
              <!-- <span>hi</span> -->
            </div>
            <p>
              <span>
                <img src="@/assets/icons/calendar.svg" />
              </span>
              <!-- 2021.11.11 ~ 2021.12.25 -->
              <span v-for="(item, i) of productDetails.campaign" :key="i">
                {{
                  item.campaignSchedule
                    ? moment(item.campaignSchedule.startedAt).format("YYYY.MM.DD")
                    : null
                }}
                ~
                {{
                  item.campaignSchedule
                    ? moment(item.campaignSchedule.finishedAt).format("YYYY.MM.DD")
                    : null
                }}
              </span>
            </p>
          </div>

          <ProductDetailsTab :productData="productDetails" />
        </div>
      </div>
      <!-- </ion-infinite-scroll-content>
      </ion-infinite-scroll>-->

      <div class="subscribe-wrap">
        <figure class="favorite" @click="likeProduct(productDetails.id)">
          <img v-if="productDetails.isInfluenceLike" src="@/assets/icons/heart-filled.svg" />
          <img v-else src="@/assets/icons/heart-outline.svg" />
        </figure>

        <!-- sponsership button -->
        <!-- <button @click="showModal" class="black-btn">showModal</button> -->
        <!-- Sponsorship application -->
        <!-- <button @click="sponsorshipApplication" class="black-btn">협찬 신청</button> -->
        <!-- {{ sponsorship }} -->
        <button v-if="sponsorship" @click="sponsorshipApplication" class="black-btn">협찬 신청</button>
        <!-- Cancellation of sponsorship application -->
        <button v-else-if="cancel_spon" @click="sponsorshipCancellation" class="white-btn">협찬 신청 취소</button>
        <!-- Sponsorship application completed -->
        <button v-else-if="complete_spon" class="grey-btn">협찬 신청 완료</button>
        <!-- Sponsorship has ended. -->
        <button v-else-if="end_spon" class="grey-btn">협찬이 종료되었습니다.</button>

        <!-- use 'white-btn' class for white outline button & 'grey-btn' class for grey button -->
      </div>

      <!-- product option -->
      <DrawerBottom
        class="bottomDrawer"
        :class="{ active: isActive }"
        :isCancelspon="isCancelspon"
        v-if="isActive"
        v-on:closePopup="closeDrawerBottom($event)"
      />

      <div class="overlay" :class="{ active: isActive }"></div>
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
    </div>

    <!-- End page content -->
  </ion-page>
</template>
<script>
// import { inject, onMounted } from "vue";
import {
  IonPage,
  // IonInfiniteScroll,
  // IonInfiniteScrollContent,
} from "@ionic/vue";
// Import Swiper Vue.js components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { IonSlides, IonSlide } from "@ionic/vue";
import Toast from "@/alert/alert.js";
import ProductDetailsTab from "@/components/ProductDetailsTab.vue";
import CustomModal from "@/components/Modal.vue";
import TopNav from "@/components/TopNav.vue";
import DrawerBottom from "@/components/DrawerBottom.vue";
import ItemService from "@/services/ItemService";
import UserInfoService from "@/services/UserInfoService";
import TokenService from "@/services/TokenService";
import moment from "moment";

export default {
  name: "ItemDetails",
  components: {
    IonPage,
    // IonSlides,
    // IonSlide,
    // IonInfiniteScroll,
    // IonInfiniteScrollContent,
    ProductDetailsTab,
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
      productDetails: [],
      productBrand: '',
      productCampaign: null,
      userToken: "",
      isCancelspon: false,
      sponsorship: true,
      cancel_spon: false,
      complete_spon: false,
      end_spon: false,
      platform: 'other',
    };
  },
  setup() {
    // const userData = inject("userData");

    //  onMounted( async () => {
    //   let isLogedIn = await this.tokenService.isAuth();
    //   if(isLogedIn) {
    //     userData.methods.getUserData();
    //   }
    // });

    return {
      // userData,
      modules: [Pagination],
    };
  },
  async created() {
    this.moment = moment;
    this.itemService = new ItemService();
    this.userInfoService = new UserInfoService();
    this.tokenService = new TokenService();
    let isLogedIn = await this.tokenService.isAuth();
    if (isLogedIn) {
      this.sponsorship = false;
    }
    this.getProductDetails();
    // setTimeout(() => {
    //   this.pushNotification('http://stylemate.dvconsulting.org/item');
    // }, 5000);
  },
  mounted() {
    // this.getURL();
    window.productShare = this.productShare;
    this.getMobileOS();
    if (this.getMobileOS() == 'Other') {
      this.platform = 'other';
    }
    console.log('getMobileOS', this.getMobileOS());
  },
  methods: {
    getMobileOS() {
      const ua = navigator.userAgent
      if (/android/i.test(ua)) {
        return "Android"
      }
      else if ((/iPad|iPhone|iPod/.test(ua)) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
        return "iOS"
      }
      return "Other"
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    hideSponserButton() {
      this.isActive = !this.isActive;
    },
    getURL() {
      alert("The URL of this page is: " + window.location.href);
      let currentUrl = window.location.href;
      return currentUrl;
    },
    getProductDetails() {
      var proId = this.$route.params.id;

      this.itemService.getProductDetails(proId).then((res) => {
        // catch error
        if (res.response) {
          if (res.response.status == 404) {
            this.$router.push("/item");
          }
        }
        // success
        else {
          this.productDetails = res;
          console.log("productDetails:-", this.productDetails);
          // console.log("processStatus:-", res.campaign[0].processStatus);
          // console.log("processDetailStatus:-", res.campaign[0].processDetailStatus);
          // console.log("bookingStatus:-", res.campaign[0].booking[0].bookingStatus);
          // console.log("postStatus:-", res.campaign[0].booking[0].postStatus);
          //cancel sponsership button
          if (
            res.campaign[0].processStatus == "progress" &&
            res.campaign[0].processDetailStatus == "booking" &&
            res.campaign[0].booking.length > 0 &&
            res.campaign[0].booking[0].bookingStatus == "booking" &&
            res.campaign[0].booking[0].postStatus == "ready"
          ) {
            this.sponsorship = false;
            this.cancel_spon = true;
            this.complete_spon = false;
            this.end_spon = false;
          }
          //apply sponsership button
          else if (
            res.campaign[0].processStatus == "progress" &&
            res.campaign[0].processDetailStatus == "booking"
          ) {
            this.sponsorship = true;
            this.cancel_spon = false;
            this.complete_spon = false;
            this.end_spon = false;
          }
          //sponsership complete button
          else if (
            res.campaign[0].processStatus == "progress" &&
            ["announce", "posting"].includes(res.campaign[0].processDetailStatus) &&
            res.campaign[0].booking[0].bookingStatus == "join" &&
            [
              "ready",
              "post_request",
              "post_complete",
              "post_cancel",
              "post_modify_request",
              "post_modify_complete",
            ].includes(res.campaign[0].booking[0].postStatus)
          ) {
            this.sponsorship = false;
            this.cancel_spon = false;
            this.complete_spon = true;
            this.end_spon = false;
            // console.log("process-status", res.campaign[0].processStatus);
            // console.log("processDetailStatus", res.campaign[0].processDetailStatus);
            // console.log("bookingStatus", res.campaign[0].booking[0].bookingStatus);
            // console.log("postStatus", res.campaign[0].booking[0].postStatus);
          }
          //Sponsorship has ended. button
          else if (
            res.campaign[0].processStatus == "finish" &&
            res.campaign[0].processDetailStatus == "finish" &&
            res.campaign[0].booking[0].bookingStatus == "finish" &&
            res.campaign[0].booking[0].postStatus == "finish"
          ) {
            this.sponsorship = false;
            this.cancel_spon = false;
            this.complete_spon = false;
            this.end_spon = true;
          }
          // console.log('productDetails:', this.productDetails.campaign);
          this.productDetails.campaign.map((item) => {
            this.productCampaign = item;
          });
          this.productBrand = this.productDetails.brand;
          console.log('productBrand:', this.productBrand);
        }
      });
    },
    // isChannelIg
    isChannelIg(pdata) {
      let isProductCamp = false;
      if (!pdata) return isProductCamp;
      pdata.forEach((item) => {
        if (item.processStatus === "progress" && item.channelType === "instagram") {
          isProductCamp = true;
          return isProductCamp;
        }
      });
      return isProductCamp;
    },
    // isAuthorized
    async isLogedIn() {
      return await this.tokenService.isAuth();
    },

    async isAuthorized() {
      let isLogedIn = await this.tokenService.isAuth();
      if (!isLogedIn) {
        return null;
      } else {
        return await this.userInfoService.getUserInfo().then((res) => {
          return res.data.influence.stylemateApprovedAt;
        });
      }
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
    //isDeliveries
    async isDeliveries() {
      let uid;
      return await this.isUserid().then((res) => {
        uid = res;
        return this.userInfoService.getUserdeliveries(uid).then((res) => {
          if (res.length > 0) {
            return true;
          } else {
            return false;
          }
        });
      });
    },

    async sponsorshipApplication() {
      // condition 1 login check
      let isLogedIn = await this.isLogedIn();
      if (!isLogedIn) {
        Toast.fire({ title: "회원 전용 서비스입니다. 로그인하세요." });
        return false;
      }
      // condition 1 authorised check
      let isAuthorized = await this.isAuthorized();
      if (!isAuthorized) {
        this.showModal();
        return false;
      }
      // condition 2 deliveries address check
      let isDeliveries = await this.isDeliveries().then((res) => res);
      if (!isDeliveries) {
        Toast.fire({ title: "배송지가 등록되지 않았습니다." });
        return false;
      }
      // condition 3 Sponsership check
      // let processDetailStatus = this.productCampaign.processDetailStatus;
      // if (processDetailStatus === 'announce' || processDetailStatus === 'posting') {
      //   Toast.fire({ title: "브랜드의 사정으로 협찬이 불가능합니다." });
      //   return false;
      // }
      this.hideSponserButton();
    },
    async likeProduct(productId) {
      // condition 1 login check
      let isLogedIn = await this.isLogedIn();
      if (!isLogedIn) {
        Toast.fire({ title: "회원 전용 서비스입니다. 로그인하세요." });
      } else {
        let uid;
        await this.isUserid().then((res) => {
          uid = res;
          this.itemService.influencelikes(uid, "product", productId).then((res) => {
            // console.log(res.response.data.error);
            // console.log(res.response);
            this.getProductDetails();
            if (res.response.data.error) {
              Toast.fire({ title: res.response.data.error.message });
            }
          });
        });
      }
      console.log("likeProduct");
    },
    sponsorshipCancellation() {
      this.isCancelspon = true;
      this.isActive = true;
      console.log("sponsorshipCancellation");
    },
    closeDrawerBottom(isClose) {
      console.log("isClose", isClose);
      if (isClose) {
        this.isCancelspon = false;
        this.isActive = false;
      }
      this.getProductDetails();
    },

    // for productShare
    productShare(res) {
      alert(res);
      console.log("res", res);
      if (res) {
        window.location.href = res;
      }
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(9, 9, 9, 0.75);
  z-index: 2;
  display: none;
  max-width: 500px;
  transform: translate(-50%);
}
.bottomDrawer {
  display: none;
}
.bottomDrawer.active,
.overlay.active {
  display: block;
}
.mainslide figure {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 100%;
  height: 100%;
}
.mainslide figure .top-social-icon {
  position: absolute;
  top: 13px;
  left: 13px;
}
.mainslide figure .top-social-icon img {
  width: 24px;
  height: 24px;
}
.mainslide-banner-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 380px;
  /* background: rgb(101, 101, 101); */
}
.mainslide-banner-wrap img {
  height: 380px;
  width: 100%;
  max-height: 380px;
  object-fit: cover;
}
.item-wrapper {
  padding: 40px 20px 160px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -30px;
  position: relative;
  z-index: 1;
  /* top: 350px; */
  background-image: linear-gradient(
    148.66deg,
    rgba(241, 241, 241, 0.5) 18.92%,
    rgba(255, 255, 255, 0.1) 80.41%
  );
  /* background: #ffffff; */
  transition: all 0.5s ease-in-out;
  backdrop-filter: blur(30px);
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
  margin-left: 4px;
}
.hashwrap span:first-child {
  margin-left: 0;
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
.subscribe-wrap figure img {
  width: 36px;
  height: 36px;
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
.main-wrap {
  position: relative;
  z-index: 2;
  overflow: visible;
  background: transparent;
}
.mainslide .swiper-pagination {
  bottom: 42px !important;
}
.tab-wrap .tab-content {
  padding-bottom: 0;
}
</style>
