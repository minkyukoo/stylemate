<template>
  <div class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="채널연결" />
    <!-- End header -->
    <!-- page content -->
    <div class="main-wrap">
      <div class="contWrap">
        {{ linkedChannel.state.fbDetails }}
        {{ linkedChannel.state.isConnected }}
        <ul class="connectionList">
          <li>
            <div>
              <label>채널연결</label>
            </div>
            <div>
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
            <div>
              <button class="connectBtn" type="button" @click="addIgChannel">+ 연결방법 보기</button>
            </div>
          </li>
          <li>
            <h4>
              <img src="@/assets/icons/youtube.svg" /> Youtube
            </h4>
            <div>
              <button class="connectBtn" type="button">+ 연결방법 보기</button>
            </div>
          </li>
          <li>
            <h4>
              <img src="@/assets/icons/tiktok.svg" /> TikTok
            </h4>
            <div>
              <button class="connectBtn" type="button">+ 연결방법 보기</button>
            </div>
          </li>
        </ul>
      </div>
      <ConfirmationModal v-show="isModalVisible" @close="closeModal" class="overLapmodal">
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
                  <li>
                    <div>
                      <ion-checkbox color="primary"></ion-checkbox>
                    </div>
                    <div>인스타그램 계정이 프로페셔널/비즈니스 계정인가요?</div>
                  </li>
                  <li>
                    <div>
                      <ion-checkbox color="primary"></ion-checkbox>
                    </div>
                    <div>인스타그램 계정이 프로페셔널/비즈니스 계정인가요?</div>
                  </li>
                  <li>
                    <div>
                      <ion-checkbox color="primary"></ion-checkbox>
                    </div>
                    <div>인스타그램 계정이 프로페셔널/비즈니스 계정인가요?</div>
                  </li>
                  <li>
                    <div>
                      <ion-checkbox color="primary"></ion-checkbox>
                    </div>
                    <div>인스타그램 계정이 프로페셔널/비즈니스 계정인가요?</div>
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
            <button type="button" class="footBtnbutton footBtnBlack">다음</button>
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
import { inject } from 'vue';

export default {
  name: 'NewMember',
  components: { TopNav, ConfirmationModal },
  data() {
    return {
      isModalVisible: false,
      // igResData: null,
      // fbResData: null,
    }
  },
  setup() {
    const linkedChannel = inject("linkedChannel");

    // onMounted(() => {
    //   linkedChannel.methods.logInWithFacebook();
    // });

    return { linkedChannel };
  },
  created() {
    this.channelService = new ChannelService();
    this.channelService.loadFacebookSDK(document, "script", "facebook-jssdk");
    this.channelService.initFacebook();
  },
  updated() {
    if (this.linkedChannel.state.isConnected === 'connected') {
      console.log('connected:', this.linkedChannel.state.isConnected);
      this.$router.push({ name: 'NewMemberChannel' });
    }
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

    addIgChannel() {
      // this.logInWithFacebook();
      this.linkedChannel.methods.logInWithFacebook();
    },

    // fbData() {
    //   // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    //   console.log("Welcome!  Fetching your information.... ");
    //   window.FB.api("/107832208496167?fields=name%2Cpicture", (response) => {
    //     console.log('facebook: ', response);
    //     this.fbResData = response;
    //   });
    // },

    // igData() {
    //   // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    //   console.log("Welcome!  Fetching your information.... ");
    //   return window.FB.api("/107832208496167/accounts", (response) => {
    //     console.log('Instagram Channel: ', response.data);
    //     this.igResData = response.data;
    //   });
    // },

    statusChangeCallback(response) {
      // Called with the results from FB.getLoginStatus().
      console.log("statusChangeCallback");
      console.log(response); // The current login status of the person.
      if (response.status === "connected") {
        // Logged into your webpage and Facebook.
        console.log("loged into this webpage syccessfully.");
        // this.fbData();
        // this.igData();
        // this.$router.push({ name: 'NewMemberChannel' });
      } else {
        // Not logged into your webpage or we are unable to tell.
        console.log("Please log into this webpage.");
      }
    },

    checkLoginState() {
      // Called when a person is finished with the Login Button.
      window.FB.getLoginStatus((response) => {
        this.statusChangeCallback(response);
      });
    },

    async logInWithFacebook() {
      window.FB.login((response) => {
        if (response.authResponse) {
          this.checkLoginState();
          return true;
        } else {
          return false;
        }
      }, { scope: 'public_profile,instagram_basic,pages_show_list' });
      return false;
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

.addChannel li div {
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
.overSearch li ion-checkbox {
  margin: 0 10px 0 0;
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
</style>