<template>
  <div class="details-container">
    <RatingBox />
    <SponsorshipBox v-on:setPage="setPageType($event)" />
    <div class="link-wrap">
      <MyInformation />
      <CustomerService />
      <div class="logout">
        <button class="btn-logout" @click="logout">로그아웃</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import RatingBox from "./RatingBox.vue";
import SponsorshipBox from "./SponsershipBox.vue";
import MyInformation from "./MyInformation.vue";
import CustomerService from "./CustomerService.vue";
export default defineComponent({
  name: "MyPageDetails",
  components: {
    RatingBox,
    SponsorshipBox,
    MyInformation,
    CustomerService,
  },
  methods: {
    setPageType(page) {
      this.$emit("setPage", page);
    },
  },
});
</script>

<style scoped>
.details-container {
  padding: 0px 20px 56px;
  position: relative;
  
}
.link-wrap {
  background: white;
  /* padding: 0px 20px;
  margin: 0 -20px; */
}
.logout{
    padding: 40px 0 10px;
    text-align: center;
}
.btn-logout {
  font-size: 12px;
  line-height: 16px;
  color: #C4C4C4;
}
</style>