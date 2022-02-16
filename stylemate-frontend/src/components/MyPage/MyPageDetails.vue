<template>
  <div v-if="setPageStatus === 'default'">
    <MyPageDetailsDefault v-on:setPage="setPageType($event)" />
  </div>
  <div v-else-if="setPageStatus === 'sponsorship'">
    <MyPageDetailsSponsorship />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MyPageDetailsDefault from "./MyPageDetailsDefault.vue";
import MyPageDetailsSponsorship from "./MyPageDetailsSponsorship.vue";
export default defineComponent({
  name: "MyPageDetails",
  components: {
    MyPageDetailsDefault,
    MyPageDetailsSponsorship,
  },
  data() {
    return {
      setPageStatus: "default",
    };
  },
  methods: {
    setPageType(page) {
      console.log(page);
      this.setPageStatus = page;
    },
  },
  
});
</script>

<style scoped>

</style>