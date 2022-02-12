<template>
    <!-- Product details start  -->
   <div class="main">
      <div
        class="maincard"
        v-for="info in brandItem"
        :key="info.id"
        @click="$router.push({ name: 'BrandDetails',  params: { id: info.id } })"
      >
        <figure class="img-wrap">
          <img :src="info.imageThumbnailPath" class="imgsec" alt="ion" />
        </figure>
        <ion-card-header>
          <ion-card-title>
            {{ info.korName }}
            <div class="text-box">
              <img src="@/assets/icons/heart-outline.svg"  />
            </div>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content class="maincontent">
          {{
            info.description
          }}
        </ion-card-content>
        <ion-card-content
          class="subcontent"
          v-for="tagdata in info.tag"
          :key="tagdata"
        ># {{ tagdata.tag }}</ion-card-content>
      </div>
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
