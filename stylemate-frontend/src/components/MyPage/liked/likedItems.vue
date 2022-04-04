<template>
  <div class="liked-wrap">
    <div v-if="store.state.likedTabState === 'item'">
      <div v-if="store.state.likedTabProductLength">
        <LikedItem
          v-for="(item, index) in store.state.likedTabProduct"
          :progressDetails="item"
          :key="index"
          v-on:productDislike="dislike($event)"
        />
      </div>
      <div v-else>
        <Error errors="아직 좋아요한 아이템이 없어요." />
      </div>
    </div>
    <div v-if="store.state.likedTabState === 'brand'">
      <div v-if="store.state.likedTabBrandLength">
        <BrandItems
          v-for="(item, index) in this.store.state.likedTabBrand"
          :progressDetails="item"
          :tag="setTags(item.tag)"
          :key="index"
          v-on:brandDislike="dislike($event)"
        />
      </div>
      <div v-else>
        <Error errors="아직 좋아요한 브랜드가 없어요." />
      </div>
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
  name: "likedItems",
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
    this.getInfluenceList();
  },
  mounted() {
    console.log(
      "store.state.likedTabProduct",
      this.store.state.likedTabProduct
    );
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
    getInfluenceList() {
      this.user.getUserInfo().then((userInfo) => {
        this.user.getInfluence(userInfo.data.uid, "product").then((res) => {
          // console.log("product", res);
          let uniqueObjArray = [
            ...new Map(
              res.data.data.map((item) => [item["id"], item])
            ).values(),
          ];
          this.store.state.likedTabProduct = uniqueObjArray;
          this.store.state.likedTabProductLength =
            res.data.data.length > 0 ? true : false;
          // console.log(
          //   "uniqueObjArray.likedTabProduct",
          //   this.store.state.likedTabProduct
          // );
          // console.log(
          //   ".likedTabProduct",
          //   res.data.data
          // );
        });
        this.user.getInfluence(userInfo.data.uid, "brand").then((res) => {
          // console.log("brand", res);
          let uniqueObjArrayBrand = [
            ...new Map(
              res.data.data.map((item) => [item["id"], item])
            ).values(),
          ];
          this.store.state.likedTabBrand = uniqueObjArrayBrand;
          this.store.state.likedTabBrandLength =
            res.data.data.length > 0 ? true : false;
          // console.log(
          //   " this.store.state.likedTabBrand ",
          //   this.store.state.likedTabBrand
          // );
        });
      });
    },
    dislike(event) {
      // console.log("event", event);
      if (event) {
        this.getInfluenceList();
      }
    },
  },
};
</script>

<style scoped>
.liked-wrap {
  padding: 0 20px;
  margin-top: 20px;
}
.empty {
  text-align: center;
  padding: 30px 0;
  font-size: 14px;
  line-height: 17px;
  color: #c4c4c4;
}
</style>
