<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="채널연결" />
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap">
      <!-- {{userUID}}-{{channelId}} -->
      <div class="contWrap">
        <ul class="connectionList">
          <li>
            <div>
              <label>
                스타일메이트와 연결할 인스타그램 비즈니스 계정을
                선택하세요.
              </label>
            </div>
          </li>
        </ul>
        <ul class="newChannel">
          <li
            v-for="(account, i) of igResData"
            :key="i + 1"
            @click="selectPage(account, i)"
            :class="(isSeleted === i) ? 'active' : ''"
          >
            <div class="channelLeft">
              <div class="channelImg">
                <!-- <img src="@/assets/icons/refresh.svg" /> -->
                <img :src="account.instagram_business_account.profile_picture_url" />
              </div>
              <div class="channelDec">
                <!-- <h4>Acc ID: {{ account.instagram_business_account.id }}</h4> -->
                <h4>{{ account.instagram_business_account.name }}</h4>
                <p>{{ fbResData.name }}</p>
              </div>
            </div>
            <div class="btn-wrap">
              <button class="channelBtn" type="button">선택</button>
              <!-- <div class="dbl-btn-wrap" v-if="stylemateStatus === 'approve'">
                <button class="channelBtn" type="button">Linked Account</button>
                <button class="channelBtn" type="button">disconnect</button>
              </div>
              <button
                v-else-if="stylemateStatus === 'request'"
                class="channelBtn"
                type="button"
              >checking</button>
              <button
                v-else-if="stylemateStatus === 'hold' && !isReApplication"
                class="channelBtn"
                type="button"
              >hold</button>
              <button
                v-else-if="stylemateStatus === 'hold' && isReApplication"
                class="channelBtn"
                type="button"
              >reapplication</button>-->
            </div>
          </li>
        </ul>
        <ul class="connectionList">
          <li>
            <div>
              <label>
                스타일메이트와 연결할 인스타그램 비즈니스 계정을
                선택하세요.
              </label>
            </div>
          </li>
        </ul>
        <ul class="newChannel">
          <li class="disable" v-for="(account, i) of ignormalAccount" :key="i + 1">
            <div class="channelLeft">
              <div class="channelImg">
                <img :src="account.picture.data.url" />
              </div>
              <div class="channelDec">
                <h4>{{ account.name }}</h4>
                <p>{{ fbResData.name }}</p>
              </div>
            </div>
            <div>
              <button class="channelBtn" type="button" @click="openD">선택</button>
            </div>
          </li>
        </ul>
        <!-- {{ igResData }} -->
        <!-- {{ userChanneldata }} -->
      </div>
      <div class="subscribe-wrap">
        <button class="black-btn" @click="applyActivity">활동 신청하기</button>
      </div>

      <div class="bottomDrawer" :class="{ active: isActive }">
        <div class="drawer-wrap">
          <div class="drawer-top">
            <h4>연결된 채널을 해제하시겠습니까?</h4>
            <p>연결을 해제한 채널은 재연결이 가능합니다.</p>
          </div>
          <div class="button-group">
            <button class="grey-btn">취소</button>
            <button class="black-btn">확인</button>
          </div>
        </div>
      </div>
      <div class="overlay" :class="{ active: isActive }"></div>
    </div>
    <!-- </ion-content> -->
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import { inject, onMounted } from 'vue';
// import { useRouter } from 'vue-router';
import ChannelService from "@/services/ChannelService";
import UserInfoService from "@/services/UserInfoService";

