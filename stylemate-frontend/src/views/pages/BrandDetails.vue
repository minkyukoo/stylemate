<template>
  <div class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="상세보기"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <div class="scrollDiv">
      <!-- <div class="product-main-banner">
        <img
          v-if="this.brandDetails.imageMainPath"
          :src="brandDetails.imageMainPath"
        />
      </div>-->
      <div class="mainslide">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="mainslide-banner-wrap">
              <figure>
                <img v-if="this.brandDetails.imageMainPath" :src="brandDetails.imageMainPath" alt />
                <div class="top-social-icon">
                  <!-- <router-link to>
                    <img src="@/assets/icons/instagram.svg" />
                  </router-link>-->
                  <img src="@/assets/icons/instagram.svg" />
                </div>
              </figure>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="main-wrap">
        <div class="item-wrapper">
          <div class="itemMain">
            <div class="itemHeader">
              <h2>
                {{
                  brandDetails.korName
                }}
                <span>
                  <img src="@/assets/icons/arrow-left.svg" />
                </span>
              </h2>

              <!-- <img src="@/assets/icons/Vector.svg" alt="img" style="height: 20px" /> -->
              <div @click="likeBrand(brandDetails.id)" role="button">
                <img v-if="brandDetails.isInfluenceLike" src="@/assets/icons/heart-filled.svg" />
                <img v-else src="@/assets/icons/heart-outline.svg" />
              </div>
            </div>
            <ul class="hastags">
              <li v-for="(item, i) of brandDetails.tag" :key="i + 1">
                <p>{{ "#" + item.tag }}</p>
              </li>
            </ul>
          </div>
          <div class="brandTab">
            <div class="tab-wrap">
              <div class="tabs">
                <button
                  class="tab"
                  @click="layout = 'tab1'"
                  :class="{ active: layout === 'tab1' }"
                >브랜드 소개</button>
                <button
                  class="tab"
                  @click="layout = 'tab2'"
                  :class="{ active: layout === 'tab2' }"
                >아이템 보기</button>
              </div>

              <!-- tab content 1 -->
              <div class="tab-content" v-if="layout === 'tab1'">
                <BrandIntroduction
                  :brandIntro="brandDetails.description"
                  :brandThumb="brandDetails.imageThumbnailPath"
                />
              </div>

              <!-- tab content 2 -->
              <div class="tab-content" v-if="layout === 'tab2'">
                <BrandItem :brandItem="brandDetails.product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End page content -->
  </div>
</template>
<script>
// import { IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import BrandIntroduction from "@/components/BrandIntroduction.vue";
import BrandItem from "@/components/BrandItem.vue";
import Toast from "@/alert/alert";
import BrandService from "@/services/BrandService";
import UserInfoService from "@/services/UserInfoService";
import TokenService from "@/services/TokenService";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default {
  name: "BrandDetails",
  components: {
    TopNav,
    // IonContent,
    BrandIntroduction,
    BrandItem,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      display: false,
      visible: false,
      layout: "tab1",
      brandDetails: Object,
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
  created() {
    this.brandService = new BrandService();
    this.userInfoService = new UserInfoService();
    this.tokenService = new TokenService();

    var proId = this.$route.params.id;

    this.getBrandDetails(proId);

  },
  mounted() { },
  methods: {
    show() {
      this.display = true;
    },
    showItems() {
      this.visible = !this.visible;
    },
    getBrandDetails(proId) {
      this.brandService.getBrandDetails(proId).then((res) => {
        // catch error
        if (res.response) {
          if (res.response.status == 404) {
            alert(res.response.data.error.message);
            this.$router.push("/brands");
          }
        }
        // success
        else {
          console.log("res", res);
          this.brandDetails = res;
        }
      });
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
          console.log("brand uid", uid);
          this.brandService
            .influencelikes(uid, "brand", brandId)
            .then((res) => {
              let proId = this.$route.params.id;
              this.getBrandDetails(proId);
              if (res.response.data.error) {
                Toast.fire({ title: res.response.data.error.message });
              }
            });
        });
      }
      console.log("likeProduct");
    },
  },
};
</script>
<style scoped>
/* .main-wrap {
  height: 100vh;
  overflow: hidden;
  overflow-y: hidden;
  overflow-y: auto;
  /* background-color: #ffffff;
  padding-bottom: 60px;
} */
.itemMain .itemHeader h2 {
  display: flex;
  align-items: center;
}
.hastags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 30px;
}
.hastags li {
  margin-left: 4px;
}
.hastags li:first-child {
  margin-left: 0;
}
.hastags li p {
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
  margin-bottom: 0;
}
.scrolldiv {
  height: 1000px;
  max-width: 500px;
  min-width: 500px;
  background-color: rgb(238, 230, 230);
  font-size: 36px;
}
.miancard {
  display: flex;
  flex-direction: column;
  margin: 0 !important;

  width: 500px;
  background-color: rgb(238, 230, 230);
  font-size: 36px;
}
img {
  width: 100%;
  height: 300px;
  object-fit: fill;
}

