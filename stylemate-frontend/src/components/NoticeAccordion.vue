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
