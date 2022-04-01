import axios from "axios";
import UserInfoService from "./UserInfoService";
import linkedChannel from "../store/linkedChannel";
var fbBaseUrl = 'https://graph.facebook.com';
var version = 'v10.0';
var userInfoService = new UserInfoService();
var token = localStorage.getItem('token');
export default class ChannelService {

  async initFacebook() {
    window.fbAsyncInit = () => {
      window.FB.init({
        // appId: "662067494654261", //You will need to change this
        // appId: "1403988446624373", //You will need to change this
        appId: process.env.VUE_APP_FACEBOOK_APP_ID,
        // 1403988446624373 --- App id by client 
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

  // set fb base url
  channelBaseUrl() {
    return fbBaseUrl + '/' + version;
  }

  // get fb userid
  getfbuserId() {
    // return localStorage.getItem('userID');
    return 'me';
  }

  // get fb access token
  async getfbaccessToken() {
    // return localStorage.getItem('fbaccessToken');
    console.log('state.extendToken', linkedChannel.state.extendToken);
    let myInfo = await userInfoService.getUserInfo();
    if (myInfo.data.influence.channel.length < 1) {
      if (linkedChannel.state.extendToken) {
        return linkedChannel.state.extendToken;
      } else {
        return null;
      }
      // if (localStorage.getItem('fbaccessToken')) {
      //   return localStorage.getItem('fbaccessToken');
      // } else {
      //   return null;
      // }
    } else {
      let myInfofbaccesstoken = myInfo.data.influence.channel[0].instagramChannel.accessToken;
      console.log('myInfo', myInfo);
      console.log('myInfo token', myInfo.data.influence.channel[0].instagramChannel.accessToken);
      return myInfofbaccesstoken;
      // if (!myInfofbaccesstoken || myInfofbaccesstoken === '') {
      //   return null;
      // } else {
      //   return myInfofbaccesstoken;
      // }
    }

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
        // 'authResponse': encodeURI(authResponse),
        'token': authResponse,
      },
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }

  //3. page id - 페이지 아이디
  async getIgchannels() {
    let myfbaccesstoken = await this.getfbaccessToken();
    return await axios.get(this.channelBaseUrl() + '/' + this.getfbuserId() + '/accounts?fields=' + encodeURI('instagram_business_account{id,name,username,profile_picture_url},name,id,picture,tasks') + '&access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
  }

  //4. Check your business page
  async getIgBusinessPage(pageId) {
    let myfbaccesstoken = await this.getfbaccessToken();
    return await axios.get(this.channelBaseUrl() + '/' + pageId + '?fields=' + encodeURI('instagram_business_account{id,name,username,profile_picture_url},category_list') + '&access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
  }

  //5. Check user information
  async getIgUser(igUserId) {
    let myfbaccesstoken = await this.getfbaccessToken();
    return await axios.get(this.channelBaseUrl() + '/' + igUserId + '?fields=' + encodeURI('biography,id,ig_id,followers_count,follows_count,media_count,name,profile_picture_url,username,website') + '&access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
  }

  //7. Save selected channel
  async selectChannel(uid, ftoken, info) {
    return await axios.post(`/stylemates/users/${uid}/instagram-channel`,
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

  // for mypage media
  async getIgUsermedia(ig_postId) {
    let myfbaccesstoken = await this.getfbaccessToken();
    return await axios.get(this.channelBaseUrl() + '/' + ig_postId + '?fields=' + encodeURI('ig_id,media_type,media_product_type,media_url,permalink,shortcode,username,timestamp,like_count,comments_count,caption') + '&access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
  }

  async getIguserinfo(ig_userId) {
    // let ig_userId = '17841452123566228';
    return await this.getIgUser(ig_userId);
  }

  async getIgusermediainfo(ig_postId) {
    // let ig_postId = '17988602920443231';
    return await this.getIgUsermedia(ig_postId);
  }



  //fb token exted for long term
  // https://api.alloo.cc/commons/instagram-token --local
  async igTokenExtend(fbToken) {
    return axios.get(`/commons/instagram-token`, {
      params: {
        token: fbToken,
      },
    });
  }

  // Save extent token to user Myinfo 
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

  // Style Mate Channel Approval Request patch
  async getIgApproveRequest(uid, channelId) {
    return await axios.patch(`/stylemates/users/${uid}/channels/${channelId}/approve-request`, {
      "stylemateStatus": 'request',
    },
      {
        headers: {
          Authorization: 'Bearer ' + token, //the token is a variable which holds the token
        }
      });
  }

  // channel disconnect 
  async channelDisconnect(uid, channelId) {
    return await axios.delete(`/stylemates/users/${uid}/channels/${channelId}`, {
      headers: {
        Authorization: 'Bearer ' + token, //the token is a variable which holds the token
      }
    }).then((res) => res.data).catch((err) => err);
  }

  // channel connect procedure
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

  // channel connect procedure
  async getCampaignsOngoing(uid) {
    return await axios.get(`/stylemates/users/${uid}/campaigns`,
      {
        params: {
          "channelType": 'instagram',
          "menuType": 'progressHistory',
        },
        headers: {
          Authorization: 'Bearer ' + token, //the token is a variable which holds the token
        }
      }
    );
  }

  // /stylemates/users/{{uid}}/campaigns?filters=%7B%22channelType%22%3A%20%22instagram%22%2C%20%22menuType%22%3A%20%22progressHistory%22%7D

  // Ig posts 
  async getIgPosts(igID, limit) {
    let myfbaccesstoken = await this.getfbaccessToken();
    return await axios.get(`https://graph.facebook.com/v10.0/${igID}/media?fields=` + encodeURI(`caption,thumbnail_url,media_url,shortcode,comments_count,like_count,id,ig_id,is_comment_enabled,media_type,permalink,owner,media_product_type,timestamp,offset,username,children&limit=${limit}`) + '&access_token=' + myfbaccesstoken).then((res) => res.data).catch((err) => err);
  }



  // https://graph.facebook.com/v10.0/%7Big_id%7D/media?fields=caption,thumbnail_url,media_url,shortcode,comments_count,like_count,id,ig_id,is_comment_enabled,media_type,permalink,owner,media_product_type,timestamp,username,children&limit=10


}