.product-main-banner {
  position: fixed;
  z-index: 1;
  max-width: 500px;
  width: 100%;
  top: 60px;
}
.product-main-banner img {
  width: 100%;
}
.item-wrapper {
  padding: 40px 20px 60px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -30px;
  position: relative;
  z-index: 1;
  /* top: 270px; */
  background: linear-gradient(
    93.21deg,
    rgba(241, 241, 241, 0.5) 0.78%,
    rgba(241, 241, 241, 0.1) 100.78%
  );
  backdrop-filter: blur(30px);
  /* background: #ffffff; */
  transition: all 0.5s ease-in-out;
  /* backdrop-filter: blur(30px); */
}
.item-wrapper .product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
}
.item-wrapper .product-list .product-list-item {
  width: 50%;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 4px;
  margin-bottom: 24px;
}
.item-wrapper .product-list .product-list-item figure {
  margin-bottom: 12px;
}
.item-wrapper .product-list .product-list-item figure img {
  width: 100%;
}
.item-wrapper .product-list .product-list-item h3 {
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
}
.item-wrapper .product-list .product-list-item p {
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-wrapper .product-list .product-list-item span {
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
}

.itemMain .itemHeader img {
  width: 24px;
  height: 24px;
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

/* tab styling */

.tab-wrap {
  width: 100%;
}
.brandTab {
  border: 0;
}
.tabs {
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  display: flex;
  background: #ffffff;
}

.tabs .tab {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 50%;
}
.tabs .tab.active {
  color: #ffffff;
  background: #090909;
}
.pre-div {
  margin-top: 42px;
}
.pre-div h3 {
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #25282b;
}
.pre-div h3 span {
  margin-right: 4px;
}
.pre-div .text-box {
  background: #f7f7f7;
  border-radius: 6px;
  padding: 30px 20px 60px;
  margin-top: 13px;
  text-align: left;
}
.pre-div .text-box p {
  font-size: 12px;
  line-height: 16px;
  color: #595959;
  margin-top: 20px;
}
.pre-div .text-box p:first-child {
  margin-top: 0;
}
.tag-info {
  border: 1px solid #797979;
  padding: 0 20px;
  border-radius: 6px;
}
.tag-info .tag-info-row {
  border-top: solid 1px #f6f6f6;
  padding: 20px 0;
}
.tag-info .tag-info-row:first-child {
  border-top: 0;
}
.tag-info .tag-info-row .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tag-info .tag-info-row .top h3 {
  font-size: 12px;
  line-height: 16px;
  color: #797979;
}
.tag-info .tag-info-row .top span {
  font-size: 10px;
  line-height: 12px;
  color: #595959;
  border: 1px solid #595959;
  border-radius: 4px;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.tag-content {
  margin-top: 8px;
  text-align: left;
}
.tag-content span {
  font-size: 10px;
  line-height: 12px;
  color: #595959;
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
