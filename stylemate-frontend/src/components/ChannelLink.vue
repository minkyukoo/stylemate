<template>
  <ion-page>
      <!-- header -->
    <!-- End header -->
    <!-- page content -->
      <ion-content :fullscreen="true">
        
<h2> Channel Connection</h2>
<ion-icon :src= "fingerPrint "> </ion-icon>
        
      </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonContent } from "@ionic/vue";
import { fingerPrint } from "ionicons/icons"
export default {
  name: 'ChannelLink',
  components: { IonContent, IonPage, },
  setup(){
return{
  fingerPrint 
}
  },
  methods: {
}
}
</script>
<style>
</style>