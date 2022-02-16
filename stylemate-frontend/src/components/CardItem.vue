<template>
  <ion-infinite-scroll threshold="50px" id="infinite-scroll">
    <ion-infinite-scroll-content>
      <div class="nodata" v-if="!isFltData">카테고리에 해당하는 제품이 없습니다</div>
      <div v-else :class="`item-wrapper ${!isBanner ? 'withoutbanner' : ''}`">
        <div class="top-section">
          <div class="left-section">
            <ion-item>
              <ion-select interface="popover" @click = "orderPopularity()" placeholder="인기순">
                <ion-select-option value="f">최신순</ion-select-option>
                <ion-select-option value="m">인기순</ion-select-option>
                <ion-select-option value="v">마감임박순</ion-select-option>
              </ion-select>
            </ion-item>
          </div>
          <div class="right-section">
            <button @click="layout = 'list'" :class="{ active: layout === 'grid' }">
              <img src="@/assets/icons/list-view.svg" />
            </button>
            <button @click="layout = 'grid'" :class="{ active: layout === 'list' }">
              <img src="@/assets/icons/grid-view.svg" />
            </button>
          </div>
        </div>
        <ul v-if="layout === 'grid'" class="product-list grid-view">
          <!-- {{item_list}} -->
          <li
            v-for="(product, index) in item_list"
            :key="index"
            class="product-list-item active_font"
            @click="$router.push({ name: 'ItemDetails' })"
          >
            <figure>
              <img :src="product.imageThumbnailPath" />
              <div class="top-float-div">
                <div class="social-icon">
                  <img src="@/assets/icons/instagram.svg" />
                </div>
                <div class="favorite">
                  <img src="@/assets/icons/heart-outline.svg" />
                </div>
              </div>
            </figure>
            <!-- <h3>{{ product.title }}</h3> -->
            <p>{{ product.description }}</p>
            <!-- <span>{{ product.hashtags }}</span> -->
            <div class="hashWrap">
              <span v-for="(hash, index) in product.tag" :key="index">
                {{
                  hash.tag
                }}
              </span>
            </div>
          </li>
        </ul>

        <ul v-if="layout === 'list'" class="product-list list-view">
          <li v-for="(product, index) in item_list" :key="index" class="product-list-item">
            <figure>
              <img :src="product.imageThumbnailPath" />
              <div class="top-float-div">
                <div class="social-icon">
                  <img src="@/assets/icons/instagram.svg" />
                </div>
              </div>
            </figure>
            <div class="desc-box">
              <div class="text-box">
                <h3></h3>
                <div class="favorite">
                  <img src="@/assets/icons/heart-outline.svg" />
                </div>
              </div>
              <p>{{ product.description }}</p>
              <span>{{ product.hashtags }}</span>
              <div class="hashWrap">
                <span v-for="(hash, index) in product.tag" :key="index">
                  {{
                    hash.tag
                  }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</template>

<script>

import {
  IonItem,
  IonSelect,
  IonSelectOption,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/vue";
import { defineComponent,inject, onMounted, } from "vue";
import ItemService from "@/services/ItemService";

export default defineComponent({
  name: "CardItem",
  props: {
    isBanner: Boolean,
    isFltData: Boolean,
    isproductfilter: null,
  },
  components: {
    IonItem,
    IonSelect,
    IonSelectOption,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  },
  setup() {
    const slideOpts = {
      initialSlide: 1,
      speed: 400,
      pager: false,
    };
    const store = inject("store");

    const customPopoverOptions = {
      header: "Hair Color",
      subHeader: "Select your hair color",
      message: "Only select your dominant hair color",
    };

    onMounted(() => {
      store.methods.getData();
      console.log('store.state.AppData', store.state.AppData);
    });

    return { slideOpts, customPopoverOptions, store };
  },

  data() {
    return {
      layout: "grid",
      categories_info: [],
      item_list: [],
      product_details: [],
      banner: [],
      filtervalue: [],
    };
  },

  created() {
    this.itemService = new ItemService();

     this.itemService.getProductLsit().then((data) => {
      console.log("ItemList", data);
      alert("updated filterdata")
      this.item_list = data;
    })
  },

  mounted() {
    console.log("from carditem this.isFltData", this.isFltData);

    console.log("from carditem this.isproductfilter", this.isproductfilter);
    // Slide title
    this.itemService.getProductCategories().then((data) => {
      console.log("categories_info", data);
      this.categories_info = data;
    });
    // Product list
    // this.itemService.getProductLsit().then((data) => {
    //   console.log("ItemList", data);
    //   alert("updated filterdata")
    //   this.item_list = data;
    // })
  },
  methods: {
    AllValue(){
        this.itemService.getProductLsit().then((data) => {
        console.log("ItemList", data);
        this.item_list = data;
        console.log("myvalues", this.item_list);
      })
    },

    // orderPopularity(){
    //   this.itemService.getProductLsit().then((data) => {
    //     console.log("filtervalue", data);
    //     this.filtervalue = data;
    //     console.log("filtervalue",this.filtervalue);
    //   })
    // },
  },

  updated() {
    console.log("from carditem this.isFltData", this.isFltData);

    console.log("from carditem this.isproductfilter", this.isproductfilter);
    this.itemService.getProductLsit().then((data) => {
      console.log("ItemList", data);
      
      if (this.isproductfilter) {
        alert("updated filterdata")
        this.item_list = this.isproductfilter;
        console.log("this.isproductfilter", this.item_list);
      } 
      else if(!this.isFltData){
        alert("all values");
        // this.item_list = data;
        this.AllValue();
        // console.log("Success", this.item_list);
      }
      else {
        alert("updated all filterdata")
        this.item_list = data;
      }
    })
  },

  

});
</script>

<style scoped>
.top-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-native {
  padding-inline-start: 0 !important;
  padding-left: 0;
}

.nodata {
  justify-content: center;
  min-height: 60vh;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #c4c4c4;
}

.item-wrapper {
  padding: 20px 20px 60px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  top: 180px;
  /* background-image: linear-gradient(
    148.66deg,
    rgba(241, 241, 241, 0.5) 18.92%,
    rgba(255, 255, 255, 0.1) 80.41%
  ); */
  background: #ffffff;
  transition: all 0.5s ease-in-out;
  /* backdrop-filter: blur(30px);  */
}
.item-wrapper.withoutbanner {
  top: 90px;
  transition: all 0.5s ease-in-out;
}
.item-wrapper .product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
}
.active_font{
  font-weight: bold;
}
.item-wrapper .grid-view .product-list-item {
  width: 50%;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 4px;
  margin-bottom: 24px;
  text-align: left;
}
.item-wrapper .product-list .product-list-item figure {
  position: relative;
  margin-bottom: 12px;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  height: 156px;
}
.item-wrapper .product-list .product-list-item figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item-wrapper .product-list .product-list-item h3 {
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
}
.item-wrapper .product-list .product-list-item p {
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-wrapper .product-list .product-list-item span {
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
}
.swiper-pagination.swiper-pagination-bullets {
  display: none !important;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  display: none !important;
}
.grid-view .top-float-div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  padding: 7px;
}
.grid-view .top-float-div img {
  cursor: pointer;
}
.list-view .product-list-item {
  display: flex;
  align-items: center;
  margin-top: 12px;
  width: 100%;
}
.list-view .product-list-item:first-child {
  margin-top: 0;
}
.list-view .product-list-item figure {
  position: relative;
  width: 120px !important;
  height: 120px !important;
}
.list-view .product-list-item .social-icon {
  position: absolute;
  top: 0;
  padding: 7px;
}
.list-view .product-list-item .social-icon img {
  cursor: pointer;
}
.desc-box {
  padding-left: 12px;
  text-align: left;
  width: calc(100% - 120px);
}
.desc-box .text-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-wrapper .list-view .product-list-item h3 {
  margin-bottom: 16px;
}
.right-section button {
  display: none;
}
.right-section button.active {
  display: block;
}
</style>