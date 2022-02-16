<template>
  <div class="rating-box">
    <div class="rating-item" v-for="(i, e) in ratingArr" :key="e">
      <div class="img-con">
        <img :src="`${require('@/assets/images/' + i.img)}`" />
      </div>
      <div class="text-con">
        <h3>{{ i.count }}</h3>
        <p>{{ i.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingBox",
  data() {
    return {
      ratingArr: [
        {
          name: "평균 좋아요",
          img: "like.png",
          count: 0,
        },
        {
          name: "평균댓글",
          img: "comments.png",
          count: 0,
        },
        {
          name: "EGR",
          img: "egr.png",
          count: 0,
        },
      ],
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