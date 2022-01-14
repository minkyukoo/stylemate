<template>
  <div id="app-container" class="bg-purple">
    <div class="main-container relative mx-auto">
      <Header />
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
      <div class="floatbtn-wrap">
        <FloatBtn btnType="toparrow" />
        <FloatBtn btnType="heartdefault" />
      </div>
      <BottomNav />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import BottomNav from "./components/BottomNav.vue";
import FloatBtn from "./components/utilities/FloatBtn.vue";
export default {
  name: "App",
  components: { Header, BottomNav, FloatBtn },
};
</script>


<style lang="scss">
.main-container {
  max-width: 500px;
  min-width: 360px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
.floatbtn-wrap {
  position: absolute;
  z-index: 1;
  right: 10px;
  bottom: 82px;
  button {
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
