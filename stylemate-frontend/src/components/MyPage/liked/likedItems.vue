<template>
  <div class="liked-wrap">
    <div v-if="progress.length > 0">
      <div v-if="store.state.likedTabState === 'item'">
        <LikedItem
          v-for="(item, index) in progress"
          :progressDetails="item"
          :key="index"
        />
      </div>
      <div v-if="store.state.likedTabState === 'brand'">
        <BrandItems
          v-for="(item, index) in progress"
          :progressDetails="item"
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
      progress: [
        {
          imgTag: "re-registration",
          img: "MyPage-item1.png",
          title: "NCOVER",
          desc: "CHECKER BOARD URTLEN...",
          endDate: "2012-02-13 15:30",
          status: "re-registration",
        },
        {
          imgTag: "Sponsor Selection",
          img: "MyPage-item1.png",
          title: "ROLAROLA",
          desc: "leopard fleece jumper black",
          endDate: "2012-02-13 15:30",
          status: "sponsor-selection",
        },
        {
          imgTag: "Post registration",
          img: "MyPage-item1.png",
          title: "NCOVER",
          desc: "CHECKER BOARD  URTLEN...",
          endDate: "2012-02-13 15:30",
          status: "post-registration",
        },
        {
          imgTag: "Checking",
          img: "MyPage-item1.png",
          title: "NCOVER",
          desc: "CHECKER BOARD  URTLEN...",
          endDate: "2012-02-13 15:30",
          status: "checking",
        },
      ],
    };
  },
  //   mounted() {
  //     console.log("this is business", this.tabState);
  //   },
  methods: {},
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