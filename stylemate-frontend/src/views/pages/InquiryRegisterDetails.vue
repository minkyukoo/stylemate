<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="1:1 문의"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="inner-wrapper">
        <div class="topGreyBox">
          <div class="top-row">
            <label>처리 상태</label>
            <span class="notice-tag grey-solid">{{
              answerStatus === "ready" ? "확인중" : "답변완료"
            }}</span>
          </div>
          <div class="top-row">
            <label>등록일</label>
            <span>{{ dateFormat(createdAt) }}</span>
          </div>
          <div v-if="answeredAt !== null" class="top-row">
            <label>답변일</label>
            <span>{{ dateFormat(answeredAt) }}</span>
          </div>
          <div class="top-row">
            <label>문의 유형</label>
            <span>{{ camelToSpace(type) }}</span>
          </div>
        </div>
      </div>
      <div class="detailsInq">
        <div class="inqList">
          <h4>제목</h4>
          <p>{{ title }}</p>
        </div>
        <div class="inqList">
          <h4>내용</h4>
          <p>
            {{ inquiry }}
          </p>
        </div>
        <div v-if="answeredAt !== null" class="answer-cont">
          <h4>답변내용</h4>
          <p v-html="answer"></p>
        </div>
        <div v-if="answeredAt === null" class="buttongrp p-16">
          <button
            class="inqList-btn"
            @click="
              $router.push({ name: 'InquiryDetailsEdit', params: { id: id } })
            "
          >
            수정
          </button>
          <button class="inqList-btn" @click="deleteInquiry(id)">삭제</button>
        </div>
      </div>
      <div class="bottom-sec-scroll">
        <div class="btn-wrap">
          <button class="main-btn" @click="asAList()">목록으로</button>
        </div>
        <div class="pagination-wrap">
          <a
            :class="{ 'cursor-pointer': previousId !== null }"
            @click="PageRedirect(previousId)"
          >
            <img src="@/assets/icons/arrow-left-thin.svg" />
            이전글
          </a>
          <a
            :class="{ 'cursor-pointer': nextId !== null }"
            @click="PageRedirect(nextId)"
          >
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
import UserInfoService from "@/services/UserInfoService";
import { API } from "@/services/AxiosInstance";
import moment from "moment";

export default {
  name: "InquiryRegisterDetails",
  components: { TopNav, IonContent, IonPage },
  data() {
    return {
      answerStatus: null,
      answeredAt: null,
      isAnswerReceiving: null,
      createdAt: null,
      type: null,
      title: null,
      inquiry: null,
      answer: null,
      previousId: null,
      nextId: null,
      id: null,
    };
  },
  created() {
    this.service = new UserInfoService();
    this.moment = moment;
  },
  mounted() {
    this.service.QNAsById(this.$route.params.id).then((res) => {
      this.answerStatus = res.answerStatus;
      this.answeredAt = res.answeredAt;
      this.isAnswerReceiving = res.isAnswerReceiving;
      this.createdAt = res.createdAt;
      this.type = res.type;
      this.title = res.title;
      this.inquiry = res.inquiry;
      this.answer = res.answer;
      this.nextId = res.nextId;
      this.previousId = res.previousId;
      this.id = res.id;
      // console.log(res);
    });
  },
  methods: {
    asAList() {
      this.$router.back();
      // this.$router.go({ name: "Notice", hash: "#inquiry" });
    },
    dateFormat(date) {
      // let dt = new Date(Date.parse(date));
      // return `${dt.getFullYear()}.${dt.getMonth()}.${dt.getDate()}`;
      return moment(date).format("YYYY.MM.DD");
    },

    deleteInquiry(id) {
      API.delete(`/qnas/${id}`)
        .then((response) => {
          if (response.status === 204) {
            this.$router.push({ path: "/notice", hash: "#inquiry" });
          } else {
            console.log(`Something's is wrong!`);
          }
        })
        .catch((er) => console.log(er));
    },

    camelToSpace(str) {
      switch (str) {
        case "stylemateCampaign":
          return "협찬문의";
          // eslint-disable-next-line no-unreachable
          break;
        case "stylemateService":
          return "서비스 이용문의";
          // eslint-disable-next-line no-unreachable
          break;
        default:
          return "기타문의";
          // eslint-disable-next-line no-unreachable
          break;
      }
    },

    PageRedirect(id) {
      if (id !== null) {
        this.service
          .QNAsCheckById(id)
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({
                name: "InquiryRegisterDetails",
                params: { id: id },
              });
            }
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
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
.answer-cont {
  background: #fafafa;
  padding: 24px;
}
.inqList h4,
.answer-cont h4 {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #212226;
  margin-bottom: 12px;
}
.inqList p,
.answer-cont p {
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
.buttongrp.p-16 {
  padding: 0 16px;
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
