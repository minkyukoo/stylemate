import axios from "axios";

var fbBaseUrl = 'https://graph.facebook.com';
var version = 'v13.0';
// eslint-disable-next-line
var token = localStorage.getItem('token');
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

  getfbuserId() {
    return localStorage.getItem('userID');
  }
  getfbaccessToken() {
    return localStorage.getItem('fbaccessToken');
  }

  channelBaseUrl() {
    return fbBaseUrl + '/' + version;
  }


  async getfbUser() {
    return await axios.get(this.channelBaseUrl() + '/' + this.getfbuserId() + '?access_token=' + this.getfbaccessToken()).then((res) => res.data).catch((err) => err);
  }

  async getIgchannels() {
    return await axios.get(this.channelBaseUrl() + '/' + this.getfbuserId() + '/accounts?fields=' + encodeURI('instagram_business_account{id,name,username,profile_picture_url}') + '&access_token=' + this.getfbaccessToken()).then((res) => res.data).catch((err) => err);
  }

  async getIgUser(iguserid) {
    return await axios.get(this.channelBaseUrl() + '/' + iguserid + '?fields=' + encodeURI('ig_id,biography,followers_count,follows_count,media_count,name,profile_picture_url,username') + '&access_token=' + this.getfbaccessToken()).then((res) => res.data).catch((err) => err);
  }

  async getIgUsermedia(ig_postId) {
    return await axios.get(this.channelBaseUrl() + '/' + ig_postId + '?fields=' + encodeURI('ig_id,media_type,media_product_type,media_url,permalink,shortcode,username,timestamp,like_count,comments_count,caption') + '&access_token=' + this.getfbaccessToken()).then((res) => res.data).catch((err) => err);
  }

  async getIguserinfo() {
    let ig_userId = '17841452123566228';
    return await this.getIgUser(ig_userId);
  }

  async getIgusermediainfo() {
    let ig_postId = '17988602920443231';
    return await this.getIgUsermedia(ig_postId);
  }

  async igTokenExtend(fbToken) {
    return axios.get(`https://elsa.alloo.cc/commons/instagram-token`, {
      params: {
        token: fbToken,
      },
    });
  }

  async getIgrenewaltoken(uid, channelId, ftoken, userId, ftokenName) {
    return await axios.patch(`/stylemates/users/${uid}/channels/${channelId}/instagram-renewal-token`, {
      "token": {
        "accessToken": ftoken,
        "userID": userId,
        "name": ftokenName
      },
    },
    {
      headers: {
        Authorization: 'Bearer ' + token, //the token is a variable which holds the token
        "Content-Type": 'application/json',
      }
    });
  }





}