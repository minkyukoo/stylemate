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
                <label>스타일메이트와 연결할 인스타그램 비즈니스 계정을 선택하세요.</label></div>
            </li>
          </ul>
          <ul class="newChannel">
            <li class="active">
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
            <li>
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
          <ul class="connectionList">
            <li>
              <div>
                <label>스타일메이트와 연결할 인스타그램 비즈니스 계정을 선택하세요.</label></div>
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
        </div>
        <div class="subscribe-wrap">
          <button class="black-btn">활동 신청하기</button>
        </div>
    </ion-content>
    <!-- End page content -->

    
  </ion-page>
</template>

<script>
import { IonPage,  IonContent, } from '@ionic/vue';
import TopNav from '@/components/TopNav.vue';


export default {
  name: 'NewMemberChannel',
  components: { TopNav,  IonContent, IonPage },

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
.connectionList{
  margin-bottom: 10px;
}
.connectionList li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F6F6F6;
  padding: 10px 0;
}
.connectionList li label{
  color: #C4C4C4;
  font-size: 12px;
  font-weight: 700;
}
.connectionList li lspanabel{
  color: #25282B;
  font-size: 14px;
  font-weight: 400;
}

.connectBtn{
  border: 1px solid #797979;
  color: #797979;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 10px;
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

.newChannel{
  display: flex;
  flex-direction: column;
  align-items: inherit !important;
  margin-bottom: 40px;
}
.channelLeft{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.newChannel li{
  margin-bottom: 10px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  border: 1px solid #E5E5E5;
  padding: 12px;
  border-radius: 6px;
}
.newChannel li:hover,.newChannel li.active{
  border-color: #5700FF;
}
.newChannel li.disable{
  opacity: 0.4;
}
.newChannel li .channelImg{
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
  background: #797979;
  margin-right: 12px;
}
.newChannel li .channelLeft .channelDec h4{
  font-size: 14px;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 10px;
}
.newChannel li .channelLeft .channelDec p{
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
}
.newChannel li .channelBtn{
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
</style>