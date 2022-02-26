<template>
  <div class="sponsor-box-cont">
    <div class="sponsor-item" @click="() => this.$router.push('/sponsorships')">
      <h3>{{ store.state.MyPageSponsorBox.sponsorship }}</h3>
      <p>Sponsorship</p>
    </div>
    <div class="sponsor-item" @click="() => this.$router.push('/post-activity')">
      <h3>{{ store.state.MyPageSponsorBox.Post_activity }}</h3>
      <p>post activity</p>
    </div>
    <div class="sponsor-item" @click="() => this.$router.push('/mypage-liked')">
      <h3>{{ store.state.MyPageSponsorBox.like }}</h3>
      <p>like</p>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "SponsorshipBox",
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  // methods: {
  //   setPage(page) {
  //     this.$emit("setPage", page);
  //   },
  // },
};
</script>

<style scoped>
.sponsor-box-cont {
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  padding: 20px 0px;
  display: flex;
  background: #fff;
  margin-top: 5px;
}
.sponsor-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33.33%;
  border-right: 1px solid #f7f7f7;
  cursor: pointer;
}
.sponsor-item h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #090909;
}
.sponsor-item p {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #c4c4c4;
}
.sponsor-item:last-child {
  border-right: none;
}
.sponsor-item p {
  color: #c4c4c4;
  font-size: 12px;
  line-height: 16px;
}
</style>