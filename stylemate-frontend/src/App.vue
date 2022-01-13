<template>
  <div id="app-container">
    <div class="main-container mx-auto">
      <Header />
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>


<style lang="scss">
.main-container {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}
</style>
