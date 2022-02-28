<template>
  <div class="liked-wrap">
    <div v-if="proLen || braLen">
      <div v-if="store.state.likedTabState === 'item'">
        <LikedItem v-for="(item, index) in product" :progressDetails="item" :key="index"  v-on:productDislike="dislike($event)" />
      </div>
      <div v-if="store.state.likedTabState === 'brand'">
        <BrandItems
          v-for="(item, index) in brand"
          :progressDetails="item"
          :tag="setTags(item.tag)"
          :key="index"
        />
      </div>
    </div>
    <div v-else>
      <Error errors="You don't have a wishlist yet." />
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import LikedItem from "./likedItem.vue";
import BrandItems from "./BrandItems.vue";
import Error from "../../Error.vue";
import UserInfoService from "@/services/UserInfoService";
export default {
  name: 'likedItems',
  components: { LikedItem, BrandItems, Error },

  setup() {
    const store = inject("store");
    return {
      store,
    };
  },

  data() {
    return {
      product: [],
      brand: [],
      proLen: false,
      braLen: false,
    };
  },
  created() {
    this.user = new UserInfoService();
  },
  mounted() {
    this.user.getUserInfo().then((userInfo) => {
      this.user.getInfluence(userInfo.data.uid, "product").then((res) => {
        console.log("product", res);
        this.product = res.data.data;
        this.proLen = res.data.data.length > 0 ? true : false;
      });
      this.user.getInfluence(userInfo.data.uid, "brand").then((res) => {
        console.log("brand", res);
        this.brand = res.data.data;
        this.braLen = res.data.data.length > 0 ? true : false;
      });
    });
  },
  methods: {
    setTags(items) {
      var filterItems = [];
      items.forEach((value) => {
        if (value.status === "active") {
          filterItems.push("#" + value.tag);
        }
      });
      return filterItems.join(" ").toString();
    },
    dislike(event){
      console.log('event', event);
    }
  },
};
</script>

<style scoped>
.liked-wrap {
  padding: 0 20px;
}
.empty {
  text-align: center;
  padding: 30px 0;
  font-size: 14px;
  line-height: 17px;
  color: #c4c4c4;
}
</style>
