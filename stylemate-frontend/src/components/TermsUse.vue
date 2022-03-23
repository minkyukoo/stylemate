<template>
  <div class="termsWrap">
    <!-- <h3>스타일메이트 이용약관</h3> -->
    <div class="box">
      <p v-html="termsUSe"></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TermsUse",
  data() {
    return {
      termsUSe: "",
    };
  },
  mounted() {
    axios
      .get(
        `https://elsa.beta.mediance.co.kr/stylemates/boards/recently?type=terms`
      )
      .then((res) => {
        console.log("this.termsUSe", res.data.body);
        this.termsUSe = res.data.body;
      });
  },
};
</script>

<style scoped>
.termsWrap {
  padding: 41px 16px 100px;
}
.termsWrap h3 {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #212226;
}
.box {
  margin-top: 15px;
  font-size: 12px;
  line-height: 16px;
}
.box h4 {
  margin-bottom: 15px;
}
</style>
