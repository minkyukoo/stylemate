<template>
  <!-- Product details start  -->
  <div class="brand-product">
    <ul class="product-list grid-view">
      <li
        v-for="(product, index) in brandItem"
        :key="index"
        class="product-list-item"
        @click="$router.push({ name: 'ItemDetails' })"
      >
        <figure>
          <img :src="product.imageThumbnailPath" />
          <div class="top-float-div">
            <div class="social-icon">
              <img src="@/assets/icons/instagram.svg" />
            </div>
            <div class="favorite">
              <img src="@/assets/icons/heart-outline.svg" />
            </div>
          </div>
        </figure>
        <!-- <h3>{{ product.title }}</h3> -->
        <p>{{ product.description }}</p>
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
  },
  data() {
    return {
      products: null,
    };
  },
};
</script>
<style scoped>
</style>
