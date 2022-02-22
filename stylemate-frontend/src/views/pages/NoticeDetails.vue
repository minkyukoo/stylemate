<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="My page"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="notice-details-wrap">
        <div class="tag-row">
          <span class="notice-tag red-solid">알림</span>
        </div>
        <h2>숨가쁘게 살아가는 순간 속에도 잃지 않는 회색의 그레이</h2>
        <div class="bottom-row">
          <span>미디언스</span><span>{{ dateFormat(notice.createdAt) }} 2021. 01. 03</span>
        </div>
      </div>
      <div class="content-details">
        <p>고객님, 안녕하세요.</p>
        <br />
        <p>올해부터 캠페인 비용을 조정하게 되어 안내드립니다.</p>
        <br />
        <p>
          - 가격인상 요인 <br />
          - 원재료값 상승
        </p>
        <br />
        <p>
          위의 사유로 공급가가 상승됨에 따라, 미디언스에서도 부득이하게 일정부분
          가격조정을 하게 된 점 양해 부탁드립니다.<br />
          앞으로도 더욱 발전하는 미디언스가 되겠습니다.<br /><br />
          감사합니다.
        </p>
        <br />
        <p>미디언스 드림</p>
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
import UserInfoService from "@/services/UserInfoService";

export default {
  name: "NoticeDetails",
  components: { TopNav, IonContent, IonPage },

  created() {
    this.service = new UserInfoService();
  },
  mounted() {
    this.service.NoticeById(this.$route.params.id).then((res) => {
      this.notice = res;
    });
  },
  methods: {
    dateFormat(date) {
      let dt = new Date(date);
      return `${dt.getFullYear()}.${dt.getMonth()}.${dt.getDate()}`;
    },
  },
};
</script>

<style scoped>
.notice-details-wrap {
  padding: 33px 16px;
}
.notice-details-wrap h2 {
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #090909;
  margin: 16px 0;
}
.tag-row {
  display: flex;
}
.notice-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: -0.6px;
  padding: 0 10px;
  margin-left: 4px;
}
.notice-tag:first-child {
  margin-left: 0;
}
.notice-tag.red-solid {
  background: #f44848;
  color: #ffffff;
  border: solid 1px #f44848;
}
.notice-tag.red-outline {
  background: #ffffff;
  color: #f44848;
  border: solid 1px #f44848;
}
.notice-tag.dark-solid {
  background: #52525b;
  color: #ffffff;
}
.notice-tag.grey-solid {
  border: 1px solid #a1a1aa;
  background: #e4e4e7;
  color: #212226;
}
.notice-tag.dark-outline {
  color: #212226;
  border: 1px solid #a1a1aa;
  background: #ffffff;
}
.bottom-row {
  display: flex;
}
.bottom-row span {
  font-size: 12px;
  line-height: 16px;
  color: #797979;
  margin-left: 16px;
}
.bottom-row span:first-child {
  margin-left: 0;
}
.content-details {
  padding: 32px 24px;
}
.content-details p {
  font-size: 14px;
  line-height: 18px;
  color: #25282b;
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
