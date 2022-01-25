<template>
    <ImageSlider/>
   <h1 class="text-purple-1" >Main Content</h1>
          <p class="text-2xl bg-red-600">The quick brown fox ...</p>
          <button class="bg-indigo-500 bg-purple-1">
  Save changes
</button>
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

<script>
import ImageSlider from '../components/ImageSlider.vue'
  export default {
    name: 'Home',
    components:{
      ImageSlider
    }
  }
</script>

<style lang="scss" scoped>

</style>