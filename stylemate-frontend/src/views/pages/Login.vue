<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="Login" />
    <!-- End header -->
    <!-- page content -->
    <ion-content>
      <div class="login-wrap">
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
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import {
  IonContent,
  IonCard,
  IonItem,
  IonButton,
} from "@ionic/vue";
export default {
  name: 'LoginPage',
  components: {
    IonContent,
    IonCard,
    IonItem,
    IonButton,
    TopNav
  },
  data() {
    return {
      serverUrl: 'http://stylemate.dvconsulting.org/stylemate/home',
      localUrl: 'http://localhost:8100/login',
      redirectlocalUrl: 'http://localhost:8100/home',
    }
  },
  mounted() {
    var queryString = window.location.search;
    console.log('queryString', queryString);
    const urlParams = new URLSearchParams(queryString);
    var token = urlParams.get('token')
    var refreshToken = urlParams.get('refreshToken');

    if (token && refreshToken) {

      // var cuttentTime = new Date().getTime();
      var d = urlParams.get('expiresAt');
      var position = d.search(" ");
      var dateTime = new Date(d.substring(0, position)).getTime();
      console.log('dateTime', dateTime);

      var token_expiresAt = dateTime;

      console.log('dateTime', dateTime);
      console.log('cuttentTime', new Date().getTime());



      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('tokenexpiresAt', token_expiresAt);
      // localStorage.setItem('cuttentTime', cuttentTime);
      // localStorage.setItem('refreshExpiresAt', refreshExpiresAt);
      window.location.href = this.redirectlocalUrl;
    }
  },
  methods: {
    loginHandaler() {
      alert('Login');
      window.location.href = 'https://accounts.beta.mediance.co.kr/login?service=stylemate&type=influence&site=stylemate&callback=' + encodeURI(this.localUrl);
    }
  },
}
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
