<template>
  <div class="sponsor-filters">
    <ion-slides :options="slideOpts">
      <ion-slide class="main-menu" v-for="category in allCategories" :key="category.name">
        <div class="slide-item">
            <a @click="handleClick(category.id)">{{ category.name }}</a>
        </div>
      </ion-slide>
    </ion-slides>
  </div>
</template>

<script>
export default {
  name: "SponsorFilter",
  setup() {
    const slideOpts = {
      initialSlide: 1,
      slidesPerView: 2,
      speed: 400,
      pager: false,
      // slidesPerView: 1,
      scrollbar: true,
    };
    return { slideOpts };
  },
  data() {
    return {
      allCategories: [
        {
          id: "all",
          name: "전체",
        },
        {
          id: "post-registration",
          name: "포스트 등록",
        },
        {
          id: "checking",
          name: "확인중",
        },
        {
          id: "re-registration",
          name: "재등록",
        },
        {
          id: "sponsor-selection",
          name: "협찬선정",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.sponsor-filters .main-menu {
    display: flex;
    justify-content: flex-start;
    padding: 0;
    width: 100%;
}
.sponsor-filters .main-menu .slide-item {
  margin-right: 4px;
  padding: 8px 16px;
  border: 1px solid #E5E5E5;
  border-radius: 60px;
  word-break: keep-all;
  flex-grow: 1;
  /* width: 100%; */
}
.sponsor-filters .main-menu .slide-item.active {
  border: 1px solid #E5E5E5;
}
</style>