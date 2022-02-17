<template>
  <ion-page class="main-container relative">
    <!-- header -->
    <TopNav headerTitle="알림"></TopNav>
    <!-- End header -->
    <!-- page content -->
    <ion-content :fullscreen="true">
      <div class="inner-container">
        <DropDown class="pad-t-32" />

        <h1>Notifications</h1>
      </div>
    </ion-content>
    <!-- End page content -->
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import TopNav from "@/components/TopNav.vue";
import DropDown from "@/components/utilities/DropDown.vue";

import UserInfoService from "@/services/UserInfoService";

export default {
  name: "Notifications",
  components: { TopNav, IonContent, IonPage, DropDown },
  data() {
    return {
      notifications: [],
    };
  },
  created() {
    this.userInfoService = new UserInfoService();
  },
  mounted() {
    this.userInfoService.getUserInfo().then((userInfo) => {
      this.userInfoService.getNotice(userInfo.data.uid).then((notice) => {
        this.notifications = notice.data.data;
      });
    });
  },
  methods: {
    humanReadableFormat(date) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let dt = new Date(date);
      let month = months[dt.getMonth()];
      return `${month} ${dt.getDate()}, ${dt.getFullYear()}`;
    },
  },
};
</script>

<style>
.main-container {
  max-width: 500px;
  min-width: 360px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
</style>