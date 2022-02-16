<template>
  <ion-page>
    <!-- header -->
    <TopNav headerTitle="post activity" />
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <MyTop />
      <PostActivityDetails />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import MyTop from "@/components/MyPage/MyPageTop.vue";
import PostActivityDetails from "@/components/MyPage/PostActivityDetails.vue";
export default {
    name: "PostActivity",
    components: { TopNav, IonContent, IonPage, MyTop, PostActivityDetails },
}
</script>

<style>

</style>