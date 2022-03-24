<template>
  <div class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="채널연결" />
    <!-- End header -->
    <!-- page content -->
    <div class="main-wrap">
      <div class="contWrap">
        <!-- {{ linkedChannel.state.fbDetails }}
        {{ linkedChannel.state.isConnected }}-->
        <ul class="connectionList">
          <li>
            <div>
              <label>채널연결</label>
            </div>
            <div @click="refreshChannel">
              <img src="@/assets/icons/refresh.svg" />
            </div>
          </li>
        </ul>

        <div class="howtoConnect">
          <button type="button" class="connectBtn" @click="showModal">연결방법 보기</button>
        </div>
        <ul class="addChannel">
          <li>
            <h4>
              <img src="@/assets/icons/instagram-list.svg" /> Instagram
            </h4>
            <!-- if selected channel -->
            <ul class="newChannel" v-if="selChannelType === 'instagram' || userChannel.length > 0">
              <li v-for="(channel, i) of userChannel" :key="i+1">
                <div class="channelLeft">
                  <div class="channelImg">
                    <!-- <img src="@/assets/icons/refresh.svg" /> -->
                    <img :src="channel.instagramChannel.thumbnailOriginalUrl" />
                  </div>
                  <div class="channelDec">
                    <h4>{{ channel.instagramChannel.pageName }}</h4>
                    <p>{{ channel.channelName }}</p>
                  </div>
                </div>
                <div class="btn-wrap">
                  <!-- <button class="channelBtn" type="button">선택</button> -->
                  <!-- <button class="channelBtn" type="button" @click="disconnectpopup">disconnect</button> -->
                  <div class="dbl-btn-wrap" v-if="stylemateStatus === 'approve'">
                    <!-- <button class="channelBtn" type="button">Linked Account</button> -->
                    <button class="channelBtn" type="button" @click="disconnectpopup">연결해제</button>
                  </div>
                  <button
                    v-else-if="stylemateStatus === 'request'"
                    class="channelBtn greyBg"
                    type="button"
                    disabled="true"
                  >확인중</button>
                  <button
                    v-else-if="stylemateStatus === 'hold' && !isReApplication"
                    class="channelBtn greyBg"
                    type="button"
                  >보류</button>
                  <div
                    class="dbl-btn-wrap"
                    v-else-if="stylemateStatus === 'hold' && isReApplication"
                  >
                    <button class="channelBtn" type="button" @click="selectPage(account, i)">선택</button>
                    <button class="channelBtn" type="button" @click="disconnectpopup">연결해제</button>
                  </div>
                </div>
              </li>
            </ul>
            <!-- 2 -->
            <ul class="newChannel" v-if="setNewchannel">
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
            <div
              class="adddivwrap"
              v-if="(stylemateStatus === 'hold' && isReApplication) || userChannel.length < 1"
            >
              <button class="connectBtn" type="button" @click="addIgChannel">+ 채널 추가하기</button>
            </div>
          </li>
          <li>
            <h4>
              <img src="@/assets/icons/youtube.svg" /> Youtube
            </h4>
            <div class="adddivwrap">
              <button class="connectBtn" type="button">+ 채널 추가하기</button>
            </div>
          </li>
          <li>
            <h4>
              <img src="@/assets/icons/tiktok.svg" /> TikTok
            </h4>
            <div class="adddivwrap">
              <button class="connectBtn" type="button">+ 채널 추가하기</button>
            </div>
          </li>
        </ul>
      </div>
      <ConfirmationModal v-show="isModalVisible" @close="closeModal" class="channelconnectionmodal">
        <template v-slot:header>
          <div class="overHeader">
            <h2>확인해주세요!</h2>
          </div>
        </template>
        <template v-slot:body>
          <div class="modal-content">
            <div class="modalBody">
              <div class="overSearch">
                <ul>
                  <li class="checkboxWrap">
                    <label class="check-container">
                      <input type="checkbox" v-model="checkValue_1" @change="checkALL" />
                      <span class="checkmark"></span>인스타그램 계정이 프로페셔널/비즈니스 계정인가요?
                    </label>
                  </li>
                  <li class="checkboxWrap">
                    <label class="check-container">
                      <input type="checkbox" v-model="checkValue_2" @change="checkALL" />
                      <span class="checkmark"></span>페이스북 페이지를 생성하였나요?
                    </label>
                  </li>
                  <li class="checkboxWrap">
                    <label class="check-container">
                      <input type="checkbox" v-model="checkValue_3" @change="checkALL" />
                      <span class="checkmark"></span>페이스북 페이지와 인스타그램 계정을 연동하였나요?
                    </label>
                  </li>
                  <li class="checkboxWrap">
                    <label class="check-container">
                      <input type="checkbox" v-model="checkValue_4" @change="checkALL" />
                      <span class="checkmark"></span>인스타그램과 페이스북 소유자가 일치하나요?
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:footer>
          <div class="footBtn">
            <button
              type="button"
              class="footBtnbutton"
              @click="closeModal"
              aria-label="Close modal"
            >닫기</button>
            <button
              type="button"
              @click="accConnectMethods"
              class="footBtnbutton footBtnBlack"
              :disabled="disabled"
            >다음</button>
          </div>
        </template>
      </ConfirmationModal>

      <div class="subscribe-wrap">
        <button class="black-btn" @click="applyActivity" v-if="isapplyAct">활동 신청하기</button>
      </div>

      <div class="bottomDrawer" :class="{ active: isActive }">
        <div class="drawer-wrap" v-if="!isCampaignsOngoing">
          <div class="drawer-top">
            <h4>연결된 채널을 해제하시겠습니까?</h4>
            <p>연결을 해제한 채널은 재연결이 가능합니다.</p>
          </div>
          <div class="button-group">
            <button class="grey-btn" @click="closepop">취소</button>
            <button class="black-btn" @click="disconnected(userUID, selChannel.id)">확인</button>
          </div>
        </div>
        <!-- if on going camp -->
        <div class="drawer-wrap" v-else>
          <div class="drawer-top">
            <h4>
              진행 중인 협찬/캠페인이 존재하여
              <br />연결해제가 불가능합니다.
            </h4>
          </div>
          <div class="button-group">
            <button class="black-btn" @click="closepop">확인</button>
          </div>
        </div>
      </div>
      <div class="overlay" :class="{ active: isActive }"></div>

      <div class="info-toast-wrap">
        <div class="info-toast" v-show="stylemateStatus === 'request'">관리자가 승인하면 협찬활동이 가능합니다.</div>
        <div
          class="info-toast"
          v-show="stylemateStatus === 'hold' && !isReApplication"
        >15일이 지난 후에 재신청이 가능합니다.</div>
      </div>
    </div>
    <!-- End page content -->
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import ConfirmationModal from "@/components/ConfirmationModal.vue";
import ChannelService from "@/services/ChannelService";
import UserInfoService from '@/services/UserInfoService';
import { inject, onMounted } from 'vue';

