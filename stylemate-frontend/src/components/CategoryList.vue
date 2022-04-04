<template>
  <div class="item-scroller-nav">
    <!-- for Category -->
    <swiper
      class="main-menu"
      :slides-per-view="'auto'"
      :space-between="28"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="category in allCategories" :key="category.name">
        <a
          :class="{ active: category.id === activeId }"
          @click="handleClick(category.childCategory, category.id)"
          >{{ category.name }}</a
        >
      </swiper-slide>
    </swiper>
    <!-- End for Category -->
    <!-- for Child Category -->
    <swiper
      v-if="childCategory"
      class="main-menu sub-menu"
      :slides-per-view="'auto'"
      :space-between="28"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="childCategory in childCategoryArray"
        :key="childCategory.name"
      >
        <a
          :class="{ active: childCategory.id === childactiveId }"
          @click="handleClick2(childCategory.id)"
          >{{ childCategory.name }}</a
        >
      </swiper-slide>
    </swiper>
    <!-- End for Child Category -->
  </div>

  <div class="product-main-banner" v-if="!childCategory" v-show="!nofltData">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(slide, i) of bannerList" :key="i + 1">
        <router-link
          to
          class="mainslide-banner-wrap"
          @click="bannerRedirect(slide.mobileLink)"
        >
          <img :src="slide.mobileImagePath" alt="Banner" />
        </router-link>
      </swiper-slide>
    </swiper>
  </div>

  <!-- <div class="product-main-banner" v-if="!childCategory" v-show="!listproduct">
    <img src="@/assets/images/product-banner.jpg" />
  </div>-->
</template>

<script>
import { inject } from "vue";
import ItemService from "@/services/ItemService";
import BannerService from "@/services/BannerService";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/scrollbar";
export default {
  name: "CategoryList",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    page: { type: Number },
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
      store,
      onSwiper,
      onSlideChange,
    };
  },

  data() {
    return {
      allCategories: null,
      allCategories2: null,
      childCategoryArray: [],
      childCategory: false,
      categorylist: null,
      nofltData: false,
      filterproductList: null,
      bannerList: null,
      childCategories2: null,
      activeId: -1,
      childactiveId: -1,
      spage: this.$props.page,
    };
  },

  created() {
    this.itemServices = new ItemService();
    this.bannerService = new BannerService();
    this.itemServices.getProductCategories().then((data) => {
      let arr = data;
      this.allCategories2 = arr.unshift({ name: "All", id: "All" });
      this.allCategories = data;
      this.activeId = "All"; //To highlight the button default
    });
    this.bannerService.getBannerList("item").then((res) => {
      this.bannerList = res;
      console.log("bannerList", this.bannerList);
      if (this.bannerList.length == 0) {
        this.onClickButton(false);
      }
    });
  },

  watch: {
    bannerList: function (val) {
      if (val.length == 0) {
        this.onClickButton(false);
      }
    },
  },

  methods: {
    fltDataCondition(i, l) {
      if (l > 0) {
        this.nofltData = false;
        this.$emit("fltData", true);
        this.$emit("categoryId", i);
      } else {
        this.nofltData = true;
        this.$emit("fltData", false);
        // let filterproductList = data;
        // this.$emit("filterproductList", filterproductList);
      }
      console.log(l);
    },

    // Child category click
    handleClick2(ids) {
      // alert(ids);
      this.childactiveId = ids;
      let last_page = this.store.state.productMeta.last_page;
      if (this.spage <= last_page) {
        this.spage = 1;
        this.$emit("pageResetcat", this.spage);

        this.store.state.AppData = [];

        var self = this;

        this.store.methods.getData(null, this.spage, ids).then(function (data) {
          self.fltDataCondition(ids, data.length);
        });
      } else {
        this.spage = last_page;
      }
    },

    // Category click
    handleClick(childCategory, ids) {
      let last_page = this.store.state.productMeta.last_page;
      console.log("spage", this.spage, "lastPage", last_page);
      if (this.spage <= last_page) {
        console.log("clicked");
        this.spage = 1;
        this.$emit("pageResetcat", this.spage);
        this.$emit("categoryId", ids);

        this.store.state.AppData = [];

        var self = this;

        this.store.methods.getData(null, this.spage, ids).then(function (data) {
          self.fltDataCondition(ids, data.length);
        });

        if (typeof childCategory !== "undefined") {
          this.childCategoryArray = [];
          childCategory.forEach((element) => {
            this.childCategoryArray.push(element);
          });
          this.activeId = ids;
          this.$emit("allbutton", this.activeId);
          let arr1 = this.childCategoryArray;
          this.childCategories2 = arr1.unshift({ name: "All", id: ids });
          this.childCategory = true;
          this.onClickButton(false);
          this.childactiveId = ids; //To highlight the child button default
        } else {
          this.activeId = ids;
          this.childCategory = false;
          this.onClickButton(true);
        }
      } else {
        this.spage = last_page;
      }
    },

    bannerRedirect(url) {
      window.location.href = url;
    },

    onClickButton(ve) {
      this.$emit("clicked", ve);
    },
  },
};
</script>

<style scoped>
.product-main-banner {
  /* position: fixed;
  top: 105px; */
  width: 100%;
  max-width: 500px;
  margin: 45px auto 0;
}
.product-main-banner img {
  width: 100%;
}
.item-scroller-nav {
  position: fixed;
  background: #ffffff;
  top: 60px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  z-index: 3;
}
.item-scroller-nav .main-menu {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
}

.item-scroller-nav .main-menu .swiper-slide a {
  padding: 13px 0;
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  cursor: pointer;
  white-space: nowrap;
}
.item-scroller-nav .main-menu .swiper-slide a.active {
  border-bottom: solid 2px #090909;
  font-weight: bold;
  color: #090909;
}
.item-scroller-nav .sub-menu {
  background: #f7f7f7;
}
.item-scroller-nav .sub-menu .swiper-slide a.active {
  border-bottom: solid 2px #090909;
  font-weight: bold;
  color: #090909;
}
.swiper-slide {
  width: auto;
}
.mainslide-banner-wrap {
  max-height: 380px;
  height: 380px;
  background: #c4c4c4;
  overflow: hidden;
}
.mainslide-banner-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
