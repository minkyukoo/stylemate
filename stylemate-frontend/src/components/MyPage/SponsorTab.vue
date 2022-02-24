<template>
  <div class="sponsor-tab">
    <div class="sponsor-tab-item" @click="store.methods.setSponsorTab('progressHistory')">
      <button
        :class="[
          store.state.sponsorTabState === 'progressHistory'
            ? 'sponsor-btn active'
            : 'sponsor-btn',
        ]"
      >
        진행내역
      </button>
    </div>
    <div class="sponsor-tab-item" @click="store.methods.setSponsorTab('bookingHistory')">
      <button
        :class="[
          store.state.sponsorTabState === 'bookingHistory'
            ? 'sponsor-btn active'
            : 'sponsor-btn',
        ]"
      >
        신청내역
      </button>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "SponsorTab",
  data() {
    return {
      tab: "progress",
    };
  },
  setup() {
    const store = inject("store");


    return {
      store,
    };
  },
  methods: {
    setTab(val) {
      this.tab = val;
      this.$emit("setTab", this.tab);
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