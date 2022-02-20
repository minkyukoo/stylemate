<template>
  <div>
    <h1>Swipper Slider</h1>

    <!-- <swiper
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
    </swiper>-->

    <br />
    <swiper
      :modules="modules"
      :centeredSlides="true"
      :slidesPerGroup="1"
      :watchSlidesProgress="true"
      :slidesPerView="1.5"
      :space-between="20"
      :centeredSlidesBounds="true"
      :pagination="{ clickable: true }"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="carousel__item">
          <img src="https://source.unsplash.com/random/800x400?1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <img src="https://source.unsplash.com/random/800x400?1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <img src="https://source.unsplash.com/random/800x400?1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <img src="https://source.unsplash.com/random/800x400?1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <img src="https://source.unsplash.com/random/800x400?1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <img src="https://source.unsplash.com/random/800x400?1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <img src="https://source.unsplash.com/random/800x400?1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <img src="https://source.unsplash.com/random/800x400?1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <img src="https://source.unsplash.com/random/800x400?1" />
        </div>
      </swiper-slide>
    </swiper>

    <h1>Slick Slider</h1>

    <Carousel :itemsToShow="1.5" :wrapAround="true">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <img src="https://source.unsplash.com/random/800x400?1" />
          {{ slide }}
        </div>
      </Slide>
    </Carousel>

    <!-- <carousel :items-to-show="1.5">
      <slide v-for="slide in 10" :key="slide">
         <img src="https://source.unsplash.com/random/800x400?1" />{{ slide }}
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>-->
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

// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "Slider",
  components: {
    Swiper,
    SwiperSlide,

    Carousel,
    Slide,
    // Pagination,
    // Navigation,
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

<style scoped>
.swiper-slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.swiper-slide-active > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.swiper-slide-next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.swiper-slide-prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.swiper-slide-active > .carousel__item {
  transform: scale(1.1);
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>
