<template>
  <div class="item-scroller-nav">
    <ion-slides :options="slideOpts">
      <ion-slide>
        <ul class="main-menu">
          <li v-for="category in allCategories" :key="category.name">
            <a @click="handleClick(category.childCategory, category.id)">{{ category.name }}</a>
          </li>
        </ul>
      </ion-slide>
    </ion-slides>

    <ion-slides class="childCategory-slide" :options="slideOpts" v-if="childCategory">
      <ion-slide>
        <ul class="main-menu sub-menu">
          <li v-for="childCategory in childCategoryArray" :key="childCategory.name">
            <a @click="handleClick2(childCategory.id)">{{ childCategory.name }}</a>
          </li>
        </ul>
      </ion-slide>
    </ion-slides>
  </div>

  <div class="product-main-banner" v-if="!childCategory" v-show="!nofltData" >
    <img src="@/assets/images/product-banner.jpg" />
  </div>

  <div class="product-main-banner" v-if="!childCategory" v-show="!listproduct" >
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
      allCategories: null,
      allCategories2: null,
      childCategoryArray: [],
      childCategory: false,
      categorylist: null,
      nofltData: false,
      filterproductList: null,

      childCategories2:null,
    };
  },

  created() {
    this.itemServices = new ItemService();
    this.itemServices.getProductCategories().then((data) => {
      console.log('data:', data);
      let arr = data;
      this.allCategories2 = arr.unshift({ name: 'All', id:"All" });
      this.allCategories = data;
      console.log("this.allCategories",this.allCategories);
    });
  },
  mounted() {

  },
  methods: {
    handleClick2(ids) {
      alert(ids);
      this.itemServices.getFilterProduct(ids).then((data) => {
        console.log("filterproductList", data);
          
        if (data.length == 0) {
          alert('nodata')
          this.nofltData = true;
          this.$emit('fltData', false);

        } else {
          this.nofltData = false;
          this.$emit('fltData', true);

          let filterproductList = data;
          this.$emit("filterproductList",filterproductList);
        }
      });
    },

    handleClick(childCategory, ids) {
      if (typeof childCategory !== "undefined") {
        this.childCategoryArray = [];

        childCategory.forEach(element => {
          this.childCategoryArray.push(element);
        });

        let arr1 = this.childCategoryArray;
        this.childCategories2 = arr1.unshift({ name: 'All', id:"All" });

        alert(ids);
        this.childCategory = true;
        this.onClickButton(false);
      } else {
        alert(ids);
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
.item-scroller-nav ul.sub-menu{
  background: #F7F7F7;
}
</style>