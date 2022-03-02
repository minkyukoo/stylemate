
export default class ChannelService {

  async initFacebook() {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: "662067494654261", //You will need to change this
        cookie: true, // This is important, it's not enabled by default
        version: "v13.0",
      });
    };
  }

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
  }


}