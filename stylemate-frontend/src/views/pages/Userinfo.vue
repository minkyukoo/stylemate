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
              <label>계정정보</label>
            </div>
            <div>
              <img
                src="@/assets/icons/arrow-right.svg"
                @click="$router.push({ name: 'ChangeUserinfo' })"
              />
            </div>
          </li>
          <li>
            <div>
              <span>이메일</span>
            </div>
            <div>
              <span>{{ userDetails.email }}</span>
            </div>
          </li>
          <li>
            <div>
              <span>휴대폰 번호</span>
            </div>
            <div>
              <span>{{ userDetails.tel }}</span>
            </div>
          </li>
        </ul>
        <ul class="secList">
          <li>
            <div>
              <label>배송지(기본)</label>
            </div>
          </li>
          <li v-show="addr">
            <router-link to="/deliveryaddress">
              <div>{{ addres }}</div>
            </router-link>
          </li>
          <li v-show="enroll">
            <button type="button" @click="enrollment">등록</button>
          </li>
        </ul>
        <ul class="thirdList">
          <li class="head">
            <div>
              <label>수신동의</label>
            </div>
            <!-- <div>
              <img
                src="@/assets/icons/arrow-right.svg"
              />
            </div>-->
          </li>
          <!-- <li>
            <div>
               <ion-checkbox
                color="primary"
                :checked="marketing"
                @click="market($event)"
              ></ion-checkbox> 
              <input
                type="checkbox"
                @change="updateInfo"
                v-bind:value="marketing"
                v-model="marketing"
              />
            </div>
            <div>마케팅 광고 활용 동의 (선택)</div>
          </li>
          <li>
            <div>
              <ion-checkbox
                color="primary"
                :checked="compain"
                @click="promotion($event)"
              ></ion-checkbox> 
              <input
                type="checkbox"
                @change="updateInfo"
                v-bind:value="compain"
                v-model="compain"
              />
            </div>
            <div>캠페인 제안 받기 (선택)</div>
          </li>
          <li>
            <div>
               <ion-checkbox
                color="primary"
                :checked="newsletter"
                @click="news($event)"
              ></ion-checkbox> 
              <input
                type="checkbox"
                @change="updateInfo"
                v-bind:value="newsletter"
                v-model="newsletter"
              />
            </div>
            <div>뉴스레터 구독 (선택)</div>
          </li>-->
          <li class="checkboxWrap">
            <label class="check-container">
              <input
                type="checkbox"
                checked="checked"
                @change="updateInfo"
                v-bind:value="marketing"
                v-model="marketing"
              />
              <span class="checkmark"></span>마케팅 광고 활용 동의 (선택)
            </label>
          </li>
          <li class="checkboxWrap">
            <label class="check-container">
              <input
                type="checkbox"
                checked="checked"
                @change="updateInfo"
                v-bind:value="compain"
                v-model="compain"
              />
              <span class="checkmark"></span>캠페인 제안 받기 (선택)
            </label>
          </li>
          <li class="checkboxWrap">
            <label class="check-container">
              <input
                type="checkbox"
                @change="updateInfo"
                v-bind:value="newsletter"
                v-model="newsletter"
              />
              <span class="checkmark"></span>뉴스레터 구독 (선택)
            </label>
          </li>
        </ul>
        <ul class="forthList">
          <li>
            <div>
              <label>푸시설정</label>
            </div>
          </li>
          <li>
            <div>협찬활동, 서비스 이용, 신규 협찬안내 등</div>
            <div>
              <Toggle v-model="value" />
              <label class="switch">
                <input
                  type="checkbox"
                  @change="updateInfo"
                  v-bind:value="pushNotification"
                  v-model="pushNotification"
                />
                <span class="slider round"></span>
              </label>
              <!-- <input type="toggle" @change="updateInfo" v-bind:value="marketing" v-model="marketing"/> -->
              <!-- <ion-toggle
                color="dark"
                :checked="pushNotification"
                @click="push($event)"
              ></ion-toggle>-->
            </div>
          </li>
          <li>
            <div @click="deleteAccount = true" @mouseleave="deleteAccount = false">
              <span
                v-if="deleteAccount"
                v-show="deleteAccount"
              >"Are you sure, you want to delete your account permantly"</span>
              <span class="withdrawTxt" v-else>회원탈퇴</span>
            </div>
          </li>
        </ul>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { inject } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from "@/components/TopNav.vue";
import UserInfoService from "@/services/UserInfoService";
// import MyTop from '@/components/MyPageTop.vue';
// import MyPageDetails from '@/components/MyPageDetails.vue';
// import Login from '@/views/pages/Login.vue'
// Import Swiper styles
// import "swiper/css";

// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
// import { FreeMode, Scrollbar, Mousewheel } from "swiper";

export default {
  name: "Userinfo",
  components: { TopNav, IonContent, IonPage },
  // mounted() {
  //   var queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   var token = urlParams.get('token')
  //   localStorage.setItem('token', token);
  //   console.log(urlParams);
  //   console.log(token);
  // }
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  data() {
    return {
      deleteAccount: false,
      userDetails: {},
      marketing: false,
      compain: false,
      newsletter: false,
      pushNotification: false,
      enroll: false,
      addr: false,
      addres: "",
      value: true,
    };
  },

  methods: {
    updateInfo() {
      this.userInfoService
        .updatemyInfo(
          this.userDetails.uid,
          this.userDetails.id,
          this.userDetails.name,
          this.userDetails.tel,
          this.userDetails.telAgency,
          this.userDetails.isTelCertified,
          String(this.marketing),
          String(this.compain),
          String(this.newsletter),
          this.userDetails.influence.isInformationPoint,
          String(this.pushNotification),
        )
        .then(() => { });
    },
    openlink() {
      console.log("clivk");
    },
    enrollment() {
      this.$router.push({ name: "ShippingInfo" });
    },
  },
  created() {
    this.userInfoService = new UserInfoService();
  },
  mounted() {
    this.userInfoService.getUserInfo().then((res) => {
      console.log('userdetails', res);
      this.userDetails = res.data;
      console.log(res.data)
      this.marketing = res.data.influence.agreeMarketing;
      this.compain = res.data.influence.agreeCampaign;
      this.newsletter = res.data.influence.agreeNewsletter;
      this.pushNotification = res.data.influence.agreeStylematePush;
      localStorage.setItem("userId", res.data.uid);
      this.userInfoService.getUserdeliveries(res.data.uid).then((res) => {
        console.log(res);
        localStorage.setItem("del_list", JSON.stringify(res));
        if (res.length > 0) {
          this.addres = `${res[0].address1} , ${res[0].address2}`;
          this.enroll = false;
          this.addr = true;
        } else {
          this.enroll = true;
          this.addr = false;
        }
      });
    });
  },
};
</script>

<style scoped>
.contWrap {
  padding: 20px 20px 150px;
}
.contWrap ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.withdrawTxt {
  font-size: 12px;
  line-height: 16px;
  color: #797979;
  text-decoration: underline;
}
</style>