export default {
  name: "NewMemberChannel",
  components: { TopNav, IonPage },
  data() {
    return {
      isActive: false,
      igResData: null,
      ignormalAccount: [],
      fbResData: null,
      stylemateStatus: '',
      isReApplication: null,
      isSeleted: null,
      userUID: '',
      userId: '',
      channelId: '',
      seletedPageId: null,
      seletedIguserId: null,
      igAccInfo: null,
      fbToken: null,
      instagramChannelInfo: null,
      igBusinessPageInfo: null,
      igpagecategoryname: null,
    };
  },
  setup() {
    const linkedChannel = inject("linkedChannel");
    // const router = useRouter()

    onMounted(() => {
      // if (linkedChannel.state.isConnected === 'connected') {
      //   console.log('connected:', linkedChannel.state.isConnected);
      //   linkedChannel.methods.checkLoginState();
      // } else {
      //   console.log('connected:', linkedChannel.state.isConnected);
      //   router.push({ name: 'NewMemberJoining' });
      // }

    });

    return { linkedChannel };
  },
  async created() {
    this.channelService = new ChannelService();
    this.userInfoservice = new UserInfoService();
    // this.fbData();
    // this.igData();
    let fbaccessToken = await this.channelService.getfbaccessToken();
    if (!fbaccessToken) {
      this.$router.push({ name: 'NewMemberJoining' });
    }
    this.getUserinfo2();
  },
  async updated() {
    let fbaccessToken = await this.channelService.getfbaccessToken();
    if (!fbaccessToken) {
      this.$router.push({ name: 'NewMemberJoining' });
    }
  },
  mounted() {
    this.getLogUserInfo();
    this.channelData();
  },
  methods: {
    openlink() {
      console.log("clivk");
    },
    hideSponserButton() {
      this.isActive = !this.isActive;
    },

    openD() {
      console.log('openD');
      this.hideSponserButton();
    },

    getLogUserInfo() {
      this.userInfoservice.getUserInfo().then(res => {
        console.log('getLogUserInfo:', res);
        this.userUID = res.data.uid;
        this.userId = res.data.id;
      });
    },

    getUserinfo2() {
      this.userInfoservice.getUserInfo().then(res => {
        if (res.data.influence.channel.length < 1) {
          if (this.linkedChannel.state.extendToken) {
            let fbtoken = this.linkedChannel.state.extendToken;
            this.fbToken = fbtoken;
          } else {
            this.$router.push({ name: 'NewMemberJoining' });
          }
          // if (localStorage.getItem('fbaccessToken')) {
          //   let fbtoken = localStorage.getItem('fbaccessToken');
          //   this.fbToken = fbtoken;
          // } else {
          //   this.$router.push({ name: 'NewMemberJoining' });
          // }
        } else {
          console.log('infores data:', res.data);
          console.log('infores channel:', res.data.influence.channel);
          this.userUID = res.data.uid;
          this.userId = res.data.id;
          this.userChanneldata = res.data.influence.channel;
          let channelData = res.data.influence.channel;
          channelData.map(
            (item) => {
              console.log('channel data:--', item);
              this.instagramChannelInfo = item.instagramChannel;
              this.stylemateStatus = item.stylemateStatus;
              this.isReApplication = item.isReApplication;
              this.channelId = item.id;
              this.fbToken = item.instagramChannel.accessToken;
            }
          )
          setTimeout(() => {
            this.upadteStatus(this.userUID, this.channelId);
            this.$router.push({ name: 'NewMemberJoining' });

          }, 2000);
        }
      });
    },

    //isUserid
    async isUserid() {
      let isLogedIn = await this.tokenService.isAuth();
      if (isLogedIn) {
        return await this.userInfoService.getUserInfo().then((res) => {
          return res.data.uid;
        });
      }
    },

    channelData() {
      // 1. Check Username
      this.channelService.getfbUser().then(res => {
        console.log('1. fbUser res:', res);
        this.fbResData = res;
      });

      // 3. page id 
      this.channelService.getIgchannels().then(res => {
        console.log('3. Igchannels list:', res);
        let igBAcc = res.data;
        let freshChannel = igBAcc.filter(channel => {
          if (typeof channel.instagram_business_account == 'undefined') {
            this.ignormalAccount.push(channel);
          }
          return typeof channel.instagram_business_account !== 'undefined';
        });
        this.igResData = freshChannel;
        console.log('3. Igchannels list:', this.igResData);
        console.log('3. ignormalAccount list:', this.ignormalAccount);
      });
    },



    // 4. Check your business page
    getPageInfo(pageId) {
      this.channelService.getIgBusinessPage(pageId).then(res => {
        console.log('4. igBusinessPageInfo res:', res);
        this.igBusinessPageInfo = res;
        let cates = res.category_list
        cates.map((item) => {
          this.igpagecategoryname = item.name;
        })
        this.getAccountInfo(pageId);
      });
    },

    // 5. Check user information
    getAccountInfo(pageId) {
      // let igInfo = this.instagramChannelInfo;
      let igcategory = this.igBusinessPageInfo;
      let igcategoryname = this.igpagecategoryname;
      console.log('igcategory--', igcategory);
      // let token = this.fbToken;
      if (this.seletedIguserId) {
        this.channelService.getIgUser(this.seletedIguserId).then(res => {
          console.log('5. IgUser res:', res);
          // let accinfo = {
          //   accessToken: token,
          //   accessTokenExpiredAt: igInfo.accessTokenExpiredAt,
          //   accountType: igInfo.accountType,
          //   analyticsMediaCount: igInfo.analyticsMediaCount,
          //   businessCategoryName: igInfo.businessCategoryName,
          //   categoryName: igInfo.categoryName,
          //   channelId: res.id,
          //   channelInstagramId: res.ig_id,
          //   createdAt: igInfo.createdAt,
          //   description: igInfo.description,
          //   engagementRate: igInfo.engagementRate,
          //   externalUrl: igInfo.externalUrl,
          //   facebookUserId: igInfo.facebookUserId,
          //   facebookUserName: igInfo.facebookUserName,
          //   fbid: igInfo.fbid,
          //   followCount: res.follows_count,
          //   followerCount: res.followers_count,
          //   followerCountIncrease: igInfo.followerCountIncrease,
          //   fullName: igInfo.fullName,
          //   impression: igInfo.impression,
          //   isPrivate: igInfo.isPrivate,
          //   latelyCommentCount: igInfo.latelyCommentCount,
          //   latelyCommentCountAvg: igInfo.latelyCommentCountAvg,
          //   latelyEngagement: igInfo.latelyEngagement,
          //   latelyEngagementAvg: igInfo.latelyEngagementAvg,
          //   latelyLikeCount: igInfo.latelyLikeCount,
          //   latelyLikeCountAvg: igInfo.latelyLikeCountAvg,
          //   latelyMediaTypeSate: igInfo.latelyMediaTypeSate,
          //   latelyPublishedTimeSate: igInfo.latelyPublishedTimeSate,
          //   latelyPublishedWeekDayStat: igInfo.latelyPublishedWeekDayStat,
          //   mediaCount: res.media_count,
          //   monthFollowerCountIncrease: igInfo.monthFollowerCountIncrease,
          //   overallCategoryName: igInfo.overallCategoryName,
          //   pageAccessToken: igInfo.pageAccessToken,
          //   pageId: igInfo.pageId,
          //   pageName: igInfo.pageName,
          //   refreshTokenAt: igInfo.refreshTokenAt,
          //   thumbnailOriginalUrl: res.profile_picture_url,
          //   thumbnailUrl: igInfo.thumbnailUrl,
          //   trackedAt: igInfo.trackedAt,
          //   updatedAt: igInfo.updatedAt,
          //   userName: res.username,
          // }
          let accinfo = {
            biography: res.biography,
            page_id: pageId,
            category: igcategoryname,
            category_list: igcategory.category_list,
            name: res.name ? res.name : '',
            id: res.id,
            ig_id: res.ig_id,
            follows_count: res.follows_count,
            followers_count: res.followers_count,
            profile_picture_url: res.profile_picture_url,
            media_count: res.media_count,
            username: res.username,
          }
          this.igAccInfo = accinfo;
          console.log('this.igAccInfo', this.igAccInfo);
        });
      }
    },

    // page selected
    selectPage(pageinfo, i) {
      console.log('selectPage:', pageinfo);
      this.isSeleted = i;
      this.seletedPageId = pageinfo.id;
      this.seletedIguserId = pageinfo.instagram_business_account.id;
      this.getPageInfo(this.seletedPageId);
    },

    // 7. Save the selected channel applyActivity
    async applyActivity() {
      console.log('applyActivity');
      // let igInfo = this.instagramChannelInfo;
      let info = this.igAccInfo;
      let uid = this.userUID;
      let userid = this.userId;
      let token = {
        "accessToken": this.fbToken,
        "userID": userid,
        "name": this.linkedChannel.state.fbaccessTokenType,
      };
      if (this.seletedPageId) {
        this.channelService.selectChannel(uid, token, info).then((res) => {
          console.log('7. selectChannel res:', res);
          console.log('response:----', res.status);
          this.getUserinfo2();
        });
        //  await this.getUserinfo2();

      } else {
        alert('no page selected');
      }
    },

    // //patch
    upadteStatus(uid, channelId) {
      this.channelService.getIgApproveRequest(uid, channelId).then((res) => {
        console.log('applyActivity res:', res);
      });
    }


  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(9, 9, 9, 0.75);
  z-index: 1;
  display: none;
  max-width: 500px;
  transform: translate(-50%);
}
.bottomDrawer {
  display: none;
}
.bottomDrawer.active,
.overlay.active {
  display: block;
}
.contWrap {
  padding: 20px;
}
.connectionList {
  margin-bottom: 10px;
}
.connectionList li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
  padding: 10px 0;
}
.connectionList li label {
  color: #c4c4c4;
  font-size: 12px;
  font-weight: 700;
}
.connectionList li lspanabel {
  color: #25282b;
  font-size: 14px;
  font-weight: 400;
}

