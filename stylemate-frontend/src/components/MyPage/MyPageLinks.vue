<template>
  <div v-for="(items, index) in links" :key="index">
    <div
      :class="`link-box ${items.arrow ? '' : 'link-box-static'}`"
      @click="reDirectPage(items)"
    >
      <h3>{{ items.name }}</h3>
      <div v-if="items.arrow != false">
        <img src="../../assets/icons/arrow-right.svg" alt />
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
import TokenService from "@/services/TokenService";

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
    const tokenService = new TokenService();

    const isLogedIn = async () => {
      return await tokenService.isAuth();
    };

    const reDirectPage = (item) => {
      if (item.hash === "notice" || item.hash === "faq") {
        localStorage.setItem("noticeTabPageName", `#${item.hash}`);
        store.state.noticeTabPageName = item.hash;
      }
      // isAuthorized

      if (item.hash === "inquiry") {
        if (!isLogedIn) {
          router.push({ name: "Login" });
        } else {
          localStorage.setItem("noticeTabPageName", `#${item.hash}`);
          store.state.noticeTabPageName = item.hash;
          router.push({ name: `${item.Pagelink}`, hash: `#${item.hash}` });
        }
      } else {
        router.push({ name: `${item.Pagelink}`, hash: `#${item.hash}` });
      }

      // if (item.arrow) {
      // router.push({ name: `${item.Pagelink}`, hash: `#${item.hash}` });
      // }
    };

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
.link-box.link-box-static {
  cursor: default;
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
