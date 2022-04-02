<template>
  <div class="sponsership-page">
    <!-- header -->
    <TopNav headerTitle="협찬활동" />
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap" @scroll="onScroll">
      <MyTop />
      <MyPageDetailsSponsorship />
    </div>
    <!-- </ion-content> -->
  </div>
</template>

<script>
// import { IonPage, IonContent } from "@ionic/vue";
import { inject } from "vue";
import TopNav from "@/components/TopNav.vue";
import MyTop from "@/components/MyPage/MyPageTop.vue";
import MyPageDetailsSponsorship from "@/components/MyPage/MyPageDetailsSponsorship.vue";
export default {
  name: "Sponsorship",
  components: { TopNav, MyTop, MyPageDetailsSponsorship },
  data() {
    return {
      page: 1,
    }
  },
  setup() {
    const store = inject("store");
    return { store };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onScroll2(e) {
      // console.log(e);
    },
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight) {
        // console.log('end reached');
        let last_page = this.store.state.sponcerMeta.last_page;
        if (this.page < last_page) {
          this.page = this.store.state.sponcerPageNo + 1;
          // console.log('page from itemvue:-:', this.page);
          this.store.methods.getcampList(this.page);
        } else {
          this.page = last_page;
        }
      }
    }
  },
  unmounted() {
    this.store.state.FltCampaignData = [];
    this.store.state.sponcerMeta = null;
    this.store.state.sponcerPageNo = 1;
  },
};
</script>

<style>
</style>