<template>
  <div id="app-container" class="bg-purple">
    <div class="main-container mx-auto">
      <Header />
      <!-- <div style="height:50px; background:#fff" class="my-2"></div> -->
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
      <BottomNav/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import BottomNav from "./components/BottomNav.vue";
export default {
  name: "App",
  components: { Header, BottomNav },
};
</script>


<style lang="scss">
.main-container {
  max-width: 500px;
  min-width: 360px;
  width: 100%;
  margin: 0 auto;
}
</style>
