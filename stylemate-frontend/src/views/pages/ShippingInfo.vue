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
                <label>배송지 등록/수정</label></div>
            </li>
            <li>
              <div>
                <span>
                  <input type="text" placeholder="서울특별시 강남구 삼성로 95길 6">
                </span>
              </div>
            </li>
            <li>
              <div>
                <span>
                  <input type="text" placeholder="상세 주소를 입력해 주세요.">
                </span>
              </div>
            </li>
            <li>
              <div class="checkLabel">
                <ion-checkbox color="primary"></ion-checkbox>
                <label>기본 배송지</label>
              </div>
            </li>
          </ul>
        </div>
        <div class="button-group">
            <button class="grey-btn">취소</button>
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


export default {
  name: 'ShippingInfo',
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
.codeWrap input[type="text"]{
  padding-left: 50px !important;
}
.contWrap input[type="text"],
.contWrapbtn [type="button"]{
  border: 1px solid#E5E5E5;
  background: none;
  width: 100%;
  height: 46px;
  font-size: 14px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
}
.labelGap{
  margin-bottom: 8px;
  display: flex;
}
.inlineForm{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -4px;
}
.inlineForm div{
  margin: 0 2px;
}

.inlineTime{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.inlineTime span:first-child{
  color: #C4C4C4;
}

.inlineTime span{
  color: #9D6AFF;
  font-size: 14px;
  font-weight: 400;
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

.checkLabel{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.checkLabel label{
  margin: 0 0 0 10px;
}

.button-group{
    display: flex;
    position: fixed;
    width: 500px;
    bottom: 0;
}
.button-group button{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
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