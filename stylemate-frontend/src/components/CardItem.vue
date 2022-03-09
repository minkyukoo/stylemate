<template>
  <div>
    {{ item_list }}
    <div class="nodata" v-if="!isFltData">
      카테고리에 해당하는 제품이 없습니다
    </div>
    <div v-else :class="`item-wrapper ${!isBanner ? 'withoutbanner' : ''}`">
      <div class="fixed-container">
        <div class="top-section">
          <div class="left-section">
            <div class="selectWrap">
              <vue-select
                :placeholder="'인기순'"
                v-model="bookOption"
                :options="books"
                label="title"
                :close-on-select="true"
              ></vue-select>
            </div>
          </div>
          <div class="right-section">
            <button
              @click="layout = 'list'"
              :class="{ active: layout === 'grid' }"
            >
              <img src="@/assets/icons/list-view.svg" />
            </button>
            <button
              @click="layout = 'grid'"
              :class="{ active: layout === 'list' }"
            >
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
                <img
                  v-if="isChannelIg(product.campaign)"
                  src="@/assets/icons/instagram.svg"
                />
              </div>
              <div class="favorite" @click="likeProduct(product.id)">
                <!-- <img src="@/assets/icons/heart-outline.svg" /> -->
                <img
                  v-if="product.isInfluenceLike"
                  src="@/assets/icons/heart-filled.svg"
                />
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
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="hashWrap">
                <span v-for="(hash, index) in product.tag" :key="index">
                  {{ "#" + hash.tag }}
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
            <div class="favorite" @click="likeProduct(product.id)">
              <img
                v-if="product.isInfluenceLike"
                src="@/assets/icons/heart-filled.svg"
              />
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
                <h3>{{ product.name }}</h3>
              </div>
              <p>{{ product.description }}</p>
              <span>{{ product.hashtags }}</span>
              <div class="hashWrap">
                <span v-for="(hash, index) in product.tag" :key="index">
                  {{ "#" + hash.tag }}
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
import { defineComponent, onMounted, inject } from "vue";
import Toast from "@/alert/alert";
import VueNextSelect from "vue-next-select";
import ItemService from "@/services/ItemService";
import TokenService from "@/services/TokenService";
import UserInfoService from "@/services/UserInfoService";

export default defineComponent({
  name: "CardItem",
  props: {
    isBanner: { type: Boolean, default: true },
    isFltData: { type: Boolean, default: true },
    isproductfilter: null,
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
    return { customPopoverOptions, store };
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
      books: ["최신순", "마감임박순"],
      camp: [],
      products: [],
      bookOption: null,
    };
  },
  created() {
    this.itemService = new ItemService();
    this.tokenService = new TokenService();
    this.userInfoService = new UserInfoService();
  },

  mounted() {
    this.itemService.getProductCategories().then((data) => {
      this.categories_info = data;
    });
    // this.getData();
  },
  // watch: {
  //   bookOption: function (type) {
  //     if (type == "최신순") {
  //       this.itemService.getProductList("latest").then((data) => {
  //         this.products = data;
  //       });
  //     } else if (type == "마감임박순") {
  //       this.itemService.getProductList("popular").then((data) => {
  //         this.products = data;
  //       });
  //     }
  //   },
  // },
  methods: {
    // getData() {
    //   this.itemService.getProductList().then((data) => {
    //     this.products = data;
    //   });
    // },

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
    async likeProduct(productId) {
      // condition 1 login check
      let isLogedIn = await this.isLogedIn();
      if (!isLogedIn) {
        Toast.fire({ title: "회원 전용 서비스입니다. 로그인하세요." });
      } else {
        let uid;
        await this.isUserid().then((res) => {
          uid = res;
          this.itemService
            .influencelikes(uid, "product", productId)
            .then((res) => {
              // console.log(res.response.data.error);
              // console.log(res.response);
              this.store.methods.getData();
              if (res.response.data.error) {
                Toast.fire({ title: res.response.data.error.message });
              }
            });
        });
      }
      console.log("likeProduct");
    },
  },
  async updated() {
    if (this.isproductfilter) {
      this.store.state.AppData = this.isproductfilter;
    }
    // console.log('isChannelIg', this.isChannelIg());
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
}
.item-wrapper.withoutbanner {
  top: 93px;
  transition: all 0.5s ease-in-out;
  margin-top: 0;
  border-radius: 0;
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
</style>
