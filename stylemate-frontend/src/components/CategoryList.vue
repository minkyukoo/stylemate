<template>
  <div class="item-scroller-nav">
    <ion-slides :options="slideOpts">
      <ion-slide>
        <ul class="main-menu">
          <li v-for="slide in slides" :key="slide">
            <a @click="handleClick(slide.child)">{{ slide.title }}</a>
          </li>
        </ul>
      </ion-slide>
    </ion-slides>
    <ion-slides :options="slideOpts" v-if="childCategory">
      <ion-slide>
        <ul class="main-menu">
          <li v-for="child in slides.child" :key="child">
            <a @click="handleClick(slide, index)">{{ child.name }}</a>
          </li>
        </ul>
      </ion-slide>
    </ion-slides>
  </div>

  <div class="product-main-banner" v-if="!childCategory">
    <img src="@/assets/images/product-banner.jpg" />
  </div>
</template>

<script>
export default {
  name: "CategoryList",

  setup() {
    const slideOpts = {
      initialSlide: 1,
      speed: 400,
      pager: false,
    };
    return { slideOpts };
  },

  data() {
    return {
      slides: [
        {
          title: "전체",
          value: "all",
          name: "all",
        },
        {
          title: "상의",
          value: "top",
          name: "top",
          child: [{ name: "top 1" }, { name: "top 2" }, { name: "top 3" }],
        },
        {
          title: "아우터",
          value: "outer",
          name: "outer",
        },
        {
          title: "바지",
          value: "pants",
          name: "pants",
        },
        {
          title: "원피스",
          value: "onepiece",
          name: "onepiece",
          child: [{ name: "onepiece 1" }, { name: "onepiece 2" }, { name: "onepiece 3" }],
        },
        {
          title: "스커트",
          value: "skirt",
          name: "skirt",
        }
      ],
      childCategoryArray: [],
      childCategory: false
    };
  },

  methods: {
    handleClick(a) {
    //   console.log(this.slides);
      if (typeof a !== "undefined") {
        console.log(a);
      }

      if (typeof a !== "undefined") {
        this.childCategory = true;
        this.onClickButton(false);
      } else {
        this.childCategory = false;
        this.onClickButton(true);
      }
    },

    onClickButton(ve) {
      // this.$emit('clicked', false)
      this.$emit("clicked", ve);
    },
  },
};
</script>

<style scoped>
.product-main-banner {
  position: fixed;
  top: 105px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
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
}
.item-scroller-nav ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.item-scroller-nav ul li a {
  padding: 13px 0;
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  cursor: pointer;
}
.item-scroller-nav ul li a.active {
  border-bottom: solid 2px #090909;
  font-weight: bold;
  color: #090909;
}
</style>