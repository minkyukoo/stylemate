<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="회원정보" />
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="contWrap">
        <ul>
          <li>
            <div>
              <label>계정정보 수정</label>
            </div>
          </li>
          <li>
            <div>
              <span class="labelGap">이메일</span>
            </div>
            <div>
              <span>
                <input
                  type="text"
                  :value="email"
                  readonly
                  placeholder="mediance@mediance.co.kr"
                />
              </span>
            </div>
          </li>
          <li>
            <div>
              <span class="labelGap">기존 비밀번호</span>
            </div>
            <div>
              <span>
                <input type="password" v-model="oldPass" />
              </span>
            </div>
          </li>
          <li>
            <div>
              <span class="labelGap">새 비밀번호</span>
            </div>
            <div>
              <span>
                <input type="password" v-model="newPass" />
              </span>
            </div>
          </li>
          <li>
            <div>
              <span class="labelGap">새 비밀번호 확인</span>
            </div>
            <div>
              <span>
                <input type="password" v-model="confirmPass" />
              </span>
            </div>
          </li>
          <li>
            <div>
              <span class="labelGap">휴대폰 번호 </span>
            </div>
            <div class="inlineForm">
              <div class="notiWrap">
                <vue-select placeholder="SKT" :options="options"> </vue-select>
              </div>
              <div class="codeWrap">
                <span>010-</span>
                <input type="text" maxlength="8" v-model="mobile" />
              </div>
              <div class="contWrapbtn">
                <button
                  type="button"
                  @click="sendOtp"
                  style="white-space: nowrap"
                >
                  인증번호
                </button>
              </div>
            </div>
          </li>
          <li v-show="otp">
            <div class="inlineTime">
              <span class="labelGap"
                ><input
                  v-model="verificationCode"
                  type="text"
                  placeholder="인증번호 입력"
                  style="border: none"
              /></span>
              <span class="labelGap">
                <vue-countdown
                  v-if="counting"
                  :time="180000"
                  @end="onCountdownEnd"
                  v-slot="{ minutes, seconds }"
                  style="color: blue"
                >
                  {{ minutes }}:{{ seconds }}
                </vue-countdown>
                <button style="background-color: blue; color: #fff" v-else>
                  Resend
                </button>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="button-group">
        <button class="black-btn" @click="confirm">신청하기</button>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import UserInfoService from "@/services/UserInfoService";
// import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from "@/components/TopNav.vue";
// import MyTop from '@/components/MyPageTop.vue';
// import MyPageDetails from '@/components/MyPageDetails.vue';
// import Login from '@/views/pages/Login.vue'
// Import Swiper styles
// import "swiper/css";

// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
// import { FreeMode, Scrollbar, Mousewheel } from "swiper";

import VueNextSelect from "vue-next-select";
import VueCountdown from "@chenfengyuan/vue-countdown";
export default {
  name: "ChangeUserinfo",
  components: {
    TopNav,
    IonContent,
    IonPage,
    "vue-select": VueNextSelect,
    VueCountdown,
  },
  data() {
    return {
      uid: localStorage.getItem("userId"),
      otp: false,
      email: "",
      oldPass: "",
      newPass: "",
      confirmPass: "",
      mobile: "",
      ids: "",
      counting: false,
      verificationCode: "",
    };
  },
  created() {
    this.userInfoService = new UserInfoService();
  },
  mounted() {
    this.userInfoService.getUserInfo().then((res) => {
      // console.log(res.data.email);
      this.email = res.data.email;
      this.ids = res.data.id;
    });
  },
  // mounted() {
  //   var queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   var token = urlParams.get('token')
  //   localStorage.setItem('token', token);
  //   console.log(urlParams);
  //   console.log(token);
  // }
  setup() {
    const options = ["SKT", "SKT 1", "SKT 2", "SKT 3"];
    return { options };
  },
  methods: {
    openlink() {
      console.log("clivk");
    },
    changePass() {
      this.userInfoService
        .changePassword(this.uid, this.oldPass, this.newPass, this.confirmPass)
        .then(() => {
          alert("password changed");
        });
    },
    confirm() {
      if (this.oldPass == "" || this.newPass == "" || this.confirmPass == "") {
        alert("please fill the password feilds");
      } else {
        this.changePass();
      }
    },
    sendOtp() {
      if (this.mobile != "" && this.mobile.length == 8) {
        let minutesToAdd = 3;
        let currentDate = new Date();
        let futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);
        this.userInfoService
          .telAuth(
            `010${this.mobile}`,
            this.email,
            this.ids,
            this.formatDate(futureDate)
          )
          .then(() => {
            this.otp = true;
            this.counting = true;
            alert("Otp sent");
          });
        console.log(this.formatDate(futureDate));
      }
    },
    onCountdownEnd: function () {
      this.counting = false;
    },
    confirmOtp() {
      this.userInfoService
        .confirmPass(this.verificationCode, this.email, `010${this.mobile}`)
        .then(() => {
          alert("password confirmed");
        });
    },
    formatDate(value) {
      const date = new Date(value);
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear();
      var hr = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      return (value =
        yyyy + "-" + mm + "-" + dd + " " + hr + ":" + min + ":" + sec);
    },
  },
};
</script>

<style scoped>
.contWrap {
  padding: 20px 20px 160px;
}
.codeWrap {
  position: relative;
}
.codeWrap span {
  position: absolute;
  left: 15px;
  top: 15px;
  color: #c4c4c4;
  font-size: 14px;
}
.codeWrap input[type="text"] {
  padding-left: 50px !important;
}
.contWrap input[type="text"],
.contWrap input[type="password"],
.contWrapbtn [type="button"] {
  border: 1px solid#E5E5E5;
  background: none;
  width: 100%;
  height: 46px;
  font-size: 14px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
}
.labelGap {
  margin-bottom: 8px;
  display: flex;
}
.inlineForm {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -4px;
}
.inlineForm div {
  margin: 0 2px;
}

.inlineTime {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.inlineTime span:first-child {
  color: #c4c4c4;
}

.inlineTime span {
  color: #9d6aff;
  font-size: 14px;
  font-weight: 400;
}

.contWrap ul li {
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  flex-direction: column;
  border-bottom: 1px solid #f6f6f6;
  padding: 10px 0;
}
.contWrap li label {
  color: #c4c4c4;
  font-size: 12px;
  font-weight: 700;
}
.contWrap ul li lspanabel {
  color: #25282b;
  font-size: 14px;
  font-weight: 400;
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

.button-group {
  bottom: 0;
  max-width: 500px;
  position: fixed;
  width: 100%;
}
.button-group button {
  width: 100%;
  display: block;
  align-items: center;
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