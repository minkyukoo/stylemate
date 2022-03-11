<template>
  <div>
    <SponsorTab />
  </div>
  <div v-if="!store.state.campaignEmpty">
    <SponsorFilter />
  </div>
  <div>
    <SponsorProgress />
  </div>
</template>

<script>
import { inject } from "vue";
import SponsorTab from "./SponsorTab.vue";
import SponsorFilter from "./SponsorFilter.vue";
import SponsorProgress from "./SponsorProgress.vue";
export default {
  name: "MyPageDetailsSponsorship",
  components: { SponsorTab, SponsorFilter, SponsorProgress },
  data() {
    return {
      myPageService: null,
    };
  },
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  methods: {},
};
</script>

<style>
</style>