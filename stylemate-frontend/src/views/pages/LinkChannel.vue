<template>
  <ion-page>
      <!-- header -->
    <TopNav></TopNav>
    <!-- End header -->
    <!-- page content -->
      <ion-content :fullscreen="true">
<ChannelLinkVue/>
      </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import ChannelLinkVue from "@/components/ChannelLink.vue";
export default {
  name: 'LinkChannel',
  components: { IonContent, IonPage, TopNav, ChannelLinkVue},
  methods: {
}
}
</script>
<style>
</style>