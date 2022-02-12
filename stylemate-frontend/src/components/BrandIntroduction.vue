<template>
  <div class="mainse">
    <p>
      <!-- ‘Nike’ starts with having faith and confidence in my own abilities and
          values.<br />
          It has the meaning of French 'amour propre' which contains the meaning
          of self-esteem and self-respect. We pursue a sensible everyday look so
          that the wearer can have a natural look of their own with minimal and
      neat details and a snug fit that fits the body type.-->
      {{ brandIntro }}
    </p>
    <img :src="`${brandThumb}`" class="imgsec" />
  </div>
</template>
<script>

export default {
  name: "BrandIntroduction",
  props: {
    brandIntro: {
      type: String,
    },
    brandThumb: {
      type: String,
    }
  }
};
</script>

<style scoped>
.mainse {
  height: 1000px;
  /* max-width: 500px;
  min-width: 500px; */
  width: 100%;
  padding: 30px 0 0 0;
}

.mainse p{
    margin: 0 0 20px 0;
  }
.imgsec{
  width: 500px;
}
</style>
