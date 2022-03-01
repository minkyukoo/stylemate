<template>
  <div class="postactivity-page">
    <!-- header -->
    <TopNav headerTitle="post activity" />
    <!-- End header -->
    <!-- page content -->
    <!-- <ion-content :fullscreen="true"> -->
    <div class="main-wrap">
      <MyTop :userDetails="userDetail" :status="status" :image="profileImg" />
      <PostActivityDetails />
    </div>
    <!-- </ion-content> -->
  </div>
</template>

<script>
// import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import MyTop from "@/components/MyPage/MyPageTop.vue";
import PostActivityDetails from "@/components/MyPage/PostActivityDetails.vue";
export default {
  name: "PostActivity",
  components: { TopNav, MyTop, PostActivityDetails },
}
</script>

<style>
</style>