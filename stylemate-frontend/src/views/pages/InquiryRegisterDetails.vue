<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="My page"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="inner-wrapper">
        <div class="topGreyBox">
          <div class="top-row">
            <label>처리 상태</label>
            <span class="notice-tag grey-solid">확인중</span>
          </div>
          <div class="top-row">
            <label>등록일</label>
            <span>2021. 02. 03</span>
          </div>
          <div class="top-row">
            <label>답변일</label>
            <span>2021. 02. 04</span>
          </div>
          <div class="top-row">
            <label>문의 유형</label>
            <span>협찬문의</span>
          </div>
        </div>
      </div>
      <div class="detailsInq">
        <div class="inqList">
          <h4>제목</h4>
          <p>숨가쁘게 살아가는 순간 속에도 잃지 않는 회색의 그레이</p>
        </div>
        <div class="inqList">
          <h4>내용</h4>
          <p>
            유튜브 캠페인에 참여했는데 신청 누락된 것이 아닌지 확인
            부탁드립니다.
          </p>
        </div>
        <div class="answer-cont">
          <h4>답변내용</h4>
            <p>
              나는 로봇이 아닙니다. reCAPTCHA 신호등이 있는 이미지를 모두
              선택하세요.
            </p>
        </div>
        <div class="buttongrp">
          <button class="inqList-btn">수정</button>
          <button class="inqList-btn">삭제</button>
        </div>
      </div>
      <div class="bottom-sec-scroll">
        <div class="btn-wrap">
          <button class="main-btn">목록으로</button>
        </div>
        <div class="pagination-wrap">
          <a href="#">
            <img src="@/assets/icons/arrow-left-thin.svg" />
            이전글
          </a>
          <a href="#">
            다음글
            <img src="@/assets/icons/arrow-right-thin.svg" />
          </a>
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
  name: "InquiryRegisterDetails",
  components: { TopNav, IonContent, IonPage },
};
</script>

<style scoped>
.inner-wrapper {
  padding: 40px 16px 0;
}
.topGreyBox {
  background: #fafafa;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  padding: 24px 11px;
}
.topGreyBox .top-row {
  display: flex;
  align-items: center;
  margin-top: 17px;
}
.topGreyBox .top-row:first-child {
  margin-top: 0;
}
.topGreyBox .top-row label {
  width: 61px;
  margin-right: 24px;
  text-align: right;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #212226;
}
.detailsInq {
  margin-top: 32px;
}
.inqList {
  border-bottom: solid 1px #f4f4f5;
  padding: 24px;
}
.inqList:first-child {
  padding-top: 0;
}
.answer-cont{
    background: #FAFAFA;
    padding: 24px;
}
.inqList h4, .answer-cont h4 {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #212226;
  margin-bottom: 12px;
}
.inqList p, .answer-cont p {
  font-size: 14px;
  line-height: 18px;
  color: #212226;
}
.buttongrp {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 9px 0;
}
.inqList-btn {
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #212226;
  background: #ffffff;
  border: 1px solid #d4d4d8;
  border-radius: 8px;
  padding: 13px 24px;
  margin-left: 8px;
}
.inqList-btn:first-child {
  margin-left: 0;
}
.bottom-sec-scroll {
  border-top: solid 8px #fafafa;
}
.btn-wrap {
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-btn {
  background: #25282b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  padding: 13px 24px;
}
.pagination-wrap {
  padding: 0 16px 24px;
  border-top: solid 1px #f4f4f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
}
.pagination-wrap > a {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  color: #25282b;
}
</style>