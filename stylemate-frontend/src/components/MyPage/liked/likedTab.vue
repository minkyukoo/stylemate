<template>
  <div class="sponsor-tab">
    <div class="sponsor-tab-item" @click="setItemTab()">
      <button
        :class="[
          store.state.likedTabState === 'item'
            ? 'sponsor-btn active'
            : 'sponsor-btn',
        ]"
      >
        아이템
      </button>
    </div>
    <div class="sponsor-tab-item" @click="setBrandTab()">
      <button
        :class="[
          store.state.likedTabState === 'brand'
            ? 'sponsor-btn active'
            : 'sponsor-btn',
        ]"
      >
        브랜드
      </button>
    </div>
  </div>
</template>

<script>
import UserInfoService from "@/services/UserInfoService";
import { inject } from "vue";
export default {
  name: "likedTab",
  data() {
    return {
      tab: "item",
    };
  },
  setup() {
    const store = inject("store");
    
    return {
      store,
    };
  },
  created() {
    this.user = new UserInfoService();
  },
  methods: {
    setItemTab() {
      this.store.state.likedTabState = "item";
      this.store.state.likedTabAllCategories.forEach((val, key) => {
        if (key === 0) {
          this.store.state.likedTabAllCategories[key].active = true;
        } else this.store.state.likedTabAllCategories[key].active = false;
      });
      this.user.getUserInfo().then((userInfo) => {
        this.user.getInfluence(userInfo.data.uid, "product").then((res) => {
          // console.log("product", res);
          this.store.state.likedTabProduct = res.data.data;
          this.store.state.likedTabProductLength =
            res.data.data.length > 0 ? true : false;
        });
      });
    },
    setBrandTab() {
      this.store.state.likedTabState = "brand";
      this.store.state.likedTabAllCategories.forEach((val, key) => {
        if (key === 0) {
          this.store.state.likedTabAllCategories[key].active = true;
        } else this.store.state.likedTabAllCategories[key].active = false;
      });
      this.user.getUserInfo().then((userInfo) => {
        this.user.getInfluence(userInfo.data.uid, "brand").then((res) => {
          // console.log("brand", res);
          this.store.state.likedTabBrand = res.data.data;
          this.store.state.likedTabBrandLength =
            res.data.data.length > 0 ? true : false;
        });
      });
    },
  },
};
</script>

<style scoped>
.sponsor-tab {
  display: flex;
}
.sponsor-tab-item {
  width: 50%;
}
.sponsor-btn {
  height: 60px;
  width: 100%;
  padding: 16px 40px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  transition: all 0.3s;
}
.sponsor-btn.active {
  background: #090909;
  color: #ffffff;
  transition: all 0.3s;
  border: 1px solid #090909;
}
</style>
