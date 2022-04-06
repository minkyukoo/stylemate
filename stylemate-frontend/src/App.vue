<template>
  <ion-app>
    <!-- <ion-router-outlet /> -->
    <router-view :key="$route.path" v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
        <!-- <ion-router-outlet :is="Component"></ion-router-outlet> -->
      </transition>
    </router-view>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent, provide } from "vue";
import store from "./store/index";
import userData from "./store/userDetails";
import linkedChannel from "./store/linkedChannel";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  mounted() {
    console.log("App mounted");
  },
  setup() {
    provide("store", store);
    provide("userData", userData);
    provide("linkedChannel", linkedChannel);
  },
});
</script>

<style>
.ion-page {
  background-color: #e5e5e5;
}
.route-enter-from {
  opacity: 0;
  transform: translatey(50px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

::-webkit-scrollbar {
  width: 0px !important;
}
.green {
  background-color: green;
}


</style>
