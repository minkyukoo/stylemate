<template>
  <div>
    <h1>Home</h1>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
  export default {
    name: 'Home',
    setup(){
    const siteData = reactive({
      title: `My Stylemate Home page`,
      description: `My beautiful website`,
    });
    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    });
  }
  }
</script>

<style lang="scss" scoped>

</style>