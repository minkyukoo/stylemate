import { reactive } from "vue";
import ChannelService from "../services/ChannelService";
import UserInfoService from "../services/UserInfoService";
import router from "../router/index.js";

const channelService = new ChannelService();
const userInfoService = new UserInfoService();

const state = reactive({
  loginRes: undefined,
  isConnected: 'notconnected',
  fbDetails: undefined,
  igDetails: undefined,
  extendToken: undefined,
  fbaccessTokenType: undefined,
  isMobile: false,
});



const methods = {

  statusChangeCallback(response) {
    // Called with the results from FB.getLoginStatus().
    console.log("statusChangeCallback");
    console.log(response); // The current login status of the person.
    if (response.status === "connected") {
      // Logged into your webpage and Facebook.
      state.loginRes = response;
      state.isConnected = response.status;
      router.push({ name: 'NewMemberChannel' });
      // localStorage.setItem('fbaccessToken', response.authResponse.accessToken);
      // localStorage.setItem('userID', response.authResponse.userID);

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
        console.log('ftoken:--', ftoken);
        console.log('response.authResponse:--', response.authResponse.accessToken.access_token);
        channelService.igTokenExtend(ftoken).then((res) => {
          // console.log('igTokenExtend: ', res.data);
          // localStorage.setItem('fbaccessToken', res.data.token.access_token);
          // alert('You are logged in &amp; cookie set!');
          state.fbaccessTokenType = res.data.token.token_type;
          state.extendToken = res.data.token.access_token;
          console.log('state.extendToken: ', state.extendToken);
          response.authResponse.accessToken = state.extendToken;
          this.statusChangeCallback(response);
          // channelService.getIgTokenRenew(res.data.token.access_token).then((res) => {
            //   console.log(' https://elsa.beta.mediance.co.kr/commons/instagram-token- -igTokenRenew: ', res);
            // });
            // channelService.getIgTokenRenew(response.authResponse);
            // this.setIgrenewaltoken(res.data.token.access_token, res.data.token.token_type);
          });
        // this.statusChangeCallback(response);
        return true;
        // Now you can redirect the user or do an AJAX request to
        // a PHP script that grabs the signed request from the cookie.
      } else {
        // alert("User cancelled login or did not fully authorize.");
        return false;
      }
    }, { scope: 'public_profile,email,pages_show_list,pages_read_engagement,instagram_basic,instagram_manage_insights' });
    return false;
  },
  // public_profile,email,pages_show_list,pages_read_engagement,instagram_basic,instagram_manage_insights -- scope
  
  setIgrenewaltoken(fextoken, fextokenName) {
    userInfoService.getUserInfo().then((res) => {
      console.log('getUserInfo: ', res.data);
      let channelId = res.data.influence.channel[0].id;
      let uid = res.data.uid;
      let userId = res.data.id;
      channelService.getIgrenewaltoken(uid,channelId,fextoken,userId,fextokenName).then((res) => {
        console.log('igrenewaltoken: ', res.data);
        // localStorage.setItem('fbaccessToken', res.data.instagramChannel.accessToken);
      });
    });
  }


};

export default {
  state,
  methods,
};
