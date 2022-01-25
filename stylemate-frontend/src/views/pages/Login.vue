<template>
<ion-header>
    <ion-toolbar>
      <ion-title>Login</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1>Please login in Stylemate</h1>
     <ion-button expand="block" fill="outline" color="dark">Login</ion-button>
<ion-card>
  <ion-item><h2>Customer service center</h2></ion-item>
   <ion-item><h1>Notice</h1></ion-item>
    <ion-item><h1>FAQ</h1></ion-item>
     <ion-item><h1>1:1 inquiry</h1></ion-item>
       <ion-item><h1>Terms of Use</h1></ion-item>
         <ion-item><h1>Privacy Policy</h1></ion-item>
</ion-card>
  </ion-content>
</template>

<script>
import { IonCard,
  IonHeader,
  IonTitle,
  IonContent , IonItem ,IonButton} from '@ionic/vue';
  export default {
    name: 'Login',
      components: {
    
    IonHeader,
    IonTitle,
    IonContent,
IonCard,
 IonItem ,
IonButton

  },
  }
</script>

<style>
.border_input{
  border-block:groove ;
}

</style>