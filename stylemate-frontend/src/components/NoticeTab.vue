<template>
  <div class="tab-wrap">
    <div class="tabs">
      <a
        class="tab"
        @click="(layout = '#notice'), stateUp('공지사항')"
        :class="{ active: layout === '#notice' }"
      >
        공지사항
      </a>
      <a
        class="tab"
        @click="layout = '#faq'"
        :class="{ active: layout === '#faq' }"
      >
        FAQ
      </a>
      <a
        v-if="isLoggedIn"
        class="tab"
        @click="(layout = '#inquiry'), stateUp('1:1 문의')"
        :class="{ active: layout === '#inquiry' }"
      >
        1:1문의
      </a>
    </div>
    <!-- tab content 1 -->
    <div class="tab-content" v-if="layout === '#notice'">
      <div class="noticeWrap">
        <div
          v-for="notice in noticelist"
          :key="notice"
          class="notice-row"
          @click="
            $router.push({ name: 'NoticeDetails', params: { id: notice.id } })
          "
        >
          <div class="tag-row">
            <span
              v-if="notice.category !== null"
              class="notice-tag"
              :class="{
                'red-solid': notice.category === 'notification',
                'dark-solid': notice.category !== 'notification',
              }"
              >{{
                notice.category === "notification" ? "notice" : notice.category
              }}</span
            >
            <span v-if="notice.fixed" class="notice-tag red-outline">중요</span>
            <!-- <span class="notice-tag dark-solid">이벤트</span> -->
          </div>
          <div class="text-desc">
            <p>{{ notice.title }}</p>
          </div>
          <div class="bottom-row">
            <span>mediance</span><span>{{ dateFormat(notice.createdAt) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- tab content 2 -->
    <div class="tab-content" v-if="layout === '#faq'">
      <div class="faq-wrap">
        <div v-for="item in faqCategory" :key="item" class="faq-wrapper">
          <h2>{{ item }}</h2>
          <NoticeAccordion
            v-for="faq in faqs.filter((v) => v.category === item)"
            :key="faq.id"
            :title="faq.title"
            :body="faq.body"
          >
          </NoticeAccordion>
        </div>
      </div>
    </div>

    <!-- tab content 3 -->
    <div class="tab-content" v-if="layout === '#inquiry' && isLoggedIn">
      <div class="top-sec">
        <h3>궁금한 점은 언제든지 문의해주세요.</h3>
        <button class="black-btn" @click="sendInquiryDetails()">
          <span><img src="@/assets/icons/icon-pencil.svg" /></span>문의하기
        </button>
      </div>
      <!-- v-if="!inquiryLength" -->
      <div v-if="!inquiryLength" class="noticeWrap">
        <div class="no-data">
          <p class="no-notice-data">등록된 내용이 없습니다</p>
        </div>
      </div>
      <div v-else class="noticeWrap">
        <div
          v-for="inquiry in inquirylist"
          :key="inquiry.id"
          class="notice-row"
          @click="
            $router.push({
              name: 'InquiryRegisterDetails',
              params: { id: inquiry.id },
            })
          "
        >
          <div class="tag-row">
            <span
              class="notice-tag text-capitalize"
              :class="{
                'grey-solid': inquiry.answerStatus !== 'ready',
                'dark-outline': inquiry.answerStatus === 'ready',
              }"
              >{{ inquiry.answerStatus }}</span
            >
          </div>
          <div class="text-desc">
            <p>{{ inquiry.inquiry }}</p>
          </div>
          <div class="bottom-row">
            <span class="text-capitalize">{{ camelToSpace(inquiry.type) }}</span
            ><span>{{ dateFormat(inquiry.createdAt) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoticeAccordion from "@/components/NoticeAccordion.vue";
import UserInfoService from "@/services/UserInfoService";
import TokenService from "@/services/TokenService";
import { inject } from "vue";
export default {
  name: "NoticeTab",
  components: {
    NoticeAccordion,
  },
  data() {
    return {
      layout: "#notice",
      faqs: [],
      faqCategory: [],
      noticelist: [],
      inquirylist: [],
      inquiryLength: 0,
      isLoggedIn: false,
    };
  },
  setup() {
    const store = inject("store");

    const stateUp = (item) => {
      store.state.noticeTabPageName = capitalize(item);
    };
    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

    return {
      stateUp,
    };
  },
  created() {
    this.service = new UserInfoService();
    this.tokenService = new TokenService();
  },
  async mounted() {
    this.isLoggedIn = await this.isLogedIn();
    this.layout = this.$route.hash;
    this.service.Notice().then((res) => {
      this.noticelist = res.data;
      // console.log(this.noticelist);
    });

    this.service.FAQs().then((res) => {
      // console.log(res.data);
      this.faqCategory = res.data
        .map((option) => option.category)
        .filter((v, i, a) => a.indexOf(v) === i);
      // console.log(this.faqCategory);
      this.service.FAQs().then((res) => {
        this.faqs = res.data;
      });
    });
    if (this.isLoggedIn) {
      this.service.QNAs().then((res) => {
        this.inquiryLength = res.data.length;
        this.inquirylist = res.data;
        // console.log("inquiry", res.data);
      });
    }
  },
  methods: {
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

    dateFormat(date) {
      let dt = new Date(date);
      return `${dt.getFullYear()}.${dt.getMonth()}.${dt.getDate()}`;
    },

    // isLogedIn
    async isLogedIn() {
      return await this.tokenService.isAuth();
    },

    async sendInquiryDetails() {
      let isLogedIn = await this.isLogedIn();
      if (isLogedIn) {
        this.$router.push({ name: "InquiryDetails" });
      } else this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<style scoped>
.text-capitalize {
  text-transform: capitalize;
}
p.no-notice-data {
  text-align: center;
  padding-top: 50px;
  color: #c4c4c4;
}

.tabs {
  border: 1px solid #f7f7f7;
  display: flex;
  justify-content: space-around;
  background: #ffffff;
}

.tabs .tab {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
  padding: 13px 0 9px;
  cursor: pointer;
}
.tabs .tab.active {
  color: #090909;
  font-weight: bold;
  border-bottom: solid 2px #090909;
}
.tab-content {
  height: calc(100% - 60px);
}
.notice-row {
  border-bottom: solid 1px #f4f4f5;
  padding: 20px 16px 22px;
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
.text-desc {
  margin: 12px 0;
}
.text-desc p {
  font-size: 14px;
  line-height: 18px;
  color: #25282b;
}
.bottom-row {
  display: flex;
}
.bottom-row span {
  font-size: 12px;
  line-height: 16px;
  color: #797979;
  margin-left: 24px;
}
.bottom-row span:first-child {
  margin-left: 0;
}
.top-sec {
  background: #fafafa;
  padding: 23px 23px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top-sec h3 {
  font-size: 14px;
  line-height: 18px;
  color: #52525b;
  margin-bottom: 15px;
}
.top-sec button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #090909;
  border-radius: 32px;
  padding: 8px 16px;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
}
.top-sec button span {
  margin-right: 8px;
}
.faq-wrap {
  padding: 0 16px 100px;
}
.faq-wrapper {
  border-bottom: solid 1px #f4f4f5;
  padding: 32px 0 30px;
}
.faq-wrapper:last-child {
  border-bottom: none;
}
.faq-wrapper h2 {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #25282b;
  margin-bottom: 12px;
}
.noticeWrap {
  padding-bottom: 0;
  height: 100%;
}
.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}
</style>