export default {
  name: 'NewMember',
  components: { TopNav, ConfirmationModal },
  data() {
    return {
      isActive: false,
      isModalVisible: false,
      checkValue_1: false,
      checkValue_2: false,
      checkValue_3: false,
      checkValue_4: false,
      disabled: true,
      userChannel: '',
      userUID: null,
      userId: null,
      selChannel: null,
      selChannelType: '',
      fbToken: null,
      instagramChannelInfo: null,
      isReApplication: Boolean,
      stylemateStatus: '',
      igAccInfo: null,
      channelId: null,
      isCampaignsOngoing: Boolean,
      isapplyAct: false,
      igResData: null,
      ignormalAccount:[],
      fbResData: null,
      setNewchannel: false
      // igResData: null,
      // fbResData: null,
    }
  },
  setup() {
    const linkedChannel = inject("linkedChannel");

    onMounted(() => {
      // linkedChannel.methods.checkLoginState();
      // console.log('checkLoginState()',linkedChannel.methods.checkLoginState());
    });

    return { linkedChannel };
  },
  async created() {
    // this.refreshChannel();
    this.channelService = new ChannelService();
    this.userInfoService = new UserInfoService();
    this.channelService.loadFacebookSDK(document, "script", "facebook-jssdk");
    this.channelService.initFacebook();
    // let fbaccessToken = await this.channelService.getfbaccessToken();
    this.getUserChannelInfo();
    // if (!fbaccessToken) {
    //   this.$router.push({ name: 'NewMemberJoining' });
    // } else {
    //   this.$router.push({ name: 'NewMemberChannel' });
    // }

  },
  mounted() {
    this.getUserChannelInfo();
    this.channelData();
    this.refreshChannel();


  },
  updated() {
    this.campaignsOngoing(this.userUID);
    // let fbaccessToken = await this.channelService.getfbaccessToken();
    // if (!fbaccessToken) {
    //   this.$router.push({ name: 'NewMemberJoining' });
    // } else {
    //   this.$router.push({ name: 'NewMemberChannel' });
    // }
    // this.upadteStatus(this.userID, this.channelId);

  },
  methods: {
    openlink() {
      console.log("clivk");
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    closepop() {
      this.isActive = false;
    },
    disconnectpopup() {
      this.isActive = true;
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
      // this.channelService.getIgchannels().then(res => {
      //   console.log('3. Igchannels list:', res);
      //   let existchannelId = this.instagramChannelInfo.fbid;
      //   let allChannel = res.data;
      //   let freshChannel = allChannel.filter(channel => {
      //     return channel.instagram_business_account.id !== existchannelId;
      //   });
      //   this.igResData = freshChannel;
      // });
      this.channelService.getIgchannels().then(res => {
        console.log('3. Igchannels list:', res);
        let igBAcc = res.data;
        let existchannelId = this.instagramChannelInfo.fbid;
        let freshChannel = igBAcc.filter(channel => {
          if(typeof channel.instagram_business_account == 'undefined') {
            this.ignormalAccount.push(channel);
          }
          return typeof channel.instagram_business_account !== 'undefined';
        });
        let restFreshChannel = freshChannel.filter(channel => {
          return channel.instagram_business_account.id !== existchannelId;
        });
        this.igResData = restFreshChannel;
        
        console.log('3. Igchannels list:', this.igResData);
        console.log('3. ignormalAccount list:', this.ignormalAccount);
      });


    },

    getUserinfo2() {
      this.userInfoService.getUserInfo().then(res => {
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
          }, 1000);
        }
      });
    },

    getUserChannelInfo() {
      this.userInfoService.getUserInfo().then((res) => {
        this.userUID = res.data.uid;
        this.userId = res.data.id;
        let channelData = res.data.influence.channel;
        this.userChannel = channelData;
        this.userChannellength = channelData.length;
        this.isReApplication = res.data.influence.isReApplication;
        console.log('userChannel:', this.userChannel);
        channelData.map((item) => {
          this.selChannelType = item.type;
          this.stylemateStatus = item.stylemateStatus;
          this.channelId = item.id;
          this.selChannel = item
          this.instagramChannelInfo = item.instagramChannel;
          this.channelId = item.id;
          this.fbToken = item.instagramChannel.accessToken;
        });
      });
    },

    accConnectMethods() {
      this.closeModal();
      this.$router.push({ name: 'AccountConnection' });
    },

    checkALL() {
      if (this.checkValue_1 && this.checkValue_2 && this.checkValue_3 && this.checkValue_4) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    async addIgChannel() {
      let fbaccessToken = await this.channelService.getfbaccessToken();
      if (!fbaccessToken) {
        this.linkedChannel.methods.logInWithFacebook();
      } else {
        console.log('ELSE');
        console.log('this.userChannel.LENGTH: ---', this.userChannel.length);
        if (this.userChannel.length > 0) {
          this.setNewchannel = true;
        } else {
          this.$router.push({ name: 'NewMemberChannel' });
        }
        // this.$router.push({ name: 'NewMemberChannel' });
      }
      // this.applyActivity();
    },

    // channel disconnect
    disconnected(uid, channelId) {
      if (!this.isCampaignsOngoing) {
        console.log('disconnected');
        this.channelService.channelDisconnect(uid, channelId).then((res) => {
          setTimeout(() => {
            this.selChannelType = '';
            this.stylemateStatus = '';
            this.getUserChannelInfo();
            console.log('1selChannelType', this.selChannelType);
          }, 2000);
          this.closepop();
          console.log('channelDisconnect', res);
          console.log('channelDisconnect status:', res.response);
        });
      } else {
        console.log('not disconnected');
      }
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

    // applyActivity
    async applyActivity() {
      console.log('applyActivity');
      let igInfo = this.instagramChannelInfo;
      let info = this.igAccInfo;
      let uid = this.userUID;
      let userid = this.userId;
      let token = {
        "accessToken": igInfo.accessToken,
        "userID": userid,
        "name": igInfo.accountType,
      };
      if (this.seletedPageId) {
        this.channelService.selectChannel(uid, token, info).then((res) => {
          console.log('7. selectChannel res:', res);
          console.log('response:----', res.status);
          this.getUserinfo2();
          this.$router.push({ name: 'NewMemberJoining' });
        });
        //  await this.getUserinfo2();

      } else {
        // alert('no page selected');
        console.log('no page selected');
      }
    },

    // page selected
    selectPage(pageinfo, i) {
      console.log('selectPage:', pageinfo);
      this.isapplyAct = true;
      this.isSeleted = i;
      this.seletedPageId = pageinfo.id;
      this.seletedIguserId = pageinfo.instagram_business_account.id;
      this.getPageInfo(this.seletedPageId);
    },

    // refreshChannel
    refreshChannel() {
      this.getUserChannelInfo();
    },

    // //patch
    upadteStatus(uid, channelId) {
      this.channelService.getIgApproveRequest(uid, channelId).then((res) => {
        console.log('applyActivity res:', res);
        this.refreshChannel();
      });
    },

    //getCampaignsOngoing
    campaignsOngoing(uid) {
      this.channelService.getCampaignsOngoing(uid).then((res) => {
        this.isCampaignsOngoing = res.data.data.length > 0 ? true : false;
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
.contWrap {
  padding: 20px;
}
.connectionList {
  margin-bottom: 30px;
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

.howtoConnect {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
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

.addChannel,
.addChannel li {
  display: flex;
  flex-direction: column;
  align-items: inherit !important;
}
.addChannel li {
  margin-bottom: 40px;
}
.addChannel h4 {
  text-align: justify;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #090909;
  justify-content: flex-start;
}

.addChannel h4 img {
  margin-right: 10px;
}

.addChannel li div.adddivwrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f6f6;
  /* min-height: 80px; */
  border-radius: 6px;
  margin: 10px 0 0 0;
  border: 1px solid #e5e5e5;
}
.addChannel .connectBtn {
  margin: 24px 0;
  background: #fff;
  font-size: 12px;
  color: #25282b;
}
.overHeader {
  display: block;
  width: 100%;
}
.overHeader h2 {
  text-align: center;
}
.overSearch li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  color: #52525b;
}
.overSearch li:last-child {
  margin-bottom: 0;
}
.overSearch li ion-checkbox {
  margin: 0 10px 0 0;
}
.overSearch li.checkboxWrap .check-container {
  margin-bottom: 0;
  color: #52525b !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
.footBtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.footBtnbutton {
  width: 50%;
  height: 60px;
  background: #e5e5e5;
  color: #797979;
}
.footBtnBlack {
  background: #090909;
}
.footBtnBlack[disabled] {
  cursor: not-allowed;
}

.newChannel {
  display: flex;
  flex-direction: column;
  align-items: inherit !important;
  margin: 10px 0 0 0;
}
.addChannel li div.channelLeft {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  border: 0;
  background: transparent;
}
.newChannel li {
  margin-bottom: 10px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center !important;
}
.newChannel li:hover,
.newChannel li.active {
  border-color: #5700ff;
}
.newChannel li.disable {
  background: #f7f7f7;
  border: 1px solid #e5e5e5;
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
}
.newChannel li .channelBtn.greyBg {
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
.info-toast {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 40px;
  position: absolute;
  height: 32px;
  left: 11.11%;
  right: 11.39%;
  top: calc(50% - 32px / 2 + 316px);
  background: #25282b;
  opacity: 0.9;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #f7f7f7;
}
.dbl-btn-wrap {
  display: flex;
  flex-direction: column;
}
.dbl-btn-wrap button {
  margin-bottom: 10px;
}
.dbl-btn-wrap button:last-child {
  margin-bottom: 0px;
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
</style>