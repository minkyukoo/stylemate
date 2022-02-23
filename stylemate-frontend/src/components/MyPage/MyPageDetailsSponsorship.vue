<template>
  <div>
    <SponsorTab />
  </div>
  <div>
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
import MyPageService from "@/services/MyPageService";
export default {
  name: "MyPageDetailsSponsorship",
  components: { SponsorTab, SponsorFilter, SponsorProgress },
  data() {
    return {
      myPageService: null,
    };
  },
  created() {
    this.myPageService = new MyPageService();
  },
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  mounted() {
    this.myPageService.getCampaignData().then((res) => {
      console.log("data list", res);
    });
  },
  methods: {
    
  },
};
</script>

<style>
</style>