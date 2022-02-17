<template>
  <div class="item-scroller-nav">
    <swiper
      class="main-menu"
      :slides-per-view="'auto'"
      :space-between="4"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="category in allCategories" :key="category.name">
        <a @click="handleClick( category.id)">{{ category.name }}</a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
export default {
  name: "SponsorFilter",
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
      allCategories: [
        {
          id: "all",
          name: "전체",
        },
        {
          id: "post-registration",
          name: "포스트 등록",
        },
        {
          id: "checking",
          name: "확인중",
        },
        {
          id: "re-registration",
          name: "재등록",
        },
        {
          id: "sponsor-selection",
          name: "협찬선정",
        },  
      ],
    };
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
  border: 1px solid #E5E5E5;
  border-radius: 100px;
  display: block;
  font-weight: normal;
  font-size: 12px;
line-height: 16px;
  color: #C4C4C4;
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

.swiper-slide{
  width: auto;
}
</style>