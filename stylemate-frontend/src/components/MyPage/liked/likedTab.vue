<template>
  <div class="sponsor-tab">
    <div class="sponsor-tab-item" @click="() => (store.state.likedTabState = 'item')">
      <button
        :class="[
          store.state.likedTabState === 'item'
            ? 'sponsor-btn active'
            : 'sponsor-btn',
        ]"
      >item</button>
    </div>
    <div class="sponsor-tab-item" @click="() => (store.state.likedTabState = 'brand')">
      <button
        :class="[
          store.state.likedTabState === 'brand'
            ? 'sponsor-btn active'
            : 'sponsor-btn',
        ]"
      >brand</button>
    </div>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
export default {
  name: "likedTab",
  data() {
    return {
      tab: "item",
    };
  },
  setup() {
    const store = inject("store");
    onMounted(() => {
      console.log("from Store", store.state.likedTabState);
    });

    return {
      store,
    };
  },
  methods: {
    // setTab(val) {
    //   this.tab = val;
    // },
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