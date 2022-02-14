<template>
  <ion-page class="main-container relative">
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title style="text-align: center">View details</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="mainslide">
        <ion-slides pager="true" :options="slideOpts">
          <ion-slide>
            <figure>
              <img src="@/assets/images/product-details-banner.jpg" />
              <div class="top-social-icon">
                <a href="#"><img src="@/assets/icons/instagram.svg" /></a>
              </div>
            </figure>
          </ion-slide>
          <ion-slide>
            <figure>
              <img src="@/assets/images/product-details-banner.jpg" />
              <div class="top-social-icon">
                <a href="#"><img src="@/assets/icons/instagram.svg" /></a>
              </div>
            </figure>
          </ion-slide>
          <ion-slide>
            <figure>
              <img src="@/assets/images/product-details-banner.jpg" />
              <div class="top-social-icon">
                <a href="#"><img src="@/assets/icons/instagram.svg" /></a>
              </div>
            </figure>
          </ion-slide>
        </ion-slides>
      </div>

      <ion-infinite-scroll threshold="50px" id="infinite-scroll">
        <ion-infinite-scroll-content loading-spinner="bubbles">
          <div class="item-wrapper">
            <div class="top-section">
              <div class="left-section">
                <h3>Areuban</h3>
                <span><img src="@/assets/icons/arrow-left.svg" /></span>
              </div>
              <div class="right-section">
                <button @click="showModal">
                  <img src="@/assets/icons/share.svg" />
                </button>
              </div>
            </div>
            <div class="product-description">
              <h2>[STRAIGHT.FIT] Powder cream BOOTSCUT.FIT Chana jeans.632</h2>

              <div class="hashwrap">
                <span v-for="hash in hashtag" :key="hash">{{ hash.name }}</span>
                <!-- <span>hi</span> -->
              </div>

              <p>
                <span><img src="@/assets/icons/calendar.svg" /></span>
                2021.11.11 ~ 2021.12.25
              </p>
            </div>

            <CustomModal v-show="isModalVisible" @close="closeModal">
              <template v-slot:header>
                <h2>공유하기</h2>
              </template>

              <template v-slot:body>
                <div class="modal-content">
                  <ul class="shareList">
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
                  </ul>
                </div>
              </template>

              <template v-slot:footer>
                
              </template>
            </CustomModal>

            <TabProductDetails />
          </div>
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/vue";
import { IonSlides, IonSlide } from "@ionic/vue";
import TabProductDetails from "@/components/Tab.vue";
import CustomModal from "@/components/Modal.vue";

export default {
  name: "BrandDetails",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonSlides,
    IonSlide,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    TabProductDetails,
    CustomModal,
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
    };
  },

  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
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

</style>
