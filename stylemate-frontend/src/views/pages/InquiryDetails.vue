<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="My page"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="inqDetailsBox">
        <div class="box">
          <h2>문의유형선택</h2>

          <div class="buttonGrp">
            <button class="inq-btn active">협찬문의</button>
            <button class="inq-btn">서비스 이용문의</button>
            <button class="inq-btn">기타문의</button>
          </div>
        </div>
        <div class="box">
          <h2>문의 내용</h2>

          <div class="form-box">
              <div class="input-row">
                  <input class="form-control" type="text" placeholder="제목을 입력해주세요.">
              </div>
              <div class="input-row">
                  <textarea class="form-control" placeholder="내용을 입력해주세요."></textarea>
              </div>
              <div class="button-row">
                  <button class="grey-btn">취소</button>
                  <button class="black-btn">문의 등록</button>
              </div>
          </div>
        </div>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";

export default {
  name: "InquiryDetails",
  components: { TopNav, IonContent, IonPage },
};
</script>

<style scoped>
.inqDetailsBox {
  padding: 40px 16px;
}
.inqDetailsBox h2 {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #212226;
  margin-bottom: 7px;
}
.box{
    margin-top: 40px;
}
.box:first-child, .input-row:first-child{
    margin-top: 0;
}
.form-box .form-control{
    border: 1px solid #D4D4D8;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 12px 16px;
    width: 100%;
}
textarea{
    resize: none;
    height: 204px;
}
.input-row{
    margin-top: 7px;
}
.buttonGrp {
  display: flex;
  flex-wrap: wrap;
}
.buttonGrp .inq-btn {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 50%;
  font-size: 14px;
  line-height: 18px;
  color: #25282b;
  border: 1px solid #d4d4d8;
  background: #ffffff;
  padding: 8px 16px;
}
.buttonGrp .inq-btn.active {
  color: #ffffff;
  font-weight: bold;
  background: #52525b;
}
.button-row{
    display: flex;
    margin-top: 42px;
}
.button-row button{
    display: flex;
    align-content: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    border-radius: 6px;
    padding: 13px 20px;
    flex: 1;
    margin-left: 8px;
}
.input-row:first-child{
    margin-left: 0;
}
.button-row button.grey-btn{
    background: #E4E4E7;
    color: #A1A1AA;
}
.button-row button.black-btn{
    background: #25282B;
    color: #FFFFFF;
}
</style>