<template>
  <div class="faq-items">
    <div class="faq-question" @click="isOpen = !isOpen">
      <h4>▪︎ {{ title }}</h4>
    </div>
    <div class="faq-answer" :class="isOpen ? 'show' : 'hide'">
      <p v-html="body"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeAccordion",
  props: {
    title: String,
    body: String,
  },
  components: {},
  data() {
    return {
      isOpen: false,
      faqitems: [
        {
          title: "인스타그램 연결 방법",
          body: "오른쪽 위의 [로그인] > 화면 아래 [아이디 찾기], [비밀번호 찾기] 를 통해 확인이 가능하며, 임시 비밀번호의 경우 회원가입 시 등록하시 메일로 발송됩니다. 가입 시 기재한 메일주소가 기억나지 않으시거나 오류가 발생하는 경우, 1644-0000 또는 카카오톡으로 문의주시면 신속하게 도움 드리겠습니다.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.faq-items {
  margin-top: 20px;
}
.faq-items:first-child {
  margin-top: 0;
}
.faq-question {
  cursor: pointer;
}
.faq-question h4 {
  font-size: 14px;
  line-height: 18px;
  color: #25282b;
}
.faq-answer {
  background: #fafafa;
  padding: 16px;
  margin-top: 18px;
}
.faq-answer p {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #25282b;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>
