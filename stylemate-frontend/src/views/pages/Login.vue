<template>
  <div class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="로그인" />
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap">
      <div class="inner-container listmain">
        <div class="login-wrap">
          <h1 class="page-title pad-t-40">스타일메이트에 로그인 해주세요</h1>
          <button class="login-btn" @click="loginHandaler">로그인</button>

          <CustomerServiceLogin />
          <!-- <ion-button router-link="/home">Go to detail</ion-button>
          <ion-button router-link="/mypage">Go to detail</ion-button>-->
        </div>
      </div>
    </div>
    <!-- </ion-content> -->
    <!-- End page content -->
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import {
  // IonContent,
} from "@ionic/vue";
import CustomerServiceLogin from "@/components/MyPage/CustomerServiceLogin.vue";
export default {
  name: 'LoginPage',
  components: {
    // IonContent,
    TopNav,
    CustomerServiceLogin
  },
  data() {
    return {
      serverUrl: 'http://stylemate.dvconsulting.org/login',
      redirectServerUrl: 'http://stylemate.dvconsulting.org/home',
      localUrl: 'http://localhost:8100/login',
      redirectlocalUrl: 'http://localhost:8100/home',

      // clent server setting don't remove
      // develop branch >
      //https://stylemate.alloo.cc
      //main branch >
      //https://stylemate.mediance.co.kr
      
      // serverUrl: 'https://stylemate.alloo.cc/login',
      // redirectServerUrl: 'https://stylemate.alloo.cc/home',
      // localUrl: 'http://localhost:8100/login',
      // redirectlocalUrl: 'http://localhost:8100/home',
    }
  },
  mounted() {
    var queryString = window.location.search;
    console.log('queryString', queryString);
    const urlParams = new URLSearchParams(queryString);
    var token = urlParams.get('token')
    var refreshToken = urlParams.get('refreshToken');

    if (token && refreshToken) {
      var d = urlParams.get('expiresAt');
      var dateTime = new Date(d.replace(" ", "+")).getTime();
      var token_expiresAt = dateTime;
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('tokenexpiresAt', token_expiresAt);
      window.parent.postMessage('loginCompleted', '*');
      window.location.href = this.redirectlocalUrl;
      // window.location.href = this.redirectServerUrl;
    }
  },
  methods: {
    loginHandaler() {
      // alert('Login');
      window.location.href = 'https://accounts.beta.mediance.co.kr/login?service=stylemate&type=influence&site=stylemate&callback=' + encodeURI(this.localUrl);
      // window.location.href = 'https://accounts.beta.mediance.co.kr/login?service=stylemate&type=influence&site=stylemate&callback=' + encodeURI(this.serverUrl);
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
.login-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #090909;
  border-radius: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #090909;
}
.page-title {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #090909;
  margin-bottom: 22px;
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
