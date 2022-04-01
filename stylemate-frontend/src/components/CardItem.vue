<template>
  <div class="wrapSec2">
    {{ item_list }}
    <div class="nodata" v-if="!isFltData">카테고리에 해당하는 제품이 없습니다</div>
    <div v-else :class="`item-wrapper ${!isBanner ? 'withoutbanner' : ''}`" @scroll="onScroll2">
      <div class="fixed-container">
        <div class="top-section">
          <!-- {{ loadMore }} -->
          <div class="left-section">
            <div class="selectWrap newCustomSelect">
              <!-- <vue-select
                :placeholder="'인기순'"
                v-model="bookOption"
                :options="books"
                label="title"
                :close-on-select="true"
              ></vue-select> -->
              <h4 :class="{ active: isActive }" @click="showDropdown">
                인기순
              </h4>
              <ul class="customDropList" :class="{ active: isActive }">
                <li
                  v-for="(book, i) in books"
                  :key="i"
                  @click="showDropdown(i, book)"
                  :class="{ active: booksDropdownIndex === i }"
                >
                  {{ book }}
                </li>
              </ul>
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
            <!-- {{product.campaign.map(item => item.channelType)}} -->
            <div class="top-float-div">
              <div class="social-icon">
                <img v-if="isChannelIg(product.campaign)" src="@/assets/icons/instagram.svg" />
              </div>
              <div class="favorite" @click="likeProduct(index, product.id)">
                <!-- <img src="@/assets/icons/heart-outline.svg" /> -->
                <img v-if="product.isInfluenceLike" src="@/assets/icons/heart-filled.svg" />
                <img v-else src="@/assets/icons/heart-outline.svg" />
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
              <h3>{{ product.brand.korName }}</h3>
              <p>{{ product.name }}</p>
              <div class="hashWrap">
                <span v-for="(hash, index) in product.tag" :key="index">
                  {{
                    "#" + hash.tag
                  }}
                </span>
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

            <div class="favorite" @click="likeProduct(index, product.id)">
              <img v-if="product.isInfluenceLike" src="@/assets/icons/heart-filled.svg" />
              <img v-else src="@/assets/icons/heart-outline.svg" />
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
                <h3>{{ product.brand.korName }}</h3>
              </div>
              <p>{{ product.name }}</p>
              <!-- <span>{{ product.hashtags }}</span> -->
              <div class="hashWrap">
                <span v-for="(hash, index) in product.tag" :key="index">
                  {{
                    "#" + hash.tag
                  }}
                </span>
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
import Toast from "@/alert/alert";
// import VueNextSelect from "vue-next-select";
import ItemService from "@/services/ItemService";
import TokenService from "@/services/TokenService";
import UserInfoService from "@/services/UserInfoService";

