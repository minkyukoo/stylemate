<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Brand Items</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-card class="maincard">
              <img
                src="@/assets/images/Rectangle7.png"
                class="imgsec"
                alt="ion"
              />
              <ion-card-header>
                <ion-card-title
                  >BEMUSE MANSION <ion-icon :icon="heart"
                /></ion-card-title>
              </ion-card-header>
              <ion-card-content class="maincontent">
                ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                iaculis mollis ligula sed ultrices.
              </ion-card-content>
              <ion-card-content class="subcontent">
                ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                iaculis mollis ligula sed ultrices.
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card class="maincard">
              <img
                src="@/assets/images/Rectangle8.png"
                class="imgsec"
                alt="ion"
              />
              <ion-card-header>
                <ion-card-title
                  >BEMUSE MANSION <ion-icon :icon="heart"
                /></ion-card-title>
              </ion-card-header>
              <ion-card-content class="maincontent">
                ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                iaculis mollis ligula sed ultrices.
              </ion-card-content>
              <ion-card-content class="subcontent">
                ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                iaculis mollis ligula sed ultrices.
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script>
import { IonCol, IonGrid, IonRow, IonPage, IonContent } from "@ionic/vue";

export default {
  components: { IonCol, IonGrid, IonRow, IonPage, IonContent },
};
</script>
<style></style>
