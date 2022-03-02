<template>
  <div>
    <button class="button" @click="logInWithFacebook">Login with Facebook</button>
    <div v-if="loginstatus">
      <ul>
        <li v-for="(account, i) of igDetails" :key="i + 1">
          <img :src="fbDetails.picture.data.url" alt="profilePic" />
          <div>
            <h1>Channel Name: {{ account.name }}</h1>
            <h1>Facebook name: {{ fbDetails.name }}</h1>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "facebookLogin",
  data() {
    return {
      loginstatus: false,
      fbDetails: null,
      igDetails: null
    };
  },
  async created() {
    await this.loadFacebookSDK(document, "script", "facebook-jssdk");
    await this.initFacebook();
  },
  updated() {
    // this.logInWithFacebook();
    // this.checkLoginState();
  },
  methods: {
    testData() {
      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
      console.log("Welcome!  Fetching your information.... ");
      window.FB.api("/me/accounts", (response) => {
        console.log('Instagram Channel: ', response.data);
        this.igDetails = response.data;
      });
      window.FB.api("/me?fields=name%2Cpicture", (response) => {
        console.log('facebook: ', response);
        this.fbDetails = response;
      });
    },

    statusChangeCallback(response) {
      // Called with the results from FB.getLoginStatus().
      console.log("statusChangeCallback");
      console.log(response); // The current login status of the person.
      if (response.status === "connected") {
        // Logged into your webpage and Facebook.
        this.testData();
      } else {
        // Not logged into your webpage or we are unable to tell.
        document.getElementById("status").innerHTML =
          "Please log " + "into this webpage.";
      }
    },

    checkLoginState() {
      // Called when a person is finished with the Login Button.
      window.FB.getLoginStatus((response) => {
        // See the onlogin handler
        this.statusChangeCallback(response);
      });
    },

    async logInWithFacebook() {
      window.FB.login((response) => {
        if (response.authResponse) {
          // alert("You are logged in &amp; cookie set!");
          this.loginstatus = true;
          this.checkLoginState();
          return true;
          // Now you can redirect the user or do an AJAX request to
          // a PHP script that grabs the signed request from the cookie.
        } else {
          // alert("User cancelled login or did not fully authorize.");
          return false;
        }
      }, { scope: 'public_profile,instagram_basic,pages_show_list' });
      return false;
    },
    async initFacebook() {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: "662067494654261", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          version: "v13.0",
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },
  },
};
</script>
<style scoped>
.button {
  color: white;
  min-width: 150px;
  background-color: #3f62d6;
  height: 2.5rem;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}
div {
  color: black;
}
h1{
  text-align: left;
  margin-left: 10px;
  margin-bottom: 10px;
}
ul {
  display: flex;
  flex-direction: column;
  padding: 40px;
}
li {
  background: #9d7cee;
  padding: 20px;
  display: flex;
  align-items: center;
}
</style>
