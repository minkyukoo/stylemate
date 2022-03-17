<template>
  <!-- <ion-page> -->
  <div class="brand-page">
    <!-- header -->
    <TopNav headerTitle="Brand"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap" @scroll="windowScroll">
      <BrandList :windowScroll="scroller" />
    </div>
    <!-- </ion-content> -->
    <!-- End page content -->
  </div>
  <!-- </ion-page> -->
</template>

<script>
// import { IonPage } from "@ionic/vue";
//import ExploreContainer from '@/components/ExploreContainer.vue';
import BrandList from "./pages/BrandList.vue";
import TopNav from "@/components/TopNav.vue";
import { ref } from "vue";

export default {
  name: "Brand",
  components: { TopNav, BrandList },
  setup() {
    const data = ref(0);
    const scroller = ref(0);
    const windowScroll = () => {
      if (data.value === 1) {
        scroller.value = data.value;
        console.log(data.value);
      }
      data.value++
    };
    return {
      windowScroll,
      scroller
    };
  },
};
</script>
