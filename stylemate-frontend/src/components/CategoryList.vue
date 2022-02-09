<template>
  <div class="item-scroller-nav">
    <ion-slides :options="slideOpts">
      <ion-slide>
        <ul class="main-menu">
          <li v-for="slide in slides" :key="slide">
            <a @click="handleClick(slide.child)">{{ slide.title }}</a>
            <!-- <ul class="sub-menu" v-if="slide.child && slide.child.length > 0">
                <li>
                    <a href="#">{{child.title}}</a>
                </li>
            </ul>-->
          </li>
        </ul>
      </ion-slide>
    </ion-slides>
    <ion-slides :options="slideOpts" v-if="childCategory">
      <ion-slide>
        <ul class="main-menu">
          <li v-for="slide in childCategoryArray" :key="slide">
            <a @click="handleClick(slide, index)">{{ slide.title }}</a>
            <!-- <ul class="sub-menu" v-if="slide.child && slide.child.length > 0">
                <li>
                    <a href="#">{{child.title}}</a>
                </li>
            </ul>-->
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
          child: [{ title: "top 1" }, { title: "top 2" }, { title: "top 3" }],
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
        },
        {
          title: "스커트",
          value: "skirt",
          name: "skirt",
        },
      ],
      childCategoryArray: [],
      childCategory: false
    };
  },

  methods: {
    // toggleMenu(slide){
    //     console.log(slide)

    // }
    handleClick(a) {
      // console.log(a, a["Proxy"], b);

      console.log(a);



      if(typeof a !== 'undefined') {
        var arr = Object.keys(a)
        
        console.log(arr);
        this.childCategoryArray.push(arr);
        console.log(this.childCategoryArray);
        this.childCategory = true;
        this.onClickButton(false);
      } else {
        this.childCategory = false;
        this.onClickButton(true);
      }
    },

    onClickButton(ve) {
      // this.$emit('clicked', false)
      this.$emit('clicked', ve)
    }
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