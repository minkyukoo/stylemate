<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="Login"/>
    <!-- End header -->
    <!-- page content -->
    <ion-content class="ion-padding">
      <h1>Please login in Stylemate</h1>
      <ion-button expand="block" fill="outline" color="dark" @click="loginHandaler">Login</ion-button>
      <ion-card>
        <ion-item>
          <h2>Customer service center</h2>
        </ion-item>
        <ion-item>
          <h1>Notice</h1>
        </ion-item>
        <ion-item>
          <h1>FAQ</h1>
        </ion-item>
        <ion-item>
          <h1>1:1 inquiry</h1>
        </ion-item>
        <ion-item>
          <h1>Terms of Use</h1>
        </ion-item>
        <ion-item>
          <h1>Privacy Policy</h1>
        </ion-item>
      </ion-card>
      <ion-button router-link="/home">Go to detail</ion-button>
      <ion-button router-link="/mypage">Go to detail</ion-button>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import {
  IonCard,
  IonContent,
  IonItem,
  IonButton,
} from "@ionic/vue";
export default {
  name: 'Login',
  components: {
    IonContent,
    IonCard,
    IonItem,
    IonButton,
  },
  data() {
    return {
      serverUrl: 'http://stylemate.dvconsulting.org/stylemate/home',
      localUrl: 'http://localhost:8100/home',
    }
  },
  methods: {
    loginHandaler() {
      alert('Login');
      window.location.href = 'https://accounts.beta.mediance.co.kr/login?service=stylemate&type=influence&site=stylemate&callback=' + encodeURI(this.serverUrl);
      var queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      var token = urlParams.get('token')
      localStorage.setItem('token', token);
      console.log(urlParams);
      console.log(token);
    }
  },
};
</script>

<style>
.main-container {
  max-width: 500px;
  min-width: 360px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
.border_input {
  border-block: groove;
}
.login {
  text-align: center;
}
h1 {
  text-align: center;
}
</style>
