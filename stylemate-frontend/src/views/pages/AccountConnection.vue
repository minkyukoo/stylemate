<template>
  <div class="main-container relative">
    <!-- page content -->
    <div class="main-wrap">
      <div class="accountconnectionWrap">
        {{connectionInfo}}
        <div class="inner">
          <h2>1단계 <span>인스타그램 계정 설정하기</span></h2>
          <div class="sliderBox">
            <swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="50"
              :pagination="{ clickable: false }"
              :navigation="true"
            >
              <swiper-slide>
                <div class="mainslide-banner-wrap">
                  <img src="@/assets/images/mypage-frame.png" alt />
                </div>
                <h4>인스타그램을 실행 해 주세요</h4>
              </swiper-slide>

              
              <swiper-slide>
                <div class="mainslide-banner-wrap">
                  <img src="@/assets/images/mypage-frame.png" alt />
                </div>
                <h4>인스타그램을 실행 해 주세요</h4>
              </swiper-slide>
              <swiper-slide>
                <div class="mainslide-banner-wrap">
                  <img src="@/assets/images/mypage-frame.png" alt />
                </div>
                <h4>인스타그램을 실행 해 주세요</h4>
              </swiper-slide>
              <swiper-slide>
                <div class="mainslide-banner-wrap">
                  <img src="@/assets/images/mypage-frame.png" alt />
                </div>
                <h4>인스타그램을 실행 해 주세요</h4>
              </swiper-slide>
              <swiper-slide>
                <div class="mainslide-banner-wrap">
                  <img src="@/assets/images/mypage-frame.png" alt />
                </div>
                <h4>인스타그램을 실행 해 주세요</h4>
              </swiper-slide>
              <swiper-slide>
                <div class="mainslide-banner-wrap">
                  <img src="@/assets/images/mypage-frame.png" alt />
                </div>
                <h4>인스타그램을 실행 해 주세요</h4>
              </swiper-slide>
              <swiper-slide>
                <div class="mainslide-banner-wrap">
                  <img src="@/assets/images/mypage-frame.png" alt />
                </div>
                <h4>인스타그램을 실행 해 주세요</h4>
              </swiper-slide>
              <swiper-slide>
                <div class="mainslide-banner-wrap">
                  <img src="@/assets/images/mypage-frame.png" alt />
                </div>
                <h4>인스타그램을 실행 해 주세요</h4>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="subscribe-wrap">
          <button class="black-btn">확인</button>
        </div>
      </div>
    </div>
    <!-- End page content -->
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
  name: "AccountConnection",
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
    console.log("mounted");
    this.channelService.getAccountConnection().then((res) => {
      console.log(res);
      this.connectionInfo = res.boardGuideDetail;
    });
  },
};
</script>

<style scoped>
.accountconnectionWrap {
  /* display: flex; 
  align-items: center;
  justify-content: center;*/
  height: 100vh;
  padding: 50px 0 60px;
}
.accountconnectionWrap h2 {
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #24252b;
  text-align: center;
}
.accountconnectionWrap h2 span {
  color: #00b295;
}
.accountconnectionWrap h4 {
  font-size: 14px;
  line-height: 18px;
  color: #212226;
  text-align: center;
  margin-top: 70px;
}
.sliderBox {
  margin-top: 40px;
  min-height: 500px;
}
.sliderBox .mainslide-banner-wrap img {
  margin: 0 auto;
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
}
.subscribe-wrap .black-btn {
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #090909;
  padding: 24px;
  width: 100%;
}
.sliderBox .swiper {
  min-height: 500px;
}

</style>