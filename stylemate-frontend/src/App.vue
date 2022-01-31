<template>
  <ion-app>
    <ion-router-outlet />
    <router-view/>
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

<style lang="scss">
.ion-page {
  background-color: #E5E5E5;
}
</style>