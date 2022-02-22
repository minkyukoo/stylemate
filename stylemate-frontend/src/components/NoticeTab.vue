<template>
  <div class="tab-wrap">
    <div class="tabs">
      <a
        class="tab"
        @click="layout = 'tab1'"
        :class="{ active: layout === 'tab1' }"
      >
        공지사항
      </a>
      <a
        class="tab"
        @click="layout = 'tab2'"
        :class="{ active: layout === 'tab2' }"
      >
        FAQ
      </a>
      <a
        class="tab"
        @click="layout = 'tab3'"
        :class="{ active: layout === 'tab3' }"
      >
        1:1문의
      </a>
    </div>
    <!-- tab content 1 -->
    <div class="tab-content" v-if="layout === 'tab1'">
      <div
        v-for="notice in noticelist"
        :key="notice"
        class="notice-row"
        @click="$router.push({ name: 'NoticeDetails' })"
      >
        <div class="tag-row">
          <span class="notice-tag red-solid">알림</span>
          <span class="notice-tag red-outline">중요</span>
          <span class="notice-tag dark-solid">이벤트</span>
        </div>
        <div class="text-desc">
          <p>{{ notice.title }}</p>
        </div>
        <div class="bottom-row">
          <span>{{ notice.category }}</span
          ><span>{{ dateFormat(notice.createdAt) }}</span>
        </div>
      </div>
    </div>

    <!-- tab content 2 -->
    <div class="tab-content" v-if="layout === 'tab2'">
      <div class="faq-wrap">
        <div class="faq-wrapper">
          <h2>채널 연결</h2>
          <NoticeAccordion title="인스타그램 연결 방법">
            오른쪽 위의 [로그인] > 화면 아래 [아이디 찾기], [비밀번호 찾기] 를
            통해 확인이 가능하며, 임시 비밀번호의 경우 회원가입 시 등록하시
            메일로 발송됩니다. 가입 시 기재한 메일주소가 기억나지 않으시거나
            오류가 발생하는 경우, 1644-0000 또는 카카오톡으로 문의주시면
            신속하게 도움 드리겠습니다.
          </NoticeAccordion>
          <NoticeAccordion title="유튜브 연결 방법">
            accordion 2 content
          </NoticeAccordion>
        </div>
        <div class="faq-wrapper">
          <h2>회원 정보</h2>
          <NoticeAccordion title="회원 탈퇴하고 싶어요.">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="비밀번호를 변경하고 싶어요.">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="계정이 휴면 전환되었어요.">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="사이트 이용에 제한이 있나요?">
            lorem ipsum
          </NoticeAccordion>
        </div>
        <div class="faq-wrapper">
          <h2>캠페인 신청</h2>
          <NoticeAccordion title="신청할 수 있는 캠페인은 어떤 것들이 있나요?">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="신청한 제공 내역은 변경할 수 있나요?">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="캠페인 신청기간을 알려주세요.">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="신청 취소가 가능할까요?">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="캠페인 재참여가 가능할까요?">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="신청한 캠페인은 어디서 확인할 수 있나요?">
            lorem ipsum
          </NoticeAccordion>
        </div>
        <div class="faq-wrapper">
          <h2>캠페인 선정</h2>
          <NoticeAccordion title="캠페인에 공지된 선정 인원이 달라요.">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="선정되면 어떻게 확인할 수 있나요?">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="인플루언서 선정 기준이 무엇인가요?">
            lorem ipsum
          </NoticeAccordion>
        </div>
        <div class="faq-wrapper">
          <h2>포인트</h2>
          <NoticeAccordion title="미디언스 포인트를 입금받고 싶어요.">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="계좌 변경">
            lorem ipsum
          </NoticeAccordion>
          <NoticeAccordion title="포인트가 소멸된 것 같아요.">
            lorem ipsum
          </NoticeAccordion>
        </div>
      </div>
    </div>

    <!-- tab content 3 -->
    <div class="tab-content" v-if="layout === 'tab3'">
      <div class="top-sec">
        <h3>궁금한 점은 언제든지 문의해주세요.</h3>
        <button
          class="black-btn"
          @click="$router.push({ name: 'InquiryDetails' })"
        >
          <span><img src="@/assets/icons/icon-pencil.svg" /></span>문의하기
        </button>
      </div>
      <div
        v-for="inquiry in inquirylist"
        :key="inquiry"
        class="notice-row"
        @click="$router.push({ name: 'InquiryRegisterDetails' })"
      >
        <div class="tag-row">
          <span class="notice-tag grey-solid">확인중</span>
          <span class="notice-tag dark-outline">답변완료</span>
        </div>
        <div class="text-desc">
          <p>{{ inquiry.desc }}</p>
        </div>
        <div class="bottom-row">
          <span>{{ inquiry.type }}</span
          ><span>{{ inquiry.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoticeAccordion from "@/components/NoticeAccordion.vue";
import UserInfoService from "@/services/UserInfoService";
export default {
  name: "NoticeTab",
  components: {
    NoticeAccordion,
  },
  data() {
    return {
      layout: "tab2",
      noticelist: [
        {
          desc: "숨가쁘게 살아가는 순간 속에도 잃지 않는 회색의 그레이",
          type: "미디언스",
          date: "2021.01.03",
        },
        {
          desc: "빠르고 강력한 알레르기 치료제, 알티싹 세티! 제목은 최대 2줄까지 지원",
          type: "미디언스",
          date: "2021.01.03",
        },
        {
          desc: "연말 가요대상은 누구일까요? 가요톱텐에서 확인해보세요.",
          type: "미디언스",
          date: "2021.01.03",
        },
        {
          desc: "여러분들의 친구 뽀로로와 함께 어덜트 카페로",
          type: "미디언스",
          date: "2021.01.03",
        },
        {
          desc: "팔딱팔딱 뛰는 가슴 구해줘 오 내 마음 십년이 지나도",
          type: "미디언스",
          date: "2021.01.03",
        },
      ],
      inquirylist: [
        {
          desc: "숨가쁘게 살아가는 순간 속에도 잃지 않는 회색의 그레이",
          type: "인스타그램 캠페인 문의",
          date: "2021.01.03",
        },
        {
          desc: "빠르고 강력한 알레르기 치료제 알지싹 세티!",
          type: "유튜브 캠페인 문의",
          date: "2021.01.03",
        },
      ],
    };
  },
  created() {
    this.service = new UserInfoService();
  },
  mounted() {
    this.service.Notice().then((res) => {
      this.noticelist = res.data;
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
.tabs {
  border: 1px solid #f7f7f7;
  display: flex;
  justify-content: space-around;
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
.faq-wrapper h2 {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #25282b;
  margin-bottom: 12px;
}
</style>
