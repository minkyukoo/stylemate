<template>
<div class="width:40%">
   <ion-card class="maincard">
  <img src="@/assets/images/Rectangle1.png" alt="ion">
  <ion-card-header>
    <ion-card-title>Hotel Panama Garden <img src="@/assets/icons/Vector.svg" alt=""  slot="end"></ion-card-title>

  </ion-card-header>
  <ion-card-content class="maincontent">
    ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices.
  </ion-card-content>
   <ion-card-content class="subcontent">
    ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mollis ligula sed ultrices. 
  </ion-card-content>
</ion-card>
</div>
 
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, } from '@ionic/vue';
//import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle },
  setup() {
    return { };
  }
});
</script>
<style>
.subcontent{
font-family:Pretendard;
color: #C4C4C4;
font-size: 10px;
}
.maincontent{
  font-size: 14px;
  color: #25282B;
}
.miancard{
  width: 40%;
}
</style>