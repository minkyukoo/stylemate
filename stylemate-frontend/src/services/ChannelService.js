import axios from "axios";
import UserInfoService from "./UserInfoService";
var fbBaseUrl = 'https://graph.facebook.com';
var version = 'v10.0';
var userInfoService = new UserInfoService();
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
    // return localStorage.getItem('userID');
    return 'me';
  }
  async getfbaccessToken() {
    // return localStorage.getItem('fbaccessToken');
    let myInfo = await userInfoService.getUserInfo();
    let myInfofbaccesstoken = myInfo.data.influence.channel[0].instagramChannel.accessToken;
    console.log('myInfo', myInfo);
    console.log('myInfo token', myInfo.data.influence.channel[0].instagramChannel.accessToken);
    // return myInfofbaccesstoken;
    if (!myInfofbaccesstoken || myInfofbaccesstoken === '') {
      return null;
    } else {
      return myInfofbaccesstoken;
    }

  }

  channelBaseUrl() {
    return fbBaseUrl + '/' + version;
  }

  // 1. Check username - 유저이름 확인
  async getfbUser() {
    let myfbaccesstoken = await this.getfbaccessToken();
    return await axios.get(this.channelBaseUrl() + '/' + this.getfbuserId() + '?access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
  }
  // 2. Token renewal - 토큰 갱신
  async getIgTokenRenew(authResponse) {
    return await axios.get(`/commons/instagram-token`, {
      params: {
        'authResponse': encodeURI(authResponse),
      },
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }

  //3. page id - 페이지 아이디
  async getIgchannels() {
    let myfbaccesstoken = await this.getfbaccessToken();
    return await axios.get(this.channelBaseUrl() + '/' + this.getfbuserId() + '/accounts?fields=' + encodeURI('instagram_business_account{id,name,username,profile_picture_url}') + '&access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
  }

  //4. Check your business page
  async getIgBusinessPage(pageId) {
    let myfbaccesstoken = await this.getfbaccessToken();
    return await axios.get(this.channelBaseUrl() + '/' + pageId + '/accounts?fields=' + encodeURI('instagram_business_account{id,name,username,profile_picture_url}') + '&access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
  }

  //5. Check user information
  async getIgUser(igUserId) {
    let myfbaccesstoken = await this.getfbaccessToken();
    return await axios.get(this.channelBaseUrl() + '/' + igUserId + '?fields=' + encodeURI('biography,id,ig_id,followers_count,follows_count,media_count,name,profile_picture_url,username,website') + '&access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
  }

  //7. Save selected channel
  async selectChannel(uid, ftoken, info) {
    return await axios.post(`/users/${uid}/instagram-channel`,
      {
        token: ftoken,
        info: info,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token, //the token is a variable which holds the token
        }
      }
    ).then((res) => res.data).catch((err) => err);
  }

  async updateChannel(uid, token, info) {
    return await axios.put(`/users/${uid}/instagram-channel`, {
      token: token,
      info: info,
      headers: {
        Authorization: 'Bearer ' + token, //the token is a variable which holds the token
        "Content-Type": 'application/json',
      }
    }).then((res) => res.data).catch((err) => err);
  }






  // async getIgchannels() {
  //   let myfbaccesstoken = await this.getfbaccessToken();
  //   return await axios.get(this.channelBaseUrl() + '/' + this.getfbuserId() + '/accounts?fields=' + encodeURI('instagram_business_account{id,name,username,profile_picture_url}') + '&access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
  // }

  // async getIgUser(iguserid) {
  //   let myfbaccesstoken = await this.getfbaccessToken();
  //   return await axios.get(this.channelBaseUrl() + '/' + iguserid + '?fields=' + encodeURI('ig_id,biography,followers_count,follows_count,media_count,name,profile_picture_url,username') + '&access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
  // }

  async getIgUsermedia(ig_postId) {
    let myfbaccesstoken = await this.getfbaccessToken();
    return await axios.get(this.channelBaseUrl() + '/' + ig_postId + '?fields=' + encodeURI('ig_id,media_type,media_product_type,media_url,permalink,shortcode,username,timestamp,like_count,comments_count,caption') + '&access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
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
  // Style Mate Channel Approval Request /stylemates/users/{user}/channel/{channel}/approve-request
  async getIgApproveRequest(uid, channelId) {
    return await axios.patch(`/stylemates/users/${uid}/channel/${channelId}/approve-request`, {
      "stylemateStatus": 'ready',
    },
      {
        headers: {
          Authorization: 'Bearer ' + token, //the token is a variable which holds the token
        }
      });
  }


  async getAccountConnection() {
    return await axios.get(`/guides/recently`,
      {
        "userType": 'new',
        "deviceType": 'mobile',
      },
      {
        headers: {
          Authorization: 'Bearer ' + token, //the token is a variable which holds the token
        }
      }
    );
  }






}