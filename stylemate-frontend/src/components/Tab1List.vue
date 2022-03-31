<template>
  <div class="main-container relative">
    <div class="main-wrap">
      <h1>hello world</h1>
      <div class="sliderBox">
        <swiper
          :pagination="{
            type: 'progressbar',
          }"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(citem, i) of connectionInfo" :key="i + 1">
            <div class="mainslide-banner-wrap">
              <img :src="citem.imagePath" alt />
            </div>
            <div v-html="citem.body" class="ci-body"></div>
            <!-- <h4>인스타그램을 실행 해 주세요</h4> -->
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination, EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { inject } from "vue";
import ChannelService from "@/services/ChannelService";

export default {
  name: "Tab1List",
  components: { Swiper, SwiperSlide },
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
      modules: [Pagination, EffectCoverflow, Pagination, Navigation],
      // modules: [EffectCoverflow, Pagination],
      store,
    };
  },
  data() {
    return {
      connectionInfo: null,
    };
  },
  created() {
    this.channelService = new ChannelService();

  },
  mounted() {
    this.channelService.getAccountConnection().then((res) => {
      console.log('getAccountConnection res', res);
      this.connectionInfo = res.data.boardGuideDetail;
    });
  },
  methods: {
    accConnectConfirm() {
      this.$router.push({
        name: "NewMemberJoining",
      });
    },
  },
};
</script>

<style scoped>
.sliderBox {
  margin-top: 40px;
  min-height: 500px;
  height: 100%;
}
.sliderBox .mainslide-banner-wrap img {
  margin: 0 auto;
  max-width: 200px;
}
</style>