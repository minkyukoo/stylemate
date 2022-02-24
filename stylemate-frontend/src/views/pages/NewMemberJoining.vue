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
                <label>채널연결</label></div>
                <div><img src="@/assets/icons/refresh.svg" /></div>
            </li>
          </ul>
          <div class="howtoConnect">
            <button type="button" class="connectBtn">연결방법 보기</button>
          </div>
          <ul class="addChannel">
            <li>
              <h4><img src="@/assets/icons/instagram-list.svg" /> Instagram</h4>
              <div>
                <button class="connectBtn" type="button">+ 연결방법 보기</button>
              </div>
            </li>
            <li>
              <h4><img src="@/assets/icons/instagram-list.svg" /> Instagram</h4>
              <div>
                <button class="connectBtn" type="button">+ 연결방법 보기</button>
              </div>
            </li>
            <li>
              <h4><img src="@/assets/icons/instagram-list.svg" /> Instagram</h4>
              <div>
                <button class="connectBtn" type="button">+ 연결방법 보기</button>
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
import TopNav from '@/components/TopNav.vue';


export default {
  name: 'NewMember',
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
  margin-bottom: 30px;
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

.howtoConnect{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
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

.addChannel,.addChannel li{
  display: flex;
  flex-direction: column;
  align-items: inherit !important;
}
.addChannel li{
  margin-bottom: 40px;
}
.addChannel h4{
  text-align: justify;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.addChannel h4 img{
  margin-right: 10px;
}

.addChannel li div{
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F6F6F6;
  /* min-height: 80px; */
  border-radius: 6px;
  margin: 10px 0 0 0;
  border: 1px solid #E5E5E5;
}
.addChannel .connectBtn{
  margin: 24px 0;
  background: #fff;
  font-size: 12px;
  color: #25282B;
}
</style>