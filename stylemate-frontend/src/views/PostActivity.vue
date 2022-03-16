<template>
  <div class="postactivity-page">
    <!-- header -->
    <TopNav headerTitle="post activity" />
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap" @scroll="onScroll">
      <MyTop :userDetails="userDetail" :status="status" :image="profileImg" />
      <PostActivityDetails :page="page" @lastPage="setlastPage($event)" />
    </div>
    <!-- </ion-content> -->
  </div>
</template>

<script>
// import { IonPage, IonContent } from "@ionic/vue";
import { inject } from "vue";
import TopNav from "@/components/TopNav.vue";
import MyTop from "@/components/MyPage/MyPageTop.vue";
import PostActivityDetails from "@/components/MyPage/PostActivityDetails.vue";
import MyPageService from "@/services/MyPageService";
export default {
  name: "PostActivity",
  data() {
    return {
      page: 1,
      last_page: 1,
    }
  },
  setup() {
    const store = inject("store");
    return {
      store,
    };
  },
  components: { TopNav, MyTop, PostActivityDetails },
  created() {
    this.myPageService = new MyPageService();
  },
  methods: {
    setlastPage(event){
      this.last_page = event;
    },
    onScroll2(e) {
      console.log(e);
    },
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight) {
        // console.log('end reached');
        if (this.page < this.last_page) {
          this.page = this.page + 1;
          console.log('page from itemvue:-', this.page);
        } else {
          this.page = this.last_page;
        }
      }
    },
  },
}
</script>

<style>
</style>