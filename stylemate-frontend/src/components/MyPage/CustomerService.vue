<template>
  <div class="my-information">
    <h5 class="info-heading">고객센터</h5>
    <MyPageLinks :links="customerArr" />
  </div>
</template>

<script>
import MyPageLinks from "./MyPageLinks.vue";
export default {
  name: "CustomerService",
  components: { MyPageLinks },
  data() {
    return {
      customerArr: [
        {
          name: "공지사항",
          Pagelink: "Notice",
          hash: "notice",
        },
        {
          name: "FAQ",
          Pagelink: "Notice",
          hash: "faq",
        },
        {
          name: "1:1 문의",
          Pagelink: "Notice",
          hash: "inquiry",
        },
        {
          name: "이용약관",
          Pagelink: "CustomerServiceCenter",
          hash: "term",
        },
        {
          name: "개인정보처리방침",
          Pagelink: "CustomerServiceCenter",
          hash: "policy",
        },
        {
          name: "앱 버전정보",
          Pagelink: "Home",
          arrow: false,
          version: "버전 1.10.0",
          hash: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.my-information {
  padding-top: 50px;
}
.info-heading {
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #c4c4c4;
  padding-bottom: 17px;
  border-bottom: 1px solid #f7f7f7;
}
</style>
