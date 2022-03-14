<template>
  <div class="my-information">
    <h5 class="info-heading">나의 정보</h5>
    <MyPageLinks :links="infoArr" />
  </div>
</template>

<script>
import MyPageLinks from "./MyPageLinks.vue";
export default {
  name: "MyInformation",
  components: { MyPageLinks },
  data() {
    return {
      infoArr: [
        {
          name: "회원정보",
          Pagelink: "Userinfo",
          hash: "",
          arrow: true,
        },
        {
          name: "채널연결",
          Pagelink: "NewMemberJoining",
          hash: "",
          arrow: true,
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
