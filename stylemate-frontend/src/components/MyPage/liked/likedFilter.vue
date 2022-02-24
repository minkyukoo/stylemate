<template>
  <div v-if="product || brand" class="item-scroller-nav">
    <swiper
      class="main-menu"
      :slides-per-view="'auto'"
      :space-between="4"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="category in allCategories" :key="category.name">
        <a @click="handleClick(category.id)">{{ category.name }}</a>
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

export default {
  name: "likedTab",
  components: {
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

    return {
      onSwiper,
      onSlideChange,
      //   modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  data() {
    return {
      product: false,
      brand: false,
      allCategories: [
        {
          id: "all",
          name: "all",
        },
        {
          id: "Progress",
          name: "Progress",
        },
        {
          id: "end",
          name: "end",
        },
      ],
    };
  },
  created() {
    this.user = new UserInfoService();
  },
  mounted() {
    this.user.getUserInfo().then((userInfo) => {
      this.user.getInfluence(userInfo.data.uid, "product").then((res) => {
        this.product = res.data.data.length > 0 ? true : false;
      });
      this.user.getInfluence(userInfo.data.uid, "brand").then((res) => {
        this.brand = res.data.data.length > 0 ? true : false;
      });
    });
  },
};
</script>

<style scoped>
.item-scroller-nav {
  background: #ffffff;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 0;
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