.connectBtn {
  border: 1px solid #797979;
  color: #797979;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 10px;
}

.secList,
.thirdList,
.forthList {
  margin-top: 40px;
}
.secList button {
  display: block;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #595959;
  color: #595959;
  padding: 14px 0;
}

.thirdList li {
  justify-content: flex-start !important;
}
.thirdList li ion-checkbox {
  margin-right: 10px;
}

.newChannel {
  display: flex;
  flex-direction: column;
  align-items: inherit !important;
  margin-bottom: 40px;
}
.channelLeft {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.newChannel li {
  margin-bottom: 10px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 12px;
  border-radius: 8px;
}
.newChannel li:hover,
.newChannel li.active {
  border-color: #5700ff;
}
.newChannel li.disable {
  background: #f7f7f7;
  border: 1px solid #e5e5e5;
  pointer-events: none;
}
.newChannel li.disable .channelImg {
  position: relative;
}
.newChannel li.disable .channelImg::after {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  top: 0;
  left: 0;
  border-radius: 50%;
  background: linear-gradient(
    0deg,
    rgba(121, 121, 121, 0.8),
    rgba(121, 121, 121, 0.8)
  );
}
.newChannel li.disable .channelDec h4,
.newChannel li.disable .channelDec p {
  color: #797979;
}
.newChannel li.disable .channelBtn {
  border: 1px solid #e5e5e5;
  background: #f7f7f7;
  color: #797979;
  cursor: not-allowed;
}
.newChannel li .channelImg {
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
  background: #797979;
  margin-right: 12px;
}
.newChannel li .channelLeft .channelDec h4 {
  font-size: 14px;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 3px;
}
.newChannel li .channelLeft .channelDec p {
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
}
.newChannel li .channelBtn {
  border: 1px solid #797979;
  color: #797979;
  padding: 5px 30px;
  border-radius: 20px;
  font-size: 10px;
}

.subscribe-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 21px;
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  max-width: 500px;
}

.subscribe-wrap .black-btn {
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #090909;
  padding: 24px;
  width: 100%;
}

.drawer-wrap {
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;
  max-width: 500px;
  background: linear-gradient(
    150.57deg,
    rgba(255, 255, 255, 0.5) -60.05%,
    #ffffff 71.1%
  );
  backdrop-filter: blur(30px);
  border-radius: 20px 20px 0px 0px;
}
.drawer-top {
  padding: 40px 20px;
  text-align: center;
}
.drawer-top h4 {
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #25282b;
}
.drawer-top p {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #595959;
  margin-top: 24px;
}
.button-group {
  display: flex;
}
.button-group button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  padding: 21px;
}
.button-group button.grey-btn {
  color: #797979;
  background: #e5e5e5;
}
.button-group button.black-btn {
  color: #ffffff;
  background: #090909;
}
</style>