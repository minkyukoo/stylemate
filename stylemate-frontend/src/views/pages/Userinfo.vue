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
                <label>계정정보</label></div>
              <div>
                <img src="@/assets/icons/arrow-right.svg" @click="$router.push({ name: 'ChangeUserinfo' })"/>
              </div>
            </li>
            <li>
              <div>
                <span>이메일</span>
              </div>
              <div>
                <span>{{userDetails.email}}</span>
              </div>
            </li>
            <li>
              <div>
                <span>휴대폰 번호</span>
              </div>
              <div>
                <span>{{userDetails.tel}}</span>
              </div>
            </li>
          </ul>
          <ul class="secList">
            <li>
              <div>
                <label>계정정보</label></div>
            </li>
            <li>
                <button type="button" @click="enrollment()">등록</button>
            </li>
          </ul>
          <ul class="thirdList">
            <li>
              <div>
                <label>수신동의</label></div>
            </li>
            <li>
              <div>
                <ion-checkbox color="primary"></ion-checkbox>
              </div>
              <div>
                마케팅 광고 활용 동의 (선택)
              </div>
            </li>
            <li>
              <div>
                <ion-checkbox color="primary"></ion-checkbox>
              </div>
              <div>
                캠페인 제안 받기 (선택)
              </div>
            </li>
            <li>
              <div>
                <ion-checkbox color="primary"></ion-checkbox>
              </div>
              <div>
                뉴스레터 구독 (선택)
              </div>
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
                 <ion-toggle color="dark"></ion-toggle>
               </div>
            </li>
            <li>
               <div @click="deleteAccount = true" @mouseleave="deleteAccount = false">
                 <span v-if="deleteAccount" v-show="deleteAccount">"Are you sure, you want to delete your account permantly"</span>
                 <span v-else> 회원탈퇴 </span>
                 </div>
            </li>
          </ul>
        </div>
    </ion-content>
    <!-- End page content -->

    
  </ion-page>
</template>

<script>
import { IonPage,  IonContent, } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from '@/components/TopNav.vue';
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
  name: 'Userinfo',
  components: { TopNav,  IonContent, IonPage },
  // mounted() {
  //   var queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   var token = urlParams.get('token')
  //   localStorage.setItem('token', token);
  //   console.log(urlParams);
  //   console.log(token);
  // }
  data() {
    return{
      deleteAccount: false,
      userDetails:{}
    }
  },
  methods: {
    openlink() {
      console.log("clivk");
    },
    enrollment(){
      this.$router.push({ name: 'ShippingInfo' });

      // if (condition) {
        
      // } else{
      //   this.userInfoService.getUserInfo().then((res) => {
      //   console.log('userdetails', res);
        
      // });
      // }
    },
  },
  created() {
    this.userInfoService = new UserInfoService();
  },
  mounted(){
     this.userInfoService.getUserInfo().then((res) => {
        // console.log('userdetails', res);
        this.userDetails=res.data;
      });
  },
};
</script>

<style scoped>
.contWrap{
  padding: 20px;
}
.contWrap ul li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F6F6F6;
  padding: 10px 0;
}
.contWrap li label{
  color: #C4C4C4;
  font-size: 12px;
  font-weight: 700;
}
.contWrap ul li lspanabel{
  color: #25282B;
  font-size: 14px;
  font-weight: 400;
}

.secList,.thirdList,.forthList{
  margin-top: 40px;
}
.secList button{
  display: block;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #595959;
  color: #595959;
  padding: 14px 0;
}

.thirdList li{
  justify-content: flex-start !important;
}
.thirdList li ion-checkbox{
  margin-right: 10px;
}
</style>