export default defineComponent({
  name: "CardItem",
  props: {
    isBanner: { type: Boolean, default: true },
    isFltData: { type: Boolean, default: true },
    isproductfilter: null,
    page: { type: Number },
    categoryId: { type: Number },
  },
  components: {
    // "vue-select": VueNextSelect,
  },

  setup() {
    const store = inject("store");

    const customPopoverOptions = {
      header: "Hair Color",
      subHeader: "Select your hair color",
      message: "Only select your dominant hair color",
    };

    onMounted(() => {
      store.state.AppData = [];
      store.methods.getData(null, 1, null);
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
      books: ["최신순", "인기순"],
      camp: [],
      products: [],
      bookOption: null,
      spage: this.$props.page,
      scategoryId: this.$props.categoryId,
      isActive: false,
      booksDropdownIndex: null,
    };
  },
  created() {
    this.itemService = new ItemService();
    this.tokenService = new TokenService();
    this.userInfoService = new UserInfoService();
  },
  mounted() {
    // Attach event listener to the root vue element
    // this.$el.addEventListener("click", this.onClick);
    // Or if you want to affect everything
    // document.addEventListener('click', this.onClick)

    this.itemService.getProductCategories().then((data) => {
      this.categories_info = data;
    });
  },
  // unmounted() {
  //   this.$el.removeEventListener("click", this.onClick);
  // document.removeEventListener('click', this.onClick)
  // },
  watch: {
    bookOption: function (type) {
      let last_page = this.store.state.productMeta.last_page;
      // console.log("last_page", last_page);
      if (this.spage < last_page) {
        // this.spage = this.spage + 1;
        // console.log('page from carditem:-:',this.page);
        // console.log('page from incerement:', this.spage);
        if (type == "최신순") {
          this.spage = 1;
          this.$emit("bookOption", "latest");
          this.$emit("pageReset", this.spage);
          // console.log("page from carditem latest:-:", this.page);
          this.store.state.AppData = [];
          this.store.methods.getData("latest", this.spage, this.scategoryId);
          // this.itemService.getProductList("latest", this.spage).then((data) => {
          //   this.store.state.AppData = data;
          //   // this.store.state.AppData.push(...data);
          // });
        } else if (type == "인기순") {
          this.spage = 1;
          // console.log("page from carditem popular:-:", this.page);
          this.$emit("bookOption", "popular");
          this.$emit("pageReset", this.spage);
          this.store.state.AppData = [];
          this.store.methods.getData("popular", this.spage, this.scategoryId);
          // this.itemService.getProductList("popular", this.spage).then((data) => {
          //   this.store.state.AppData = data;
          //   // this.store.state.AppData.push(...data);
          // });
        }
      } else {
        this.spage = last_page;
      }
    },
  },
  methods: {
    isChannelIg(pdata) {
      let isProductCamp = false;
      if (!pdata) return isProductCamp;
      pdata.forEach((item) => {
        if (
          item.processStatus === "progress" &&
          item.channelType === "instagram"
        ) {
          isProductCamp = true;
          return isProductCamp;
        }
      });
      return isProductCamp;
    },
    // isLogedIn
    async isLogedIn() {
      return await this.tokenService.isAuth();
    },
    //isUserid
    async isUserid() {
      let isLogedIn = await this.tokenService.isAuth();
      if (isLogedIn) {
        return await this.userInfoService.getUserInfo().then((res) => {
          return res.data.uid;
        });
      }
    },
    async likeProduct(index, productId) {
      // condition 1 login check
      let isLogedIn = await this.isLogedIn();
      if (!isLogedIn) {
        Toast.fire({ title: "회원 전용 서비스입니다. 로그인하세요." });
      } else {
        let uid;
        await this.isUserid().then((res) => {
          uid = res;
          if (this.store.state.AppData[index].isInfluenceLike) {
            this.store.state.AppData[index].isInfluenceLike = false;
            this.itemService
              .influencedislikes(uid, "product", productId)
              // eslint-disable-next-line no-unused-vars
              .then((res) => {
                // console.log(res);
              });
          } else {
            this.store.state.AppData[index].isInfluenceLike = true;
            this.itemService
              .influencelikes(uid, "product", productId)
              // eslint-disable-next-line no-unused-vars
              .then((res) => {
                if (this.bookOption == "최신순") {
                  this.itemService.getProductList("latest", 1).then((data) => {
                    this.store.state.AppData = data;
                  });
                } else if (this.bookOption == "인기순") {
                  this.itemService.getProductList("popular", 1).then((data) => {
                    this.store.state.AppData = data;
                  });
                }
              });
          }

        });
      }
      // console.log("likeProduct");
    },
    showDropdown(i, v) {
      this.isActive = !this.isActive;
      this.booksDropdownIndex = i;
      this.bookOption = v;
    },

    // onClick() {
    //   if (this.isActive) this.isActive = !this.isActive;
    // },
  },
  async updated() {
    // if (this.isproductfilter) {
    //   // alert("isproductfilter");
    //   console.log('isproductfilter:-', this.isproductfilter);
    //   this.store.state.AppData = [];
    //   this.store.state.AppData = this.isproductfilter;
    //   // this.store.state.AppData.push(this.isproductfilter);
    //   console.log('this.store.state.AppData:-', this.store.state.AppData);
    // }
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
  padding: 20px 20px 160px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  margin-top: -20px;
  /* top: 180px; */
  /* background: #ffffff; */
  transition: all 0.5s ease-in-out;
  background: linear-gradient(
    93.21deg,
    rgba(241, 241, 241, 0.5) 0.78%,
    rgba(241, 241, 241, 0.1) 100.78%
  );
  backdrop-filter: blur(30px);
  z-index: 2;
}
.item-wrapper.withoutbanner {
  top: 90px;
  transition: all 0.5s ease-in-out;
  margin-top: 0 !important;
  border-radius: 0;
  height: 100%;
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
  cursor: pointer;
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
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
.item-wrapper .product-list .hashWrap {
  display: flex;
  flex-wrap: wrap;
}
.item-wrapper .product-list .product-list-item span {
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
  margin-left: 4px;
}
.item-wrapper .product-list .product-list-item span:first-child {
  margin-left: 0;
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
  padding: 0 4px;
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
  right: 4px;
  top: 24px;
  margin-right: 0;
  cursor: pointer;
}
.product-list-item .favorite img {
  width: 20px;
  height: 20px;
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
.details-wrap {
  cursor: pointer;
}
/* .selectWrap {
  max-width: 100px;
}
.selectWrap .vue-select {
  width: 100%;
} */
.list-view .product-list-item .desc-box p {
  margin-bottom: 8px;
}
.wrapSec2 {
  height: 100%;
}
</style>
