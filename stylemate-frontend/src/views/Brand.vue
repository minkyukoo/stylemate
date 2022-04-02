<template>
  <!-- <ion-page> -->
  <div class="brand-page">
    <!-- header -->
    <TopNav headerTitle="Brand"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap" @scroll="windowScroll">
      <BrandList @searchInputBlur="getBlur($event)" @searchInputFocus="getFocus($event)" />
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
    // for child components emit data calculations
    const dataFocus = ref(false);
    const dataBlur = ref(false);

    const windowScroll = () => {
      if (data.value === 1 && dataFocus.value === true && dataBlur.value === false) {
        keyboardHide("keyboardHide");
        // console.log(data.value);
        // console.log('keyboardHide');
      }
      data.value++;
    };

    const getBlur = (e) => {
      if (e) {
        dataBlur.value = true;
        dataFocus.value = false;
        // alert(e);
        // console.log("Input Blur");
      }
    };

    const getFocus = (e) => {
      if (e) {
        dataFocus.value = true;
        dataBlur.value = false;
        data.value = 0;
        // alert(e);
        // console.log("Input Focus");
      }
    };

    const keyboardHide = (e) => {
      window.parent.postMessage( e, '*');
      dataBlur.value = true;
      dataFocus.value = false;
      // console.log(e);
      // alert(e);
    };

    return {
      windowScroll,
      getBlur,
      keyboardHide,
      getFocus,
    };
  },
};
</script>
