<template>
  <div>
    <h1>Swipper Slider</h1>

    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <img src="https://source.unsplash.com/random/800x400?1" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://source.unsplash.com/random/800x400?1" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://source.unsplash.com/random/800x400?1" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://source.unsplash.com/random/800x400?1" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  name: "Slider",
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
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style scoped></style>
