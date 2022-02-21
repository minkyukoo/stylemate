<template>
  hello
</template>

<script>

export default {
  name: "NoticeAccordion",
  components: {
   
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.faq-wrapper {
  border-bottom: solid 1px #f4f4f5;
}
.faq-wrapper h2 {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #25282b;
  margin-bottom: 12px;
}
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
</style>