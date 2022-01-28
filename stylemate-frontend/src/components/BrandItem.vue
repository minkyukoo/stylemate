<template>
   
    <ion-grid>
    <ion-row>
      <ion-col size="6">
          <ion-card class="maincard">
  <img src="@/assets/images/Rectangle7.png" class="imgsec" alt="ion">
  <ion-card-header>
  <ion-card-title>BEMUSE MANSION
  <ion-icon :icon="heart" /></ion-card-title>
  </ion-card-header>
  <ion-card-content class="maincontent">
    ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.
  </ion-card-content>
   <ion-card-content class="subcontent">
    ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices. 
  </ion-card-content>
</ion-card>
        </ion-col>
        <ion-col size="6">
            <ion-card class="maincard">
  <img src="@/assets/images/Rectangle8.png" class="imgsec" alt="ion">
  <ion-card-header>
  <ion-card-title>BEMUSE MANSION
  <ion-icon :icon="heart" /></ion-card-title>
  </ion-card-header>
  <ion-card-content class="maincontent">
    ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.
  </ion-card-content>
   <ion-card-content class="subcontent">
    ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices. 
  </ion-card-content>
</ion-card>
        </ion-col>
        </ion-row>
        </ion-grid>
   
</template>
<script>
import { IonCol, IonGrid, IonRow } from '@ionic/vue';

export default{
  components: { IonCol, IonGrid, IonRow }
};
</script>
<style></style>