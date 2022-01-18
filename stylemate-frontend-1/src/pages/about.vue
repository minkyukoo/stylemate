<template>
  <div>
    <h1>About</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
export default {
  name: 'About',
  setup(){
    const siteData = reactive({
      title: `My Stylemate About page`,
      description: `My beautiful website`,
    });
    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
        {
          
        }
      ],
    });
  }
  
}
</script>

<style lang="scss" scoped>
</style>