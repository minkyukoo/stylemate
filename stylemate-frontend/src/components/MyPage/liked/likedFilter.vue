<template>
  <div
    v-if="store.state.likedTabBrandLength || store.state.likedTabProductLength"
    class="item-scroller-nav"
  >
    <swiper
      class="main-menu"
      :slides-per-view="'auto'"
      :space-between="4"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(category, index) in store.state.likedTabAllCategories"
        :key="category.name"
      >
        <a
          :class="{ 'is-like-tab-active': category.active }"
          @click="handleClick(category.id, index)"
          >{{ category.name }}</a
        >
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import UserInfoService from "@/services/UserInfoService";
import { inject } from "vue";
export default {
  name: "likedTab",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = inject("store");
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      //   modules: [Navigation, Pagination, Scrollbar, A11y],
      store,
    };
  },
  data() {
    return {
      product: false,
      brand: false,
    };
  },
  created() {
    this.user = new UserInfoService();
  },
  mounted() {
    this.user.getUserInfo().then((userInfo) => {
      this.user.getInfluence(userInfo.data.uid, "product").then((res) => {
        this.store.state.likedTabProductLength =
          res.data.data.length > 0 ? true : false;
      });
      this.user.getInfluence(userInfo.data.uid, "brand").then((res) => {
        this.store.state.likedTabBrandLength =
          res.data.data.length > 0 ? true : false;
      });
    });
  },
  methods: {
    handleClick(id, index) {
      this.store.state.likedTabAllCategories.forEach((val, key) => {
        if (index === key) {
          this.store.state.likedTabAllCategories[index].active = true;
        } else this.store.state.likedTabAllCategories[key].active = false;
      });
      let activeTab = this.store.state.likedTabState;
      let categoryId = id;
      if (categoryId === "all") {
        this.user.getUserInfo().then((userInfo) => {
          this.user.getInfluence(userInfo.data.uid, "product").then((res) => {
            // console.log("product", res);
            this.store.state.likedTabProduct = res.data.data;
            this.store.state.likedTabProductLength =
              res.data.data.length > 0 ? true : false;
          });
          this.user.getInfluence(userInfo.data.uid, "brand").then((res) => {
            // console.log("brand", res);
            this.store.state.likedTabBrand = res.data.data;
            this.store.state.likedTabBrandLength =
              res.data.data.length > 0 ? true : false;
          });
        });
      } else if (categoryId === "Progress") {
        this.user.getUserInfo().then((userInfo) => {
          if (activeTab === "item") {
            this.user
              .getInfluenceWithCategory(
                userInfo.data.uid,
                "product",
                "progress"
              )
              .then((res) => {
                // console.log("product", res);
                this.store.state.likedTabProduct = res.data.data;
                this.store.state.likedTabProductLength =
                  res.data.data.length > 0 ? true : false;
              });
          }
          if (activeTab === "brand") {
            this.user
              .getInfluenceWithCategory(userInfo.data.uid, "brand", "progress")
              .then((res) => {
                // console.log("brand", res);
                this.store.state.likedTabBrand = res.data.data;
                this.store.state.likedTabBrandLength =
                  res.data.data.length > 0 ? true : false;
              });
          }
        });
      } else if (categoryId === "end") {
        this.user.getUserInfo().then((userInfo) => {
          if (activeTab === "item") {
            this.user
              .getInfluenceWithCategory(userInfo.data.uid, "product", "finish")
              .then((res) => {
                // console.log("product", res);
                this.store.state.likedTabProduct = res.data.data;
                this.store.state.likedTabProductLength =
                  res.data.data.length > 0 ? true : false;
              });
          }
          if (activeTab === "brand") {
            this.user
              .getInfluenceWithCategory(userInfo.data.uid, "brand", "finish")
              .then((res) => {
                // console.log("brand", res);
                this.store.state.likedTabBrand = res.data.data;
                this.store.state.likedTabBrandLength =
                  res.data.data.length > 0 ? true : false;
              });
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.is-like-tab-active {
  background-color: black !important;
  color: white !important;
}
.item-scroller-nav {
  background: #ffffff;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 0;
  z-index: 3;
}
.item-scroller-nav .main-menu {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
}

.item-scroller-nav .main-menu .swiper-slide a {
  padding: 8px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 100px;
  display: block;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #c4c4c4;
  cursor: pointer;
  background: #ffffff;
  white-space: nowrap;
}
.item-scroller-nav .main-menu .swiper-slide a.active {
  border: 1px solid #090909;
  background: #090909;
  font-weight: bold;
  color: #090909;
}

.swiper-slide {
  width: auto;
}
</style>
