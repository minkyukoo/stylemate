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
            <ul class="newChannel" v-if="selChannelType === 'instagram'">
              <li>
                <div class="channelLeft">
                  <div class="channelImg">
                    <!-- <img src="@/assets/icons/refresh.svg" /> -->
                    <img :src="selChannel.instagramChannel.thumbnailOriginalUrl" />
                  </div>
                  <div class="channelDec">
                    <!-- <h4>{{ account.instagram_business_account.name }}</h4> -->
                    <p>{{ selChannel.instagramChannel.pageName }}</p>
                    {{ stylemateStatus }}
                  </div>
                </div>
                <div class="btn-wrap">
                  <!-- <button class="channelBtn" type="button">선택</button> -->
                  <button
                    class="channelBtn"
                    type="button"
                    @click="disconnected(userUID, selChannel.id)"
                  >disconnect</button>
                  <div class="dbl-btn-wrap" v-if="stylemateStatus === 'approve'">
                    <button class="channelBtn" type="button">Linked Account</button>
                    <button class="channelBtn" type="button" @click="disconnected">disconnect</button>
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
                  >selete</button>
                </div>
              </li>
            </ul>
            <div class="adddivwrap">
              <button class="connectBtn" type="button" @click="addIgChannel">+ 연결방법 보기</button>
            </div>
          </li>
          <li>
            <h4>
              <img src="@/assets/icons/youtube.svg" /> Youtube
            </h4>
            <div class="adddivwrap">
              <button class="connectBtn" type="button">+ 연결방법 보기</button>
            </div>
          </li>
          <li>
            <h4>
              <img src="@/assets/icons/tiktok.svg" /> TikTok
            </h4>
            <div class="adddivwrap">
              <button class="connectBtn" type="button">+ 연결방법 보기</button>
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
                      <span class="checkmark"></span>인스타그램 계정이 프로페셔널/비즈니스 계정인가요?
                    </label>
                  </li>
                  <li class="checkboxWrap">
                    <label class="check-container">
                      <input type="checkbox" v-model="checkValue_3" @change="checkALL" />
                      <span class="checkmark"></span>인스타그램 계정이 프로페셔널/비즈니스 계정인가요?
                    </label>
                  </li>
                  <li class="checkboxWrap">
                    <label class="check-container">
                      <input type="checkbox" v-model="checkValue_4" @change="checkALL" />
                      <span class="checkmark"></span>인스타그램 계정이 프로페셔널/비즈니스 계정인가요?
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
      isModalVisible: false,
      checkValue_1: false,
      checkValue_2: false,
      checkValue_3: false,
      checkValue_4: false,
      disabled: true,
      userUID: null,
      userId: null,
      selChannel: null,
      selChannelType: null,
      stylemateStatus: null,
      fbToken: null,
      instagramChannelInfo: null,
      isReApplication: null,
      igAccInfo: null,
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
  },
  updated() {
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

    getUserChannelInfo() {
      this.userInfoService.getUserInfo().then((res) => {
        this.userUID = res.data.uid;
        this.userId = res.data.id;
        let channelData = res.data.influence.channel;
        channelData.map((item) => {
          this.selChannelType = item.type;
          this.stylemateStatus = item.stylemateStatus;
          this.selChannel = item

          this.instagramChannelInfo = item.instagramChannel;
          this.isReApplication = item.isReApplication;
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
      this.$router.push({ name: 'NewMemberChannel' });

      // let fbaccessToken = await this.channelService.getfbaccessToken();
      // if (!fbaccessToken) {
      //   this.linkedChannel.methods.logInWithFacebook();
      // } else {
      //   this.$router.push({ name: 'NewMemberChannel' });
      // }
      this.applyActivity();
    },

    // channel disconnect
    disconnected(uid, channelId) {
      console.log('disconnected');
      this.channelService.channelDisconnect(uid, channelId).then((res) => {
        this.getUserChannelInfo();
        console.log('channelDisconnect', res);
        console.log('channelDisconnect status:', res.response);
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
        alert('no page selected');
      }
    },

    refreshChannel() {
      this.getUserChannelInfo();
    },


  },
};
</script>

<style scoped>
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
</style>