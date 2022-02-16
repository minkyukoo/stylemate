<template>
  <div>
    <SponsorTab />
  </div>
  <div>
    <SponsorFilter />
  </div>
</template>

<script>
import SponsorTab from "./SponsorTab.vue";
import SponsorFilter from "./SponsorFilter.vue";
export default {
  name: "MyPageDetailsSponsorship",
  components: { SponsorTab, SponsorFilter },
};
</script>

<style>
</style>