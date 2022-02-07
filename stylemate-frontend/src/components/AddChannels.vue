<template>
  <ion-page>
    <!-- header -->

    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
          <ion-card>
    <ion-item>
         <ion-button fill="outline" slot="end">View</ion-button>
    </ion-item>
    </ion-card>

    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent , IonCard , IonItem } from "@ionic/vue";
export default {
  name: "AddChannels",
  components: { IonContent, IonPage, IonCard , IonItem },
};
</script>
