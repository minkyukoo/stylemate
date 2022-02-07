<template>
  <div class="item-scroller-nav">
    <ion-slides pager="true" :options="slideOpts">
      <ion-slide>
        <ul>
          <li v-for="(slide, index) in slides" :key="index">
            <a>{{ slide.title }}</a>
          </li>
        </ul>
      </ion-slide>
    </ion-slides>
  </div>
  <div class="product-main-banner">
    <img src="@/assets/images/product-banner.jpg" />
  </div>
  <div class="item-wrapper">
    <div class="top-section">
      <ion-item>
        <ion-select interface="popover" placeholder="인기순">
          <ion-select-option value="f">최신순</ion-select-option>
          <ion-select-option value="m">인기순</ion-select-option>
          <ion-select-option value="v">마감임박순</ion-select-option>
        </ion-select>
      </ion-item>
    </div>
    <ul class="product-list">
      <li
        v-for="(product, index) in products"
        :key="index"
        class="product-list-item"
      >
        <figure><img src="@/assets/images/Rectangle-2.jpg" /></figure>
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <span>{{ product.hashtags }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { IonSlides, IonSlide, IonItem, IonSelect, IonSelectOption } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardItem",
  components: { IonSlides, IonSlide, IonItem, IonSelect, IonSelectOption },

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
        { title: "전체" },
        { title: "상의" },
        { title: "아우터" },
        { title: "바지" },
        { title: "원피스" },
        { title: "스커트" },
        { title: "전체" },
      ],
      products: [
        {
          title: "Areuban",
          // image: require("../../assets/images/Rectangle-2.jpg"),
          id: 1,
          description: " 리플렉 오버핏 조거 스웨",
          hashtags: "#스트릿패션, #스우파, #후디",
        },
        {
          title: "hovehover",
          // image: require("../../assets/images/Rectangle-2.jpg"),
          id: 1,
          description: "[BOOTSCUT.FIT] Chana...",
          hashtags: "#스트릿패션 #스우파 #후디",
        },
        {
          title: "Etmon",
          // image: require("../../assets/images/Rectangle-2.jpg"),
          id: 1,
          description: "[JACKET.FIT] Heavy jac...",
          hashtags: "#스트릿패션 #스우파 #후디",
        },
        {
          title: "OEF",
          // image: require("../../assets/images/Rectangle-2.jpg"),
          id: 1,
          description: "[WIDE.FIT] Island jeans...",
          hashtags: "#스트릿패션 #스우파 #후디",
        },
      ],
    };
  },
});
</script>

<style scoped>
.product-main-banner{
    position: fixed;
    top: 105px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}
.product-main-banner img {
  width: 100%;
}
.item-wrapper {
    padding: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;
    top: 180px;
    background: #ffffff;
}
.item-wrapper .product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
}
.item-wrapper .product-list .product-list-item {
  width: 50%;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 4px;
  margin-bottom: 24px;
}
.item-wrapper .product-list .product-list-item figure {
  margin-bottom: 12px;
}
.item-wrapper .product-list .product-list-item figure img{
    width: 100%;
}
.item-wrapper .product-list .product-list-item h3 {
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
}
.item-wrapper .product-list .product-list-item p {
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-wrapper .product-list .product-list-item span {
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
}
.swiper-pagination {
  display: none !important;
}
.item-scroller-nav{
    position: fixed;
    background: #ffffff;
    top: 57px;
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