<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="상세보기"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="main-wrap">
        <div class="product-main-banner">
          <img v-if="this.brandDetails.imageMainPath" :src="brandDetails.imageMainPath" />
        </div>

        
          <div class="item-wrapper">
            <div class="itemMain">
              <div class="itemHeader">
                <h2>{{ brandDetails.korName }}</h2>
                <img src="@/assets/icons/Vector.svg" alt="img" style="height: 20px" />
              </div>
              <ul class="hastags">
                <li v-for="(item, i) of brandDetails.tag" :key="i + 1">
                  <p>
                    {{ "#" + item.tag }}
                  </p>
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
                  >
                    캠페인
                  </button>
                  <button
                    class="tab"
                    @click="layout = 'tab2'"
                    :class="{ active: layout === 'tab2' }"
                  >
                    가이드
                  </button>
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
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>
<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import BrandIntroduction from "@/components/BrandIntroduction.vue";
import BrandItem from "@/components/BrandItem.vue";
import BrandService from "@/services/BrandService";
export default {
  name: "BrandDetails",
  components: {
    IonPage,
    TopNav,
    IonContent,
    BrandIntroduction,
    BrandItem,
  },

  data() {
    return {
      display: false,
      visible: false,
      layout: "tab1",
      brandDetails: Object,
    };
  },
  created() {
    this.brandService = new BrandService();

    var proId = this.$route.params.id;
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
  mounted() {},
  methods: {
    show() {
      this.display = true;
    },
    showItems() {
      this.visible = !this.visible;
    },
  },
};
</script>
<style scoped>
.main-wrap {
  height: 100vh;
  overflow: hidden;
  overflow-y: hidden;
  overflow-y: auto;
  /* background-color: #ffffff; */
  padding-bottom: 60px;
}
.hastags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 30px;
}
.hastags li p{
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
  margin-bottom: 0;
}
.main-container {
  max-width: 500px;
  min-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
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
  position: relative;
  z-index: 1;
  top: 270px;
  /* background-image: linear-gradient(
    148.66deg,
    rgba(241, 241, 241, 0.5) 18.92%,
    rgba(255, 255, 255, 0.1) 80.41%
  ); */
  background: #ffffff;
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
.tag-info .tag-info-rowfirst-child {
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
</style>
