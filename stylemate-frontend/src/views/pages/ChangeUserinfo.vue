<template>
  <ion-page class="main-container relative">
    <TopNav headerTitle="회원정보 변경" />
    <ion-content :fullscreen="true">
      <div class="changeMemberInfoWrap">
        <div class="chnageInfoHead">
          <p>계정정보 수정</p>
        </div>
        <div class="form-wrap">
          <div class="input-grp">
            <label>이메일</label>
            <input
              type="text"
              :value="email"
              placeholder="mediance@mediance.co.kr"
              disabled
            />
          </div>
          <!-- password-group start -->
          <div class="password-grp" v-show="savediv">
            <div class="input-grp">
              <label>기존 비밀번호</label>
              <input
                type="password"
                placeholder="기존 비밀번호 입력"
                v-model="oldPass"
              />
            </div>
            <div class="input-grp">
              <label>새 비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호 입력 (영문+숫자+특수기호 조합)"
                v-model="newPass"
              />
            </div>
            <div class="input-grp">
              <label>새 비밀번호 확인</label>
              <input
                type="password"
                placeholder="비밀번호 입력 확인"
                v-model="confirmPass"
              />
            </div>
            <div class="input-grp">
              <button
                class="white-btn"
                type="button"
                name="save"
                @click="savepassword"
              >
                비밀번호 저장
              </button>
            </div>
          </div>
          <div class="input-grp" v-show="changepwd">
            <button
              class="white-btn"
              type="button"
              name="change"
              @click="changepassword"
            >
              비밀번호 변경
            </button>
          </div>
          <!-- password-group end -->
          <div class="input-grp">
            <label>휴대폰 번호 </label>
            <div class="inlineForm">
              <div class="notiWrap">
                <vue-select
                  placeholder="SKT"
                  :options="options"
                  :close-on-select="true"
                >
                </vue-select>
              </div>
              <div class="codeWrap">
                <span>010-</span>
                <input
                  type="text"
                  maxlength="9"
                  v-model="mobile"
                  :close-on-select="true"
                  id="tbNum"
                  @input="acceptNumber"
                />
              </div>
              <div class="contWrapbtn">
                <button type="button" @click="sendOtp">인증번호</button>
              </div>
            </div>
          </div>
          <div class="timerWrap" v-show="otp">
            <div class="input-grp">
              <input
                type="text"
                placeholder="인증번호 입력"
                v-model="verificationCode"
              />
              <span class="timer" v-show="countd"
                ><vue-countdown
                  v-if="counting"
                  :time="180000"
                  @end="onCountdownEnd"
                  v-slot="{ minutes, seconds }"
                  style="color: blue"
                >
                  {{ minutes }}:{{ seconds }}
                </vue-countdown></span
              >
            </div>
            <div class="input-grp">
              <button class="black-btn" type="button" @click="confirmOtp">
                인증번호 확인
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="button-group">
        <button class="black-btn-fixed" :disabled="confirmBtn" @click="confirm">
          확인
        </button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import VueNextSelect from "vue-next-select";
