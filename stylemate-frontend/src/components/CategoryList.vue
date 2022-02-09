<template>
  <div class="item-scroller-nav">
    <ion-slides :options="slideOpts">
      <ion-slide>
        <ul>
          <li v-for="slide in slides" :key="slide">
            <a href="#">{{ slide.title }}</a>
          </li>
        </ul>
      </ion-slide>
    </ion-slides>
  </div>
</template>

<script>
export default {
  name: "CategoryList",

  setup() {
    const slideOpts = {
      initialSlide: 1,
      speed: 400,
      pager: false,
    };
    return { slideOpts };
  },

  data() {
    return {
      slides: [
        {
          title: "전체",
          value: "all",
          name: "all",
        },
        {
          title: "상의",
          value: "top",
          name: "top",
        },
        {
          title: "아우터",
          value: "outer",
          name: "outer",
        },
        {
          title: "바지",
          value: "pants",
          name: "pants",
        },
        {
          title: "원피스",
          value: "onepiece",
          name: "onepiece",
        },
        {
          title: "스커트",
          value: "skirt",
          name: "skirt",
        },
      ],
    };
  },
};
</script>

<style scoped>
.item-scroller-nav {
  position: fixed;
  background: #ffffff;
  top: 61px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.item-scroller-nav ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.item-scroller-nav ul li a {
  padding: 13px 0;
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #797979;
}
.item-scroller-nav ul li a.active {
  border-bottom: solid 2px #090909;
  font-weight: bold;
  color: #090909;
}
</style>