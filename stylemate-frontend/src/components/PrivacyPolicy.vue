<template>
  <div class="termsWrap">
    <!-- <h3>개인정보처리방침</h3> -->
    <div class="box">
      <div v-html="privacyPolicy" class="pp-cont"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "PrivacyPolicy",
  data(){
    return{
      privacyPolicy:'',
    }
  },
  mounted() {
    axios.get(`/stylemates/boards/recently?type=policy`)
      .then((res) => {
        // console.log("this.privacyPolicy",res.data.body);
        this.privacyPolicy = res.data.body;
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
.pp-cont {
  overflow-x: auto;
}
</style>