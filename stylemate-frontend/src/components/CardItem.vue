<template>
  <div>
    {{ item_list }}
    <div class="nodata" v-if="!isFltData">카테고리에 해당하는 제품이 없습니다</div>
    <div v-else :class="`item-wrapper ${!isBanner ? 'withoutbanner' : ''}`">
      <div class="fixed-container">
        <div class="top-section">
          <div class="left-section">
            <!-- <ion-item>
            <ion-select interface="popover" @click="orderPopularity()" placeholder="인기순">
              <ion-select-option value="f">최신순</ion-select-option>
              <ion-select-option value="m">인기순</ion-select-option>
              <ion-select-option value="v">마감임박순</ion-select-option>
            </ion-select>
            </ion-item>-->
            <div class="selectWrap">
              <vue-select :placeholder="인기순" :options="books" label="title"></vue-select>
            </div>
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
            v-for="(product, index) in store.state.AppData"
            :key="index"
            class="product-list-item"
          >
            <div class="top-float-div">
              <div class="social-icon">
                <img src="@/assets/icons/instagram.svg" />
              </div>
              <div class="favorite" @click="likeProduct">
                <img src="@/assets/icons/heart-outline.svg" />
              </div>
            </div>
            <figure
              @click="
                $router.push({
                  name: 'ItemDetails',
                  params: { id: product.id },
                })
              "
            >
              <img :src="product.imageThumbnailPath" />
            </figure>
            <div
              class="details-wrap"
              @click="
                $router.push({
                  name: 'ItemDetails',
                  params: { id: product.id },
                })
              "
            >
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="hashWrap">
                <span v-for="(hash, index) in product.tag" :key="index">{{ "#" + hash.tag }}</span>
              </div>
            </div>
          </li>
        </ul>

        <ul v-if="layout === 'list'" class="product-list list-view">
          <li
            v-for="(product, index) in store.state.AppData"
            :key="index"
            class="product-list-item"
          >
            <figure
              @click="
                $router.push({
                  name: 'ItemDetails',
                  params: { id: product.id },
                })
              "
            >
              <img :src="product.imageThumbnailPath" />
              <div class="top-float-div">
                <div class="social-icon">
                  <img src="@/assets/icons/instagram.svg" />
                </div>
              </div>
            </figure>
            <div class="favorite">
              <img src="@/assets/icons/heart-outline.svg" />
            </div>
            <div
              class="desc-box"
              @click="
                $router.push({
                  name: 'ItemDetails',
                  params: { id: product.id },
                })
              "
            >
              <div class="text-box">
                <h3>{{ product.name }}</h3>
              </div>
              <p>{{ product.description }}</p>
              <span>{{ product.hashtags }}</span>
              <div class="hashWrap">
                <span v-for="(hash, index) in product.tag" :key="index">{{ "#" + hash.tag }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, onMounted } from "vue";
import VueNextSelect from "vue-next-select";
import ItemService from "@/services/ItemService";

export default defineComponent({
  name: "CardItem",
  props: {
    isBanner: Boolean,
    isFltData: Boolean,
    isproductfilter: null,
    isallData: null,
  },
  components: {
    "vue-select": VueNextSelect,
  },
  setup() {
    const store = inject("store");

    const customPopoverOptions = {
      header: "Hair Color",
      subHeader: "Select your hair color",
      message: "Only select your dominant hair color",
    };

    onMounted(() => {
      store.methods.getData();
    });

    return { store, customPopoverOptions };
  },
  data() {
    return {
      layout: "grid",
      categories_info: [],
      item_list: null,
      allData: false,
      product_details: [],
      banner: [],
      filtervalue: [],
      books: [
         "최신순",
         "인기순",
         "마감임박순"
      ]
    };
  },
  created() {
    this.itemService = new ItemService();
  },

  mounted() {
    this.itemService.getProductCategories().then((data) => {
      this.categories_info = data;
    });
  },
  methods: {
    likeProduct() {
      console.log('likeProduct');
    }
  },
  async updated() {
    if (this.isproductfilter) {
      this.store.state.AppData = this.isproductfilter;
    }
  },
});
</script>

<style scoped>
.top-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
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
  padding: 20px 20px 130px;
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
.item-wrapper .grid-view .product-list-item {
  width: 50%;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 4px;
  margin-bottom: 24px;
  text-align: left;
  position: relative;
}
.item-wrapper .product-list .product-list-item figure {
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

.grid-view .top-float-div .favorite {
  margin-right: 12px;
  cursor: pointer;
}
.list-view .product-list-item {
  display: flex;
  align-items: center;
  margin-top: 12px;
  width: 100%;
  position: relative;
}
.list-view .product-list-item:first-child {
  margin-top: 0;
}
.list-view .product-list-item figure {
  position: relative;
  width: 120px !important;
  height: 120px !important;
  margin-bottom: 0 !important;
}
.list-view .product-list-item .social-icon {
  position: absolute;
  top: 0;
  padding: 7px;
}
.list-view .product-list-item .favorite {
  position: absolute;
  right: 0;
  top: 22px;
  margin-right: 0;
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
  margin-bottom: 16px;
}
.right-section button {
  display: none;
}
.right-section button.active {
  display: block;
}
</style>