<template>
  <div class="rating-box">
    <div class="rating-item">
      <div class="img-con">
        <img src="@/assets/images/like.png" />
      </div>
      <div class="text-con">
        <h3>{{ store.state.MyPageRateBox.Avg_like }}</h3>
        <p>평균 좋아요</p>
      </div>
    </div>
    <div class="rating-item">
      <div class="img-con">
        <img src="@/assets/images/comments.png" />
      </div>
      <div class="text-con">
        <h3>{{ store.state.MyPageRateBox.Avg_comment }}</h3>
        <p>평균댓글</p>
      </div>
    </div>
    <div class="rating-item">
      <div class="img-con">
        <img src="@/assets/images/egr.png" />
      </div>
      <div class="text-con">
        <h3>{{ store.state.MyPageRateBox.EGR_activity }}</h3>
        <p>EGR</p>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "RatingBox",
  data() {
    return {
      
    };
  },
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
};
</script>

<style scoped>
.rating-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    93.21deg,
    rgba(255, 255, 255, 0.8) 0.78%,
    rgba(255, 255, 255, 0.3) 100.78%
  );
  border-radius: 20px;
  backdrop-filter: blur(30px);
  padding: 20px 40px;
  /* position: relative;
  top: -50px; */
  margin-top: -50px;
}
.rating-item {
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.rating-item .text-con {
  margin-top: 16px;
}
.rating-item .text-con h3 {
  margin-bottom: 7px;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #090909;
}
.rating-item .text-con p {
  font-size: 12px;
  line-height: 16px;
  color: #C4C4C4;
}
</style>