import UserInfoService from "@/services/UserInfoService";
import VueCountdown from "@chenfengyuan/vue-countdown";
import Toast from "@/alert/alert.js";
// import Swal from "sweetalert2";
export default {
  name: "ChangeMemberInfo",
  components: {
    TopNav,
    IonContent,
    IonPage,
    "vue-select": VueNextSelect,
    VueCountdown,
  },
  setup() {
    const options = ["SKT", "SKT 1", "SKT 2", "SKT 3"];
    return { options };
  },
  data() {
    return {
      changepwd: true,
      savediv: false,
      uid: localStorage.getItem("userId"),
      otp: false,
      email: "",
      oldPass: "",
      newPass: "",
      confirmPass: "",
      mobile: "",
      ids: "",
      countd: true,
      counting: false,
      verificationCode: "",
      error: {
        oldPass: "",
        newPass: "",
        confirmPass: "",
      },
      confirmBtn: true,
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
  // },
  methods: {
    acceptNumber() {
      var x = this.mobile.replace(/\D/g, "").match(/(\d{0,4})(\d{0,4})/);
      this.mobile = !x[2] ? x[1] : x[1] + (x[2] ? "-" + x[2] : "");
    },
    changepassword() {
      this.confirmBtn = false;
      this.savediv = true;
      this.changepwd = false;
    },
    openlink() {
      console.log("clivk");
    },
    confirm() {
      this.savediv = false;
      this.changepwd = true;
      this.otp = false;
      this.counting = false;
    },
    savepassword() {
      this.confirmBtn = false;
      if (this.oldPass == "" || this.newPass == "" || this.confirmPass == "") {
        Toast.fire({ title: "비밀번호를 입력해주세요." });
      } else if (this.newPass !== this.confirmPass) {
        Toast.fire({ title: "비밀번호가 일치하지 않습니다." });
      } else if (this.oldPass == this.newPass) {
        Toast.fire({ title: "기존비밀번호를 사용하실 수 없습니다." });
      } else {
        this.userInfoService
          .changePassword(
            this.uid,
            this.oldPass,
            this.newPass,
            this.confirmPass
          )
          .then(() => {
            // Swal.fire("Good job!", "password changed!", "success");
            Toast.fire({ title: "비밀번호가 변경되었습니다." });
            this.oldPass = "";
            this.newPass = "";
            this.confirmPass = "";
          })
          .catch((err) => {
            console.log(err.response.status);
            if (err.response.status == 412) {
              Toast.fire({ title: "비밀번호를 잘못 입력하였습니다." });
            } else if (err.response.status == 422) {
              Toast.fire({
                title: "비밀번호 형식에 맞지 않습니다.",
              });
            }
          });
      }
    },
    // confirm() {
    //   const pass_regex = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/;
    //   const ok = pass_regex.exec(this.newPass);

    // },
    sendOtp() {
      if (this.mobile == "") {
        Toast.fire({ title: "휴대폰번호를 입력해주세요." });
      } else if (this.mobile.length !== 9) {
        Toast.fire({ title: "올바른 휴대폰번호를 입력해주세요." });
      } else {
        let minutesToAdd = 3;
        let currentDate = new Date();
        let futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);
        this.userInfoService
          .telAuth(
            `010${this.mobile.replace(/-/g, "")}`,
            this.email,
            this.ids,
            this.formatDate(futureDate)
          )
          .then(() => {
            this.countd = true;
            this.confirmBtn = false;
            this.otp = true;
            this.counting = true;
            // alert("Otp sent");
            // Toast.fire({ title: "Otp sent" });
          });
        console.log(this.formatDate(futureDate));
      }
    },
    onCountdownEnd: function () {
      this.counting = false;
    },
    confirmOtp() {
      if (this.verificationCode == "") {
        Toast.fire({ title: "인증번호를 입력해주세요." });
        // Toast.fire({ title: "verification code is not found." });
      } else {
        this.userInfoService
          .confirmPass(this.verificationCode, this.email, `010${this.mobile}`)
          .then((res) => {
            // alert("password confirmed");
            console.log(res.response.status);
            if (res.response.status === 200) {
              this.countd = false;
              Toast.fire({ title: "휴대폰인증이 완료되었습니다." });
              // Swal.fire("Good job!", "You are verified!", "success");
            } else if (res.response.status === 412) {
              Toast.fire({
                title: "인증번호가 잘못 입력되었습니다.",
              });
            }
          });
      }
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
.changeMemberInfoWrap {
  padding: 20px 16px 160px;
}
.changeMemberInfoWrap input[type="text"],
.changeMemberInfoWrap input[type="password"],
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
.chnageInfoHead {
  border-bottom: 1px solid #f7f7f7;
}
.chnageInfoHead p {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #c4c4c4;
  padding-bottom: 11px;
}
.input-grp {
  margin-bottom: 19px;
  display: flex;
  flex-direction: column;
}
.input-grp label {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #25282b;
  margin-bottom: 8px;
}
.input-grp input {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  padding: 14px 16px;
}
.input-grp input:disabled {
  background: #f7f7f7;
}
.white-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #595959;
  border: 1px solid #25282b;
  border-radius: 4px;
  background: #ffffff;
  width: 100%;
  padding: 14px;
}
.black-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  border: 1px solid #090909;
  border-radius: 4px;
  background: #090909;
  width: 100%;
  padding: 14px;
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
.notiWrap {
  min-width: 90px;
  width: 25%;
}
.notiWrap .vue-select {
  width: 100%;
}
.codeWrap {
  position: relative;
  flex-grow: 1;
}
.codeWrap span {
  position: absolute;
  left: 15px;
  top: 13px;
  color: #000;
  font-size: 14px;
}
.codeWrap input[type="text"] {
  padding-left: 44px !important;
}
.button-group {
  bottom: 0;
  max-width: 500px;
  position: fixed;
  width: 100%;
}
.button-group .black-btn-fixed {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  padding: 21px;
  color: #ffffff;
  background: #090909;
}
.button-group .black-btn-fixed[disabled] {
  cursor: not-allowed;
}
button {
  white-space: nowrap;
}
.timerWrap .input-grp {
  position: relative;
}
.timerWrap .input-grp input {
  padding-right: 55px;
}
.timerWrap .input-grp .timer {
  position: absolute;
  top: 50%;
  right: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #9d6aff;
  transform: translate(0, -50%);
}
</style>