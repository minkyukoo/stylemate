<template>
  <div class="item-scroller-nav">
    <ion-slides :options="slideOpts">
      <ion-slide>
        <ul class="main-menu">
          <li v-for="category in allCategories" :key="category.name">
            <a @click="handleClick(category.childCategory)">{{ category.name }}</a>
          </li>
        </ul>
      </ion-slide>
    </ion-slides>
    <ion-slides :options="slideOpts" v-if="childCategory">
      <ion-slide>
        <ul class="main-menu">
          <li v-for="childCategory in childCategoryArray" :key="childCategory.name">
            <a @click="handleClick(category)">{{ childCategory.name }}</a>
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
import ItemService from "@/services/ItemService";
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
          title: "all",
          value: "all",
          name: "all",
        },
        {
          title: "top",
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
      allCategories: null,
      allCategories2: null,
      childCategoryArray: [],
      childCategory: false,
      categorylist: null,
    };
  },

  created(){
    this.itemServices = new ItemService();
    this.itemServices.getProductCategories().then((data) => {
      console.log('data:',data);
      let arr = data;
      this.allCategories2 = arr.unshift({name: 'All'});
      this.allCategories = data;
      console.log(this.allCategories);
    });
  },
  mounted() {

  },
  methods: {
    handleClick(childCategory) {
      if (typeof childCategory !== "undefined") {
        this.childCategoryArray = [];
        childCategory.forEach(element => {
          this.childCategoryArray.push(element);
        });
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