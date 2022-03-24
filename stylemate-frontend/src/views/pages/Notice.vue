<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="고객센터"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <div class="main-wrap">
      <NoticeTab />
    </div>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';
import TopNav from "@/components/TopNav.vue";
import NoticeTab from "@/components/NoticeTab.vue";
export default {
  name: "Notice",
  components: { TopNav, IonPage, NoticeTab },
  // data() {
  //   return {
  //     page: 1,
  //     currentPageUrl: 1,
  //   };
  // },
  methods: {
    // onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
    //   if (scrollTop + clientHeight >= scrollHeight) {
    //     console.log("end reached");
    //     this.page++;
    //     this.currentPageUrl = this.page;
    //     console.log(this.page);
    //   }
    // },
    openlink() {
      console.log("clivk");
    },
  },
};
</script>
