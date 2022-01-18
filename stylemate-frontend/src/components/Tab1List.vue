<template>
  <ion-content>
    <h1 class="bg-green-300 text-purple-1" >Main Content</h1>
    <ion-list>
      <ion-item key="1">
        <ion-label>Pokémon Yellow</ion-label>
        <ion-button router-link="tab1/list-details">Go to detail</ion-button>
      </ion-item>
      <ion-item key="2">
        <ion-label>Mega Man X</ion-label>
        <ion-button router-link="tab1/list-details">Go to detail</ion-button>
      </ion-item>
      <ion-item key="3">
        <ion-label>The Legend of Zelda</ion-label>
      </ion-item>
      <ion-item key="4">
        <ion-label>Pac-Man</ion-label>
      </ion-item>
      <ion-item key="5">
        <ion-label>Super Mario World</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { IonContent, IonButton } from '@ionic/vue';
export default {
  name: 'Tab1List',
  components: { IonContent, IonButton }
}
</script>

<style lang="scss" scoped>
h1 {
  // color: red;
  // color: $red;
}
</style>