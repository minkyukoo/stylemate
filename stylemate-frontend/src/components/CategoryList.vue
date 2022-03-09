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
    <img src="@/assets/images/product-banner.jpg" />
  </div>

  <!-- <div class="product-main-banner" v-if="!childCategory" v-show="!listproduct">
    <img src="@/assets/images/product-banner.jpg" />
  </div>-->
</template>

<script>
import ItemService from "@/services/ItemService";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/scrollbar";
export default {
  name: "CategoryList",
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

      childCategories2: null,
      activeId: -1,
      childactiveId: -1,
    };
  },

  created() {
    this.itemServices = new ItemService();
    this.itemServices.getProductCategories().then((data) => {
      let arr = data;
      this.allCategories2 = arr.unshift({ name: "All", id: "All" });
      this.allCategories = data;
      this.activeId = "All"; //To highlight the button default
    });
  },
  methods: {
    // Child category click
    handleClick2(ids) {
      // alert(ids);
      this.itemServices.getFilterProduct(ids).then((data) => {
        // console.log("filterproductList", data);
        this.childactiveId = ids; //To activate the All button

        if (data.length == 0) {
          // alert('nodata')
          this.nofltData = true;
          this.$emit("fltData", false);
        } else {
          this.nofltData = false;
          this.$emit("fltData", true);

          let filterproductList = data;
          this.$emit("filterproductList", filterproductList);
        }
        // else{
        //   let allData = data;
        //   console.log("allData",allData);
        //   this.$emit("allData",allData);
        // }
      });
    },

    // Category click
    handleClick(childCategory, ids) {
      // alert(ids);
      this.itemServices.getFilterProduct(ids).then((data) => {
        // console.log("category-filterproductList", data);
        this.childactiveId = ids; //To activate the All button
        if (data.length == 0) {
          this.nofltData = true;
          this.$emit("fltData", false);
        } else {
          this.nofltData = false;
          let filterproductList = data;
          console.log('filterproductList',filterproductList);
          this.$emit("fltData", true);
          this.$emit("filterproductList", filterproductList);
        }
      });

      if (typeof childCategory !== "undefined") {
        this.childCategoryArray = [];

        childCategory.forEach((element) => {
          this.childCategoryArray.push(element);
        });

        this.activeId = ids;
        // console.log("this.activeId", this.activeId);
        this.$emit("allbutton", this.activeId);

        let arr1 = this.childCategoryArray;
        // console.log("arr1", arr1);
        this.childCategories2 = arr1.unshift({ name: "All", id: ids });
        // console.log("this.childCategories2", this.childCategories2);

        // alert("child cat id", ids);
        this.childCategory = true;
        this.onClickButton(false);
        // console.log("this", this);

        this.childactiveId = "Allchild"; //To highlight the child button default
      } else {
        // alert(ids);
        this.childCategory = false;
        this.onClickButton(true);
      }
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
  top: 61px;
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
</style>
