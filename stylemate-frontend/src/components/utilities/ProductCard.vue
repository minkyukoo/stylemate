<template>
  <div class="product-list">
    <div class="product-list-item">
      <div class="top-float-div">
        <div class="social-icon">
          <img src="@/assets/icons/instagram.svg" />
        </div>
        <div class="favorite">
          <img src="@/assets/icons/heart-outline.svg" />
        </div>
      </div>
      <figure @click="$router.push({ name: 'ItemDetails' })">
        <img src="@/assets/images/Rectanglen4.png" />
      </figure>
      <div class="details-wrap" @click="$router.push({ name: 'ItemDetails' })">
        <h3>Etmon</h3>
        <p>심플 오버핏 하프라인 긴...</p>
        <!-- <span>{{ product.hashtags }}</span> -->
        <div class="hashWrap">
          <span>#스트릿패션</span>
          <span>#스우파</span>
          <span>#후디</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style scoped>
.top-float-div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  padding: 7px;
}
.top-float-div .favorite {
  margin-right: 12px;
  cursor: pointer;
}
.product-list .product-list-item figure {
  margin-bottom: 12px;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  height: 156px;
}
.product-list .product-list-item figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-list .product-list-item h3 {
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
}
.product-list .product-list-item p {
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.product-list .product-list-item span {
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
}
</style>