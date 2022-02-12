<template>
  <ion-app>
    <!-- <ion-router-outlet /> -->
    <router-view :key="$route.path" v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
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
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
  background-color: #dd0000 !important; 
}

::-webkit-scrollbar {
  width: 2px !important;
  background-color: #ba1414 !important;
}

::-webkit-scrollbar-thumb {
  background-color: #6d02f0 !important;
}
</style>