<template>
  <div class="item-scroller-nav">
    <swiper
      class="main-menu"
      :slides-per-view="'auto'"
      :space-between="4"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      v-if="store.state.sponsorTabState === 'progressHistory'"
    >
      <swiper-slide
        v-for="(category, index) in CategoriesProgress"
        :key="index || category.name"
      >
        <a
          :class="[index === store.state.sponcerFilterNo ? 'active' : '']"
          @click="store.methods.setSponsorFilter(category.id , index)"
          >{{ category.name }}</a
        >
      </swiper-slide>
    </swiper>
    <swiper
      class="main-menu"
      :slides-per-view="'auto'"
      :space-between="4"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      v-if="store.state.sponsorTabState === 'bookingHistory'"
    >
      <swiper-slide
        v-for="(category, index) in CategoriesApplication"
        :key="index || category.name"
      >
        <a
          :class="[index === store.state.sponcerFilterNo ? 'active' : '']"
          @click="store.methods.setSponsorFilter(category.id, index)"
          >{{ category.name }}</a
        >
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import MyPageService from "@/services/MyPageService";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { inject, onMounted } from "vue";
import "swiper/css";
import "swiper/css/scrollbar";
export default {
  name: "SponsorFilter",
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
      // console.log("slide change");
    };

    // watch(
    //    store.state.sponcerFilterId,
    //   (val) => {
    //     if (val === "progressHistory") {
    //       store.methods.setSponsorFilter(store.state.sponsorFilter);
    //     }
    //   }
    // );

    onMounted(() => {
      // store.methods.setCampaignEncodeUrl();
      store.methods.setSponsorFilter("");
    });
    return {
      onSwiper,
      onSlideChange,
      store,
      //   modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },

  created() {
    this.myPageService = new MyPageService();
  },
  data() {
    return {
      CategoriesProgress: [
        {
          no: 1,
          id: "",
          name: "all",
        },
        {
          no: 2,
          id: "postRequest",
          name: "post registration",
        },
        {
          no: 3,
          id: "postProgress",
          name: "checking",
        },
        {
          no: 4,
          id: "postModifyRequest",
          name: "re-registration",
        },
        {
          no: 5,
          id: "selected",
          name: "sponcer selection",
        },
      ],
      CategoriesApplication: [
        {
          no: 1,
          id: "",
          name: "전체",
        },
        {
          no: 2,
          id: "finish",
          name: "Application completed",
        },
        {
          no: 3,
          id: "selected",
          name: "sponcer selection",
        },
        {
          no: 4,
          id: "unselected",
          name: "unselected",
        },
        {
          no: 5,
          id: "finish",
          name: "sponcership completed",
        },
      ],
      myPageService: null,
    };
  },
  methods: {},
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
  transition: all 0.3s;
}
.item-scroller-nav .main-menu .swiper-slide a.active {
  border: 1px solid #090909;
  background: #090909;
  font-weight: bold;
  color: white;
  transition: all 0.3s;
}

.swiper-slide {
  width: auto;
}
</style>