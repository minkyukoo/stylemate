<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="배송지 정보" />
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
       <div class="contWrap">
          <ul>
            <li>
              <div>
                <label>계정정보 수정</label>
                </div>
                <div class="contWrapbtn">
                  <button type="button">인증번호</button>
                </div>
            </li>
          </ul>
        </div>
        <div class="button-group">
            <button class="black-btn">신청하기</button>
        </div>
    </ion-content>
    <!-- End page content -->

    
  </ion-page>
</template>

<script>
import { IonPage,  IonContent, } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from '@/components/TopNav.vue';
// import MyTop from '@/components/MyPageTop.vue';
// import MyPageDetails from '@/components/MyPageDetails.vue';
// import Login from '@/views/pages/Login.vue'
// Import Swiper styles
// import "swiper/css";

// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
// import { FreeMode, Scrollbar, Mousewheel } from "swiper";

// import VueNextSelect from 'vue-next-select';

export default {
  name: 'AddAddress',
  components: { TopNav,  IonContent, IonPage },
  // mounted() {
  //   var queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   var token = urlParams.get('token')
  //   localStorage.setItem('token', token);
  //   console.log(urlParams);
  //   console.log(token);
  // }
  
  methods: {
    openlink() {
      console.log("clivk");
    },
  },
};
</script>

<style scoped>
.contWrap{
  padding: 20px;
}
.codeWrap{
  position: relative;
}
.codeWrap span{
  position: absolute;
  left: 15px;
  top: 15px;
  color: #C4C4C4;
  font-size: 14px;
}
.contWrapbtn{
  margin-top: 31px;
}
.contWrapbtn [type="button"]{
  border: 1px solid#595959;
  background: none;
  width: 100%;
  height: 46px;
  font-size: 14px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
  color: #595959;
}
.labelGap{
  margin-bottom: 8px;
  display: flex;
}

.contWrap ul li{
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  flex-direction: column;
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

.button-group{
  bottom: 0;
  max-width: 500px;
  position: fixed;
  width: 100%;
}
.button-group button{
    width: 100%;
    display: block;
    align-items: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    padding: 21px;
}
.button-group button.grey-btn{
    color: #797979;
    background: #E5E5E5;
}
.button-group button.black-btn{
    color: #FFFFFF;
    background: #090909;
}
</style>