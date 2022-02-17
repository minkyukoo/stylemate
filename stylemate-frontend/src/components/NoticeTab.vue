<template>
  <div class="tab-wrap">
    <div class="tabs">
      <button
        class="tab"
        @click="layout = 'tab1'"
        :class="{ active: layout === 'tab1' }"
      >
        캠페인
      </button>
      <button
        class="tab"
        @click="layout = 'tab2'"
        :class="{ active: layout === 'tab2' }"
      >
        가이드
      </button>
    </div>
    <!-- tab content 1 -->
    <div class="tab-content" v-if="layout === 'tab1'">
      tab 1
    </div>

    <!-- tab content 2 -->
    <div class="tab-content" v-if="layout === 'tab2'">
      tab 2
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeTab",
  data() {
    return {
      layout: "tab1",
    };
  },
};
</script>

<style scoped>
.tab-wrap .tab-content {
  padding: 50px 0 100px;
}
.tabs {
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  display: flex;
}

.tabs .tab {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 50%;
}
.tabs .tab.active {
  color: #ffffff;
  background: #090909;
}
</style>