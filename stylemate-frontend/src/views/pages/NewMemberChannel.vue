<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="채널연결" />
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
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
          <li class="active" v-for="(account, i) of igResData" :key="i + 1" @click="select">
            <div class="channelLeft">
              <div class="channelImg">
                <!-- <img src="@/assets/icons/refresh.svg" /> -->
                <img :src="account.instagram_business_account.profile_picture_url" />
              </div>
              <div class="channelDec">
                <h4>Acc ID: {{account.instagram_business_account.id}}</h4>
                <h4>{{ account.instagram_business_account.name }}</h4>
                <p>{{ fbResData.name }}</p>
              </div>
            </div>
            <div class="btn-wrap">
              <!-- <button class="channelBtn" type="button">선택</button> -->
              <div class="dbl-btn-wrap" v-if="stylemateStatus === 'approve'">
                <button class="channelBtn" type="button">Linked Account</button>
                <button class="channelBtn" type="button">disconnect</button>
              </div>
              <button
                v-else-if="stylemateStatus === 'request'"
                class="channelBtn"
                type="button"
              >checking</button>
              <button v-else-if="stylemateStatus === 'hold' && !isReApplication" class="channelBtn" type="button">hold</button>
              <button v-else-if="stylemateStatus === 'hold' && isReApplication" class="channelBtn" type="button">reapplication</button>
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
          <li class="disable">
            <div class="channelLeft">
              <div class="channelImg">
                <img src="@/assets/icons/refresh.svg" />
              </div>
              <div class="channelDec">
                <h4>일이삼사오육칠팔...</h4>
                <p>일이삼사오육칠팔구십...</p>
              </div>
            </div>
            <div>
              <button class="channelBtn" type="button">선택</button>
            </div>
          </li>
        </ul>
        <!-- {{ igResData }} -->
        <!-- {{ userChanneldata }} -->
      </div>
      <div class="subscribe-wrap">
        <button class="black-btn">활동 신청하기</button>
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
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import { inject, onMounted } from 'vue';
// import { useRouter } from 'vue-router';
import ChannelService from "@/services/ChannelService";
import UserInfoService from "@/services/UserInfoService";

export default {
  name: "NewMemberChannel",
  components: { TopNav, IonContent, IonPage },
  data() {
    return {
      isActive: false,
      igResData: null,
      fbResData: null,
      stylemateStatus: '',
      isReApplication: null,

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
  created() {
    this.channelService = new ChannelService();
    this.userInfoservice = new UserInfoService();
    // this.fbData();
    // this.igData();
    if (!this.channelService.getfbaccessToken() && !this.channelService.getfbuserId()) {
      this.$router.push({ name: 'NewMemberJoining' });
    }
    this.userInfoservice.getUserInfo().then(res => {
      console.log('infores data:', res.data);
      console.log('infores channel:', res.data.influence.channel);
      this.userChanneldata = res.data.influence.channel;
      let channelData = res.data.influence.channel;
      channelData.map(
        (item) => {
          this.stylemateStatus = item.stylemateStatus;
          this.isReApplication = item.isReApplication;
        }
      )
    });
  },
  updated() {
    if (!this.channelService.getfbaccessToken() && !this.channelService.getfbuserId()) {
      this.$router.push({ name: 'NewMemberJoining' });
    }
  },
  mounted() {
    this.channelData();
  },
  methods: {
    openlink() {
      console.log("clivk");
    },
    hideSponserButton() {
      this.isActive = !this.isActive;
    },

    channelData() {
      this.channelService.getfbUser().then(res => {
        console.log('fbUser res:', res);
        this.fbResData = res;
      });

      this.channelService.getIgchannels().then(res => {
        console.log('Igchannels list:', res);
        this.igResData = res.data;
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