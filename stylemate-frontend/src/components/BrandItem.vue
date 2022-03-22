<template>
  <!-- Product details start  -->
  <div class="brand-product">
    <ul class="product-list grid-view">
      <li
        v-for="(product, index) in brandItem"
        :key="index"
        class="product-list-item"
        @click="$router.push({ name: 'ItemDetails', params: { id: product.id } })">
        <div class="top-float-div">
            <div class="social-icon">
              <img src="@/assets/icons/instagram.svg" />
            </div>
            <div class="favorite">
              <img src="@/assets/icons/heart-outline.svg" />
            </div>
          </div>
        <figure>
          <img :src="product.imageThumbnailPath" />
        </figure>
        <h3>{{ brandName }}</h3>
        <p>{{ product.name }}</p>
        <!-- <span>{{ product.hashtags }}</span> -->
        <div class="hashWrap">
          <span v-for="(hash, index) in product.tag" :key="index">
            {{
              '#' + hash.tag
            }}
          </span>
        </div>
      </li>
    </ul>
  </div>
  <!--  Product details end  -->
</template>
<script>
export default {
  name: "BrandItems",
  props: {
    brandItem: {
      type: Array,
    },
    brandName: {
      type: String,
    },
  },
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    console.log('vdavsvsdvdsfvsdfv--',this.$props.brandItem);
  }
};
</script>
<style scoped>
.brand-product{
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
}
.brand-product .product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 30px -4px;
  padding-bottom: 100px;
}
.brand-product .grid-view .product-list-item {
  width: 50%;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 4px;
  margin-bottom: 24px;
  text-align: left;
  position: relative;
}
.brand-product .product-list .product-list-item figure {
  position: relative;
  margin-bottom: 12px;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  height: auto;
}
.brand-product .product-list .product-list-item figure > img {
  width: 100%;
}
.brand-product .product-list .product-list-item h3 {
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.brand-product .product-list .product-list-item p {
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #25282b;
  margin-bottom: 4px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.brand-product .product-list .product-list-item span {
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
  margin-left: 4px;
}
.brand-product .product-list .product-list-item span:first-child{
  margin-left: 0;
}
.brand-product .product-list .product-list-item figure{
  height: 156px;
}

.brand-product .product-list .product-list-item figure img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.brand-product .product-list-item figure {
  position: relative;
  width: 120px;
}
/* .brand-product .product-list-item .social-icon {
  position: absolute;
  top: 0;
  padding: 7px;
}
.brand-product .product-list-item .social-icon img {
  cursor: pointer;
}*/
.brand-product .product-list-item .favorite {
  margin-right: 12px;
  cursor: pointer;
} 
 .top-float-div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  padding: 7px;
  z-index: 1;
}
</style>
