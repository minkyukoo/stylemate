import { reactive } from "vue";
import axios from "axios";
var token = localStorage.getItem('token');
const state = reactive({
  loginRes: undefined,
  isConnected: 'notconnected',
  fbDetails: undefined,
  igDetails: undefined,
});



const methods = {

  // testData() {
  //   // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  //   console.log("Welcome!  Fetching your information.... ");
  //   window.FB.api("/107832208496167?fields=name%2Cpicture", (response) => {
  //     console.log('facebook: ', response);
  //     state.fbDetails = response;
  //   });
  //   window.FB.api("/107832208496167/accounts?fields=instagram_business_account{id,name,username,profile_picture_url}", (response) => {
  //     console.log('Instagram Channel: ', response.data);
  //     state.igDetails = response.data;
  //   });

  //   window.FB.api("17841452123566228?fields=biography,ig_id,followers_count,follows_count,media_count,name,profile_picture_url,username", (response) => {
  //     console.log('Instagram Channel 2: ', response);
  //   });
  //   window.FB.api("17988602920443231?fields=ig_id,media_type,media_product_type,media_url,permalink,shortcode,username,timestamp,like_count,comments_count,caption", (response) => {
  //     console.log('Instagram Channel 3: ', response);
  //   });

  // },

  statusChangeCallback(response) {
    // Called with the results from FB.getLoginStatus().
    console.log("statusChangeCallback");
    console.log(response); // The current login status of the person.
    if (response.status === "connected") {
      // Logged into your webpage and Facebook.
      state.loginRes = response;
      state.isConnected = response.status;
      // localStorage.setItem('fbaccessToken', response.authResponse.accessToken);
      localStorage.setItem('userID', response.authResponse.userID);
     
    } else {
      // Not logged into your webpage or we are unable to tell.
      document.getElementById("status").innerHTML =
        "Please log " + "into this webpage.";
    }
  },

  // checkLoginState() {
  //   // Called when a person is finished with the Login Button.
  //   window.FB.getLoginStatus((response) => {
  //     // See the onlogin handler
  //     this.statusChangeCallback(response);
  //   });
  // },

  async logInWithFacebook() {
    window.FB.login((response) => {
      if (response.authResponse) {
        // alert("You are logged in &amp; cookie set!");
        let ftoken = response.authResponse.accessToken;
        this.igTokenExtend(ftoken).then((res) => {
          console.log('igTokenExtend: ', res.data.token);
          localStorage.setItem('fbaccessToken', res.data.token.access_token);
        });
        this.statusChangeCallback(response);
        return true;
        // Now you can redirect the user or do an AJAX request to
        // a PHP script that grabs the signed request from the cookie.
      } else {
        // alert("User cancelled login or did not fully authorize.");
        return false;
      }
    }, { scope: 'public_profile,instagram_basic,pages_show_list' });
    // window.FB.getLoginStatus((response) => {
    //   // See the onlogin handler
    //   this.statusChangeCallback(response);
    // });
    return false;
  },

  async igTokenExtend(fbToken) {
    return axios.get(`https://elsa.alloo.cc/commons/instagram-token`, {
      params: {
        token: fbToken,
      },
    });
  },

  async getIgrenewaltoken(uid, channelId ) {
    return await axios.patch(`/stylemates/users/${uid}/channels/${channelId}/instagram-renewal-token`, {
      data: {
        "access_token": "string",
        "token_type": "string",
        "expires_in": 0
      },
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    })
  }

  // async initFacebook() {
  //   window.fbAsyncInit = () => {
  //     window.FB.init({
  //       appId: "662067494654261", //You will need to change this
  //       cookie: true, // This is important, it's not enabled by default
  //       version: "v13.0",
  //     });
  //   };
  // },

  // async loadFacebookSDK(d, s, id) {
  //   var js,
  //     fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) {
  //     return;
  //   }
  //   js = d.createElement(s);
  //   js.id = id;
  //   js.src = "https://connect.facebook.net/en_US/sdk.js";
  //   fjs.parentNode.insertBefore(js, fjs);
  // }

};

export default {
  state,
  methods,
};
