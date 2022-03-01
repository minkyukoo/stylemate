<template>
  <div v-for="(items, index) in links" :key="index">
    <div class="link-box" @click="reDirectPage(items)">
      <h3>{{ items.name }}</h3>
      <div v-if="items.arrow != false">
        <img src="../../assets/icons/arrow-right.svg" alt="" />
      </div>
      <div v-else>
        <span>{{ items.version }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "MyPageLinks",
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const store = inject("store");
    const router = useRouter();

    const reDirectPage = (item) => {
      store.state.noticeTabPageName = capitalize(item.hash);
      router.push({ name: `${item.Pagelink}`, hash: `#${item.hash}` });
    };

    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

    return {
      store,
      reDirectPage,
    };
  },
};
</script>

<style scoped>
.link-box {
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;
  border-bottom: 1px solid #f7f7f7;
  cursor: pointer;
}
.link-box h3 {
  font-size: 14px;
  line-height: 18px;
  color: #25282b;
}
.link-box span {
  font-size: 12px;
  line-height: 16px;
  color: #c4c4c4;
}
